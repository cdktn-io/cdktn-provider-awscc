# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-awscc.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsccProvider <a name="AwsccProvider" id="@cdktn/provider-awscc.provider.AwsccProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs awscc}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer"></a>

```python
from cdktn_provider_awscc import provider

provider.AwsccProvider(
  scope: Construct,
  id: str,
  access_key: str = None,
  alias: str = None,
  assume_role: AwsccProviderAssumeRole = None,
  assume_role_with_web_identity: AwsccProviderAssumeRoleWithWebIdentity = None,
  endpoints: AwsccProviderEndpoints = None,
  http_proxy: str = None,
  https_proxy: str = None,
  insecure: bool | IResolvable = None,
  max_retries: typing.Union[int, float] = None,
  no_proxy: str = None,
  profile: str = None,
  region: str = None,
  role_arn: str = None,
  secret_key: str = None,
  shared_config_files: typing.List[str] = None,
  shared_credentials_files: typing.List[str] = None,
  skip_medatadata_api_check: bool | IResolvable = None,
  skip_metadata_api_check: bool | IResolvable = None,
  token: str = None,
  user_agent: IResolvable | typing.List[AwsccProviderUserAgent] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.accessKey">access_key</a></code> | <code>str</code> | This is the AWS access key. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.assumeRole">assume_role</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a></code> | An `assume_role` block (documented below). Only one `assume_role` block may be in the configuration. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.assumeRoleWithWebIdentity">assume_role_with_web_identity</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a></code> | An `assume_role_with_web_identity` block (documented below). Only one `assume_role_with_web_identity` block may be in the configuration. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a></code> | An `endpoints` block (documented below). Only one `endpoints` block may be in the configuration. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.httpProxy">http_proxy</a></code> | <code>str</code> | URL of a proxy to use for HTTP requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.httpsProxy">https_proxy</a></code> | <code>str</code> | URL of a proxy to use for HTTPS requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.insecure">insecure</a></code> | <code>bool \| cdktn.IResolvable</code> | Explicitly allow the provider to perform "insecure" SSL requests. If not set, defaults to `false`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.noProxy">no_proxy</a></code> | <code>str</code> | Comma-separated list of hosts that should not use HTTP or HTTPS proxies. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.profile">profile</a></code> | <code>str</code> | This is the AWS profile name as set in the shared credentials file. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.region">region</a></code> | <code>str</code> | This is the AWS region. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Amazon Resource Name of the AWS CloudFormation service role that is used on your behalf to perform operations. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.secretKey">secret_key</a></code> | <code>str</code> | This is the AWS secret key. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.sharedConfigFiles">shared_config_files</a></code> | <code>typing.List[str]</code> | List of paths to shared config files. If not set, defaults to `~/.aws/config`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.sharedCredentialsFiles">shared_credentials_files</a></code> | <code>typing.List[str]</code> | List of paths to shared credentials files. If not set, defaults to `~/.aws/credentials`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.skipMedatadataApiCheck">skip_medatadata_api_check</a></code> | <code>bool \| cdktn.IResolvable</code> | Skip the AWS Metadata API check. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.skipMetadataApiCheck">skip_metadata_api_check</a></code> | <code>bool \| cdktn.IResolvable</code> | Skip the AWS Metadata API check. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.token">token</a></code> | <code>str</code> | Session token for validating temporary credentials. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.userAgent">user_agent</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>]</code> | Product details to append to the User-Agent string sent in all AWS API calls. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `access_key`<sup>Optional</sup> <a name="access_key" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.accessKey"></a>

- *Type:* str

This is the AWS access key.

It must be provided, but it can also be sourced from the `AWS_ACCESS_KEY_ID` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#access_key AwsccProvider#access_key}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#alias AwsccProvider#alias}

---

##### `assume_role`<sup>Optional</sup> <a name="assume_role" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.assumeRole"></a>

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a>

An `assume_role` block (documented below). Only one `assume_role` block may be in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#assume_role AwsccProvider#assume_role}

---

##### `assume_role_with_web_identity`<sup>Optional</sup> <a name="assume_role_with_web_identity" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.assumeRoleWithWebIdentity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a>

An `assume_role_with_web_identity` block (documented below). Only one `assume_role_with_web_identity` block may be in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#assume_role_with_web_identity AwsccProvider#assume_role_with_web_identity}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.endpoints"></a>

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a>

An `endpoints` block (documented below). Only one `endpoints` block may be in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#endpoints AwsccProvider#endpoints}

---

##### `http_proxy`<sup>Optional</sup> <a name="http_proxy" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.httpProxy"></a>

- *Type:* str

URL of a proxy to use for HTTP requests when accessing the AWS API.

Can also be set using the `HTTP_PROXY` or `http_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#http_proxy AwsccProvider#http_proxy}

---

##### `https_proxy`<sup>Optional</sup> <a name="https_proxy" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.httpsProxy"></a>

- *Type:* str

URL of a proxy to use for HTTPS requests when accessing the AWS API.

Can also be set using the `HTTPS_PROXY` or `https_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#https_proxy AwsccProvider#https_proxy}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.insecure"></a>

- *Type:* bool | cdktn.IResolvable

Explicitly allow the provider to perform "insecure" SSL requests. If not set, defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#insecure AwsccProvider#insecure}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#max_retries AwsccProvider#max_retries}

---

##### `no_proxy`<sup>Optional</sup> <a name="no_proxy" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.noProxy"></a>

- *Type:* str

Comma-separated list of hosts that should not use HTTP or HTTPS proxies.

Can also be set using the `NO_PROXY` or `no_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#no_proxy AwsccProvider#no_proxy}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.profile"></a>

- *Type:* str

This is the AWS profile name as set in the shared credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#profile AwsccProvider#profile}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.region"></a>

- *Type:* str

This is the AWS region.

It must be provided, but it can also be sourced from the `AWS_DEFAULT_REGION` environment variables, via a shared config file, or from the EC2 Instance Metadata Service if used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#region AwsccProvider#region}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.roleArn"></a>

- *Type:* str

Amazon Resource Name of the AWS CloudFormation service role that is used on your behalf to perform operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#role_arn AwsccProvider#role_arn}

---

##### `secret_key`<sup>Optional</sup> <a name="secret_key" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.secretKey"></a>

- *Type:* str

This is the AWS secret key.

It must be provided, but it can also be sourced from the `AWS_SECRET_ACCESS_KEY` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#secret_key AwsccProvider#secret_key}

---

##### `shared_config_files`<sup>Optional</sup> <a name="shared_config_files" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.sharedConfigFiles"></a>

- *Type:* typing.List[str]

List of paths to shared config files. If not set, defaults to `~/.aws/config`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#shared_config_files AwsccProvider#shared_config_files}

---

##### `shared_credentials_files`<sup>Optional</sup> <a name="shared_credentials_files" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.sharedCredentialsFiles"></a>

- *Type:* typing.List[str]

List of paths to shared credentials files. If not set, defaults to `~/.aws/credentials`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#shared_credentials_files AwsccProvider#shared_credentials_files}

---

##### `skip_medatadata_api_check`<sup>Optional</sup> <a name="skip_medatadata_api_check" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.skipMedatadataApiCheck"></a>

- *Type:* bool | cdktn.IResolvable

Skip the AWS Metadata API check.

Useful for AWS API implementations that do not have a metadata API endpoint.  Setting to `true` prevents Terraform from authenticating via the Metadata API. You may need to use other authentication methods like static credentials, configuration variables, or environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#skip_medatadata_api_check AwsccProvider#skip_medatadata_api_check}

---

##### `skip_metadata_api_check`<sup>Optional</sup> <a name="skip_metadata_api_check" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.skipMetadataApiCheck"></a>

- *Type:* bool | cdktn.IResolvable

Skip the AWS Metadata API check.

Useful for AWS API implementations that do not have a metadata API endpoint.  Setting to `true` prevents Terraform from authenticating via the Metadata API. You may need to use other authentication methods like static credentials, configuration variables, or environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#skip_metadata_api_check AwsccProvider#skip_metadata_api_check}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.token"></a>

- *Type:* str

Session token for validating temporary credentials.

Typically provided after successful identity federation or Multi-Factor Authentication (MFA) login. With MFA login, this is the session token provided afterward, not the 6 digit MFA code used to get temporary credentials.  It can also be sourced from the `AWS_SESSION_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#token AwsccProvider#token}

---

##### `user_agent`<sup>Optional</sup> <a name="user_agent" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.userAgent"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>]

Product details to append to the User-Agent string sent in all AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#user_agent AwsccProvider#user_agent}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetAccessKey">reset_access_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetAssumeRole">reset_assume_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetAssumeRoleWithWebIdentity">reset_assume_role_with_web_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetEndpoints">reset_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetHttpProxy">reset_http_proxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetHttpsProxy">reset_https_proxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetInsecure">reset_insecure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetMaxRetries">reset_max_retries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetNoProxy">reset_no_proxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetProfile">reset_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetSecretKey">reset_secret_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetSharedConfigFiles">reset_shared_config_files</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetSharedCredentialsFiles">reset_shared_credentials_files</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetSkipMedatadataApiCheck">reset_skip_medatadata_api_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetSkipMetadataApiCheck">reset_skip_metadata_api_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetUserAgent">reset_user_agent</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.provider.AwsccProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.provider.AwsccProvider.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.provider.AwsccProvider.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.provider.AwsccProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.provider.AwsccProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.provider.AwsccProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.provider.AwsccProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.provider.AwsccProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.provider.AwsccProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.provider.AwsccProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.provider.AwsccProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.provider.AwsccProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_access_key` <a name="reset_access_key" id="@cdktn/provider-awscc.provider.AwsccProvider.resetAccessKey"></a>

```python
def reset_access_key() -> None
```

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-awscc.provider.AwsccProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_assume_role` <a name="reset_assume_role" id="@cdktn/provider-awscc.provider.AwsccProvider.resetAssumeRole"></a>

```python
def reset_assume_role() -> None
```

##### `reset_assume_role_with_web_identity` <a name="reset_assume_role_with_web_identity" id="@cdktn/provider-awscc.provider.AwsccProvider.resetAssumeRoleWithWebIdentity"></a>

```python
def reset_assume_role_with_web_identity() -> None
```

##### `reset_endpoints` <a name="reset_endpoints" id="@cdktn/provider-awscc.provider.AwsccProvider.resetEndpoints"></a>

```python
def reset_endpoints() -> None
```

##### `reset_http_proxy` <a name="reset_http_proxy" id="@cdktn/provider-awscc.provider.AwsccProvider.resetHttpProxy"></a>

```python
def reset_http_proxy() -> None
```

##### `reset_https_proxy` <a name="reset_https_proxy" id="@cdktn/provider-awscc.provider.AwsccProvider.resetHttpsProxy"></a>

```python
def reset_https_proxy() -> None
```

##### `reset_insecure` <a name="reset_insecure" id="@cdktn/provider-awscc.provider.AwsccProvider.resetInsecure"></a>

```python
def reset_insecure() -> None
```

##### `reset_max_retries` <a name="reset_max_retries" id="@cdktn/provider-awscc.provider.AwsccProvider.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```

##### `reset_no_proxy` <a name="reset_no_proxy" id="@cdktn/provider-awscc.provider.AwsccProvider.resetNoProxy"></a>

```python
def reset_no_proxy() -> None
```

##### `reset_profile` <a name="reset_profile" id="@cdktn/provider-awscc.provider.AwsccProvider.resetProfile"></a>

```python
def reset_profile() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-awscc.provider.AwsccProvider.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.provider.AwsccProvider.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_secret_key` <a name="reset_secret_key" id="@cdktn/provider-awscc.provider.AwsccProvider.resetSecretKey"></a>

```python
def reset_secret_key() -> None
```

##### `reset_shared_config_files` <a name="reset_shared_config_files" id="@cdktn/provider-awscc.provider.AwsccProvider.resetSharedConfigFiles"></a>

```python
def reset_shared_config_files() -> None
```

##### `reset_shared_credentials_files` <a name="reset_shared_credentials_files" id="@cdktn/provider-awscc.provider.AwsccProvider.resetSharedCredentialsFiles"></a>

```python
def reset_shared_credentials_files() -> None
```

##### `reset_skip_medatadata_api_check` <a name="reset_skip_medatadata_api_check" id="@cdktn/provider-awscc.provider.AwsccProvider.resetSkipMedatadataApiCheck"></a>

```python
def reset_skip_medatadata_api_check() -> None
```

##### `reset_skip_metadata_api_check` <a name="reset_skip_metadata_api_check" id="@cdktn/provider-awscc.provider.AwsccProvider.resetSkipMetadataApiCheck"></a>

```python
def reset_skip_metadata_api_check() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktn/provider-awscc.provider.AwsccProvider.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_user_agent` <a name="reset_user_agent" id="@cdktn/provider-awscc.provider.AwsccProvider.resetUserAgent"></a>

```python
def reset_user_agent() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AwsccProvider resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.provider.AwsccProvider.isConstruct"></a>

```python
from cdktn_provider_awscc import provider

provider.AwsccProvider.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.provider.AwsccProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.provider.AwsccProvider.isTerraformElement"></a>

```python
from cdktn_provider_awscc import provider

provider.AwsccProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.provider.AwsccProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktn/provider-awscc.provider.AwsccProvider.isTerraformProvider"></a>

```python
from cdktn_provider_awscc import provider

provider.AwsccProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.provider.AwsccProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import provider

provider.AwsccProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AwsccProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AwsccProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AwsccProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AwsccProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.accessKeyInput">access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleInput">assume_role_input</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleWithWebIdentityInput">assume_role_with_web_identity_input</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.endpointsInput">endpoints_input</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.httpProxyInput">http_proxy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.httpsProxyInput">https_proxy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.insecureInput">insecure_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.noProxyInput">no_proxy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.profileInput">profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.secretKeyInput">secret_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.sharedConfigFilesInput">shared_config_files_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.sharedCredentialsFilesInput">shared_credentials_files_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.skipMedatadataApiCheckInput">skip_medatadata_api_check_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.skipMetadataApiCheckInput">skip_metadata_api_check_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.userAgentInput">user_agent_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.accessKey">access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRole">assume_role</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleWithWebIdentity">assume_role_with_web_identity</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.httpProxy">http_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.httpsProxy">https_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.insecure">insecure</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.noProxy">no_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.secretKey">secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.sharedConfigFiles">shared_config_files</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.sharedCredentialsFiles">shared_credentials_files</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.skipMedatadataApiCheck">skip_medatadata_api_check</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.skipMetadataApiCheck">skip_metadata_api_check</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.userAgent">user_agent</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.provider.AwsccProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.provider.AwsccProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.provider.AwsccProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.provider.AwsccProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktn/provider-awscc.provider.AwsccProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.provider.AwsccProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.provider.AwsccProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktn/provider-awscc.provider.AwsccProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.provider.AwsccProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `access_key_input`<sup>Optional</sup> <a name="access_key_input" id="@cdktn/provider-awscc.provider.AwsccProvider.property.accessKeyInput"></a>

```python
access_key_input: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-awscc.provider.AwsccProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `assume_role_input`<sup>Optional</sup> <a name="assume_role_input" id="@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleInput"></a>

```python
assume_role_input: AwsccProviderAssumeRole
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a>

---

##### `assume_role_with_web_identity_input`<sup>Optional</sup> <a name="assume_role_with_web_identity_input" id="@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleWithWebIdentityInput"></a>

```python
assume_role_with_web_identity_input: AwsccProviderAssumeRoleWithWebIdentity
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a>

---

##### `endpoints_input`<sup>Optional</sup> <a name="endpoints_input" id="@cdktn/provider-awscc.provider.AwsccProvider.property.endpointsInput"></a>

```python
endpoints_input: AwsccProviderEndpoints
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a>

---

##### `http_proxy_input`<sup>Optional</sup> <a name="http_proxy_input" id="@cdktn/provider-awscc.provider.AwsccProvider.property.httpProxyInput"></a>

```python
http_proxy_input: str
```

- *Type:* str

---

##### `https_proxy_input`<sup>Optional</sup> <a name="https_proxy_input" id="@cdktn/provider-awscc.provider.AwsccProvider.property.httpsProxyInput"></a>

```python
https_proxy_input: str
```

- *Type:* str

---

##### `insecure_input`<sup>Optional</sup> <a name="insecure_input" id="@cdktn/provider-awscc.provider.AwsccProvider.property.insecureInput"></a>

```python
insecure_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktn/provider-awscc.provider.AwsccProvider.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `no_proxy_input`<sup>Optional</sup> <a name="no_proxy_input" id="@cdktn/provider-awscc.provider.AwsccProvider.property.noProxyInput"></a>

```python
no_proxy_input: str
```

- *Type:* str

---

##### `profile_input`<sup>Optional</sup> <a name="profile_input" id="@cdktn/provider-awscc.provider.AwsccProvider.property.profileInput"></a>

```python
profile_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-awscc.provider.AwsccProvider.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.provider.AwsccProvider.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `secret_key_input`<sup>Optional</sup> <a name="secret_key_input" id="@cdktn/provider-awscc.provider.AwsccProvider.property.secretKeyInput"></a>

```python
secret_key_input: str
```

- *Type:* str

---

##### `shared_config_files_input`<sup>Optional</sup> <a name="shared_config_files_input" id="@cdktn/provider-awscc.provider.AwsccProvider.property.sharedConfigFilesInput"></a>

```python
shared_config_files_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shared_credentials_files_input`<sup>Optional</sup> <a name="shared_credentials_files_input" id="@cdktn/provider-awscc.provider.AwsccProvider.property.sharedCredentialsFilesInput"></a>

```python
shared_credentials_files_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_medatadata_api_check_input`<sup>Optional</sup> <a name="skip_medatadata_api_check_input" id="@cdktn/provider-awscc.provider.AwsccProvider.property.skipMedatadataApiCheckInput"></a>

```python
skip_medatadata_api_check_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `skip_metadata_api_check_input`<sup>Optional</sup> <a name="skip_metadata_api_check_input" id="@cdktn/provider-awscc.provider.AwsccProvider.property.skipMetadataApiCheckInput"></a>

```python
skip_metadata_api_check_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktn/provider-awscc.provider.AwsccProvider.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `user_agent_input`<sup>Optional</sup> <a name="user_agent_input" id="@cdktn/provider-awscc.provider.AwsccProvider.property.userAgentInput"></a>

```python
user_agent_input: IResolvable | typing.List[AwsccProviderUserAgent]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>]

---

##### `access_key`<sup>Optional</sup> <a name="access_key" id="@cdktn/provider-awscc.provider.AwsccProvider.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

---

##### `assume_role`<sup>Optional</sup> <a name="assume_role" id="@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRole"></a>

```python
assume_role: AwsccProviderAssumeRole
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a>

---

##### `assume_role_with_web_identity`<sup>Optional</sup> <a name="assume_role_with_web_identity" id="@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleWithWebIdentity"></a>

```python
assume_role_with_web_identity: AwsccProviderAssumeRoleWithWebIdentity
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a>

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktn/provider-awscc.provider.AwsccProvider.property.endpoints"></a>

```python
endpoints: AwsccProviderEndpoints
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a>

---

##### `http_proxy`<sup>Optional</sup> <a name="http_proxy" id="@cdktn/provider-awscc.provider.AwsccProvider.property.httpProxy"></a>

```python
http_proxy: str
```

- *Type:* str

---

##### `https_proxy`<sup>Optional</sup> <a name="https_proxy" id="@cdktn/provider-awscc.provider.AwsccProvider.property.httpsProxy"></a>

```python
https_proxy: str
```

- *Type:* str

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-awscc.provider.AwsccProvider.property.insecure"></a>

```python
insecure: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktn/provider-awscc.provider.AwsccProvider.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `no_proxy`<sup>Optional</sup> <a name="no_proxy" id="@cdktn/provider-awscc.provider.AwsccProvider.property.noProxy"></a>

```python
no_proxy: str
```

- *Type:* str

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-awscc.provider.AwsccProvider.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.provider.AwsccProvider.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.provider.AwsccProvider.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `secret_key`<sup>Optional</sup> <a name="secret_key" id="@cdktn/provider-awscc.provider.AwsccProvider.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

---

##### `shared_config_files`<sup>Optional</sup> <a name="shared_config_files" id="@cdktn/provider-awscc.provider.AwsccProvider.property.sharedConfigFiles"></a>

```python
shared_config_files: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shared_credentials_files`<sup>Optional</sup> <a name="shared_credentials_files" id="@cdktn/provider-awscc.provider.AwsccProvider.property.sharedCredentialsFiles"></a>

```python
shared_credentials_files: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_medatadata_api_check`<sup>Optional</sup> <a name="skip_medatadata_api_check" id="@cdktn/provider-awscc.provider.AwsccProvider.property.skipMedatadataApiCheck"></a>

```python
skip_medatadata_api_check: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `skip_metadata_api_check`<sup>Optional</sup> <a name="skip_metadata_api_check" id="@cdktn/provider-awscc.provider.AwsccProvider.property.skipMetadataApiCheck"></a>

```python
skip_metadata_api_check: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-awscc.provider.AwsccProvider.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `user_agent`<sup>Optional</sup> <a name="user_agent" id="@cdktn/provider-awscc.provider.AwsccProvider.property.userAgent"></a>

```python
user_agent: IResolvable | typing.List[AwsccProviderUserAgent]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.provider.AwsccProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AwsccProviderAssumeRole <a name="AwsccProviderAssumeRole" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.Initializer"></a>

```python
from cdktn_provider_awscc import provider

provider.AwsccProviderAssumeRole(
  role_arn: str,
  duration: str = None,
  external_id: str = None,
  policy: str = None,
  policy_arns: typing.List[str] = None,
  session_name: str = None,
  tags: typing.Mapping[str] = None,
  transitive_tag_keys: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.roleArn">role_arn</a></code> | <code>str</code> | Amazon Resource Name (ARN) of the IAM Role to assume. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.duration">duration</a></code> | <code>str</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.externalId">external_id</a></code> | <code>str</code> | External identifier to use when assuming the role. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.policy">policy</a></code> | <code>str</code> | IAM policy in JSON format to use as a session policy. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.policyArns">policy_arns</a></code> | <code>typing.List[str]</code> | Amazon Resource Names (ARNs) of IAM Policies to use as managed session policies. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.sessionName">session_name</a></code> | <code>str</code> | Session name to use when assuming the role. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Map of assume role session tags. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.transitiveTagKeys">transitive_tag_keys</a></code> | <code>typing.List[str]</code> | Set of assume role session tag keys to pass to any subsequent sessions. |

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Amazon Resource Name (ARN) of the IAM Role to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#role_arn AwsccProvider#role_arn}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.duration"></a>

```python
duration: str
```

- *Type:* str

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#duration AwsccProvider#duration}

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

External identifier to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#external_id AwsccProvider#external_id}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.policy"></a>

```python
policy: str
```

- *Type:* str

IAM policy in JSON format to use as a session policy.

The effective permissions for the session will be the intersection between this polcy and the role's policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#policy AwsccProvider#policy}

---

##### `policy_arns`<sup>Optional</sup> <a name="policy_arns" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.policyArns"></a>

```python
policy_arns: typing.List[str]
```

- *Type:* typing.List[str]

Amazon Resource Names (ARNs) of IAM Policies to use as managed session policies.

The effective permissions for the session will be the intersection between these polcy and the role's policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#policy_arns AwsccProvider#policy_arns}

---

##### `session_name`<sup>Optional</sup> <a name="session_name" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.sessionName"></a>

```python
session_name: str
```

- *Type:* str

Session name to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#session_name AwsccProvider#session_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of assume role session tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#tags AwsccProvider#tags}

---

##### `transitive_tag_keys`<sup>Optional</sup> <a name="transitive_tag_keys" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.transitiveTagKeys"></a>

```python
transitive_tag_keys: typing.List[str]
```

- *Type:* typing.List[str]

Set of assume role session tag keys to pass to any subsequent sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#transitive_tag_keys AwsccProvider#transitive_tag_keys}

---

### AwsccProviderAssumeRoleWithWebIdentity <a name="AwsccProviderAssumeRoleWithWebIdentity" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.Initializer"></a>

```python
from cdktn_provider_awscc import provider

provider.AwsccProviderAssumeRoleWithWebIdentity(
  role_arn: str,
  duration: str = None,
  policy: str = None,
  policy_arns: typing.List[str] = None,
  session_name: str = None,
  web_identity_token: str = None,
  web_identity_token_file: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.roleArn">role_arn</a></code> | <code>str</code> | Amazon Resource Name (ARN) of the IAM Role to assume. Can also be set with the environment variable `AWS_ROLE_ARN`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.duration">duration</a></code> | <code>str</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.policy">policy</a></code> | <code>str</code> | IAM policy in JSON format to use as a session policy. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.policyArns">policy_arns</a></code> | <code>typing.List[str]</code> | Amazon Resource Names (ARNs) of IAM Policies to use as managed session policies. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.sessionName">session_name</a></code> | <code>str</code> | Session name to use when assuming the role. Can also be set with the environment variable `AWS_ROLE_SESSION_NAME`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.webIdentityToken">web_identity_token</a></code> | <code>str</code> | The value of a web identity token from an OpenID Connect (OIDC) or OAuth provider. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile">web_identity_token_file</a></code> | <code>str</code> | File containing a web identity token from an OpenID Connect (OIDC) or OAuth provider. |

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Amazon Resource Name (ARN) of the IAM Role to assume. Can also be set with the environment variable `AWS_ROLE_ARN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#role_arn AwsccProvider#role_arn}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.duration"></a>

```python
duration: str
```

- *Type:* str

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#duration AwsccProvider#duration}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.policy"></a>

```python
policy: str
```

- *Type:* str

IAM policy in JSON format to use as a session policy.

The effective permissions for the session will be the intersection between this polcy and the role's policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#policy AwsccProvider#policy}

---

##### `policy_arns`<sup>Optional</sup> <a name="policy_arns" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.policyArns"></a>

```python
policy_arns: typing.List[str]
```

- *Type:* typing.List[str]

Amazon Resource Names (ARNs) of IAM Policies to use as managed session policies.

The effective permissions for the session will be the intersection between these polcy and the role's policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#policy_arns AwsccProvider#policy_arns}

---

##### `session_name`<sup>Optional</sup> <a name="session_name" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.sessionName"></a>

```python
session_name: str
```

- *Type:* str

Session name to use when assuming the role. Can also be set with the environment variable `AWS_ROLE_SESSION_NAME`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#session_name AwsccProvider#session_name}

---

##### `web_identity_token`<sup>Optional</sup> <a name="web_identity_token" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.webIdentityToken"></a>

```python
web_identity_token: str
```

- *Type:* str

The value of a web identity token from an OpenID Connect (OIDC) or OAuth provider.

One of `web_identity_token` or `web_identity_token_file` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#web_identity_token AwsccProvider#web_identity_token}

---

##### `web_identity_token_file`<sup>Optional</sup> <a name="web_identity_token_file" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile"></a>

```python
web_identity_token_file: str
```

- *Type:* str

File containing a web identity token from an OpenID Connect (OIDC) or OAuth provider.

Can also be set with the  environment variable`AWS_WEB_IDENTITY_TOKEN_FILE`. One of `web_identity_token_file` or `web_identity_token` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#web_identity_token_file AwsccProvider#web_identity_token_file}

---

### AwsccProviderConfig <a name="AwsccProviderConfig" id="@cdktn/provider-awscc.provider.AwsccProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import provider

provider.AwsccProviderConfig(
  access_key: str = None,
  alias: str = None,
  assume_role: AwsccProviderAssumeRole = None,
  assume_role_with_web_identity: AwsccProviderAssumeRoleWithWebIdentity = None,
  endpoints: AwsccProviderEndpoints = None,
  http_proxy: str = None,
  https_proxy: str = None,
  insecure: bool | IResolvable = None,
  max_retries: typing.Union[int, float] = None,
  no_proxy: str = None,
  profile: str = None,
  region: str = None,
  role_arn: str = None,
  secret_key: str = None,
  shared_config_files: typing.List[str] = None,
  shared_credentials_files: typing.List[str] = None,
  skip_medatadata_api_check: bool | IResolvable = None,
  skip_metadata_api_check: bool | IResolvable = None,
  token: str = None,
  user_agent: IResolvable | typing.List[AwsccProviderUserAgent] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.accessKey">access_key</a></code> | <code>str</code> | This is the AWS access key. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.assumeRole">assume_role</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a></code> | An `assume_role` block (documented below). Only one `assume_role` block may be in the configuration. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.assumeRoleWithWebIdentity">assume_role_with_web_identity</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a></code> | An `assume_role_with_web_identity` block (documented below). Only one `assume_role_with_web_identity` block may be in the configuration. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a></code> | An `endpoints` block (documented below). Only one `endpoints` block may be in the configuration. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.httpProxy">http_proxy</a></code> | <code>str</code> | URL of a proxy to use for HTTP requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.httpsProxy">https_proxy</a></code> | <code>str</code> | URL of a proxy to use for HTTPS requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.insecure">insecure</a></code> | <code>bool \| cdktn.IResolvable</code> | Explicitly allow the provider to perform "insecure" SSL requests. If not set, defaults to `false`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.noProxy">no_proxy</a></code> | <code>str</code> | Comma-separated list of hosts that should not use HTTP or HTTPS proxies. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.profile">profile</a></code> | <code>str</code> | This is the AWS profile name as set in the shared credentials file. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.region">region</a></code> | <code>str</code> | This is the AWS region. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Amazon Resource Name of the AWS CloudFormation service role that is used on your behalf to perform operations. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.secretKey">secret_key</a></code> | <code>str</code> | This is the AWS secret key. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.sharedConfigFiles">shared_config_files</a></code> | <code>typing.List[str]</code> | List of paths to shared config files. If not set, defaults to `~/.aws/config`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.sharedCredentialsFiles">shared_credentials_files</a></code> | <code>typing.List[str]</code> | List of paths to shared credentials files. If not set, defaults to `~/.aws/credentials`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.skipMedatadataApiCheck">skip_medatadata_api_check</a></code> | <code>bool \| cdktn.IResolvable</code> | Skip the AWS Metadata API check. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.skipMetadataApiCheck">skip_metadata_api_check</a></code> | <code>bool \| cdktn.IResolvable</code> | Skip the AWS Metadata API check. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.token">token</a></code> | <code>str</code> | Session token for validating temporary credentials. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.userAgent">user_agent</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>]</code> | Product details to append to the User-Agent string sent in all AWS API calls. |

---

##### `access_key`<sup>Optional</sup> <a name="access_key" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

This is the AWS access key.

It must be provided, but it can also be sourced from the `AWS_ACCESS_KEY_ID` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#access_key AwsccProvider#access_key}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#alias AwsccProvider#alias}

---

##### `assume_role`<sup>Optional</sup> <a name="assume_role" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.assumeRole"></a>

```python
assume_role: AwsccProviderAssumeRole
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a>

An `assume_role` block (documented below). Only one `assume_role` block may be in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#assume_role AwsccProvider#assume_role}

---

##### `assume_role_with_web_identity`<sup>Optional</sup> <a name="assume_role_with_web_identity" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.assumeRoleWithWebIdentity"></a>

```python
assume_role_with_web_identity: AwsccProviderAssumeRoleWithWebIdentity
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a>

An `assume_role_with_web_identity` block (documented below). Only one `assume_role_with_web_identity` block may be in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#assume_role_with_web_identity AwsccProvider#assume_role_with_web_identity}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.endpoints"></a>

```python
endpoints: AwsccProviderEndpoints
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a>

An `endpoints` block (documented below). Only one `endpoints` block may be in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#endpoints AwsccProvider#endpoints}

---

##### `http_proxy`<sup>Optional</sup> <a name="http_proxy" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.httpProxy"></a>

```python
http_proxy: str
```

- *Type:* str

URL of a proxy to use for HTTP requests when accessing the AWS API.

Can also be set using the `HTTP_PROXY` or `http_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#http_proxy AwsccProvider#http_proxy}

---

##### `https_proxy`<sup>Optional</sup> <a name="https_proxy" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.httpsProxy"></a>

```python
https_proxy: str
```

- *Type:* str

URL of a proxy to use for HTTPS requests when accessing the AWS API.

Can also be set using the `HTTPS_PROXY` or `https_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#https_proxy AwsccProvider#https_proxy}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.insecure"></a>

```python
insecure: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Explicitly allow the provider to perform "insecure" SSL requests. If not set, defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#insecure AwsccProvider#insecure}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#max_retries AwsccProvider#max_retries}

---

##### `no_proxy`<sup>Optional</sup> <a name="no_proxy" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.noProxy"></a>

```python
no_proxy: str
```

- *Type:* str

Comma-separated list of hosts that should not use HTTP or HTTPS proxies.

Can also be set using the `NO_PROXY` or `no_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#no_proxy AwsccProvider#no_proxy}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.profile"></a>

```python
profile: str
```

- *Type:* str

This is the AWS profile name as set in the shared credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#profile AwsccProvider#profile}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.region"></a>

```python
region: str
```

- *Type:* str

This is the AWS region.

It must be provided, but it can also be sourced from the `AWS_DEFAULT_REGION` environment variables, via a shared config file, or from the EC2 Instance Metadata Service if used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#region AwsccProvider#region}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Amazon Resource Name of the AWS CloudFormation service role that is used on your behalf to perform operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#role_arn AwsccProvider#role_arn}

---

##### `secret_key`<sup>Optional</sup> <a name="secret_key" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

This is the AWS secret key.

It must be provided, but it can also be sourced from the `AWS_SECRET_ACCESS_KEY` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#secret_key AwsccProvider#secret_key}

---

##### `shared_config_files`<sup>Optional</sup> <a name="shared_config_files" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.sharedConfigFiles"></a>

```python
shared_config_files: typing.List[str]
```

- *Type:* typing.List[str]

List of paths to shared config files. If not set, defaults to `~/.aws/config`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#shared_config_files AwsccProvider#shared_config_files}

---

##### `shared_credentials_files`<sup>Optional</sup> <a name="shared_credentials_files" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.sharedCredentialsFiles"></a>

```python
shared_credentials_files: typing.List[str]
```

- *Type:* typing.List[str]

List of paths to shared credentials files. If not set, defaults to `~/.aws/credentials`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#shared_credentials_files AwsccProvider#shared_credentials_files}

---

##### `skip_medatadata_api_check`<sup>Optional</sup> <a name="skip_medatadata_api_check" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.skipMedatadataApiCheck"></a>

```python
skip_medatadata_api_check: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Skip the AWS Metadata API check.

Useful for AWS API implementations that do not have a metadata API endpoint.  Setting to `true` prevents Terraform from authenticating via the Metadata API. You may need to use other authentication methods like static credentials, configuration variables, or environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#skip_medatadata_api_check AwsccProvider#skip_medatadata_api_check}

---

##### `skip_metadata_api_check`<sup>Optional</sup> <a name="skip_metadata_api_check" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.skipMetadataApiCheck"></a>

```python
skip_metadata_api_check: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Skip the AWS Metadata API check.

Useful for AWS API implementations that do not have a metadata API endpoint.  Setting to `true` prevents Terraform from authenticating via the Metadata API. You may need to use other authentication methods like static credentials, configuration variables, or environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#skip_metadata_api_check AwsccProvider#skip_metadata_api_check}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Session token for validating temporary credentials.

Typically provided after successful identity federation or Multi-Factor Authentication (MFA) login. With MFA login, this is the session token provided afterward, not the 6 digit MFA code used to get temporary credentials.  It can also be sourced from the `AWS_SESSION_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#token AwsccProvider#token}

---

##### `user_agent`<sup>Optional</sup> <a name="user_agent" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.userAgent"></a>

```python
user_agent: IResolvable | typing.List[AwsccProviderUserAgent]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>]

Product details to append to the User-Agent string sent in all AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#user_agent AwsccProvider#user_agent}

---

### AwsccProviderEndpoints <a name="AwsccProviderEndpoints" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints.Initializer"></a>

```python
from cdktn_provider_awscc import provider

provider.AwsccProviderEndpoints(
  cloudcontrolapi: str = None,
  iam: str = None,
  sso: str = None,
  sts: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.cloudcontrolapi">cloudcontrolapi</a></code> | <code>str</code> | Use this to override the default Cloud Control API service endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.iam">iam</a></code> | <code>str</code> | Use this to override the default IAM service endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.sso">sso</a></code> | <code>str</code> | Use this to override the default SSO service endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.sts">sts</a></code> | <code>str</code> | Use this to override the default STS service endpoint URL. |

---

##### `cloudcontrolapi`<sup>Optional</sup> <a name="cloudcontrolapi" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.cloudcontrolapi"></a>

```python
cloudcontrolapi: str
```

- *Type:* str

Use this to override the default Cloud Control API service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#cloudcontrolapi AwsccProvider#cloudcontrolapi}

---

##### `iam`<sup>Optional</sup> <a name="iam" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.iam"></a>

```python
iam: str
```

- *Type:* str

Use this to override the default IAM service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#iam AwsccProvider#iam}

---

##### `sso`<sup>Optional</sup> <a name="sso" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.sso"></a>

```python
sso: str
```

- *Type:* str

Use this to override the default SSO service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#sso AwsccProvider#sso}

---

##### `sts`<sup>Optional</sup> <a name="sts" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.sts"></a>

```python
sts: str
```

- *Type:* str

Use this to override the default STS service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#sts AwsccProvider#sts}

---

### AwsccProviderUserAgent <a name="AwsccProviderUserAgent" id="@cdktn/provider-awscc.provider.AwsccProviderUserAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.provider.AwsccProviderUserAgent.Initializer"></a>

```python
from cdktn_provider_awscc import provider

provider.AwsccProviderUserAgent(
  product_name: str,
  comment: str = None,
  product_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.productName">product_name</a></code> | <code>str</code> | Product name. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.comment">comment</a></code> | <code>str</code> | Comment describing any additional product details. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.productVersion">product_version</a></code> | <code>str</code> | Product version. Optional, and should only be set when `product_name` is set. |

---

##### `product_name`<sup>Required</sup> <a name="product_name" id="@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.productName"></a>

```python
product_name: str
```

- *Type:* str

Product name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#product_name AwsccProvider#product_name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.comment"></a>

```python
comment: str
```

- *Type:* str

Comment describing any additional product details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#comment AwsccProvider#comment}

---

##### `product_version`<sup>Optional</sup> <a name="product_version" id="@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.productVersion"></a>

```python
product_version: str
```

- *Type:* str

Product version. Optional, and should only be set when `product_name` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs#product_version AwsccProvider#product_version}

---



