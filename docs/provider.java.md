# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-awscc.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsccProvider <a name="AwsccProvider" id="@cdktn/provider-awscc.provider.AwsccProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs awscc}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer"></a>

```java
import io.cdktn.providers.awscc.provider.AwsccProvider;

AwsccProvider.Builder.create(Construct scope, java.lang.String id)
//  .accessKey(java.lang.String)
//  .alias(java.lang.String)
//  .assumeRole(AwsccProviderAssumeRole)
//  .assumeRoleWithWebIdentity(AwsccProviderAssumeRoleWithWebIdentity)
//  .endpoints(AwsccProviderEndpoints)
//  .httpProxy(java.lang.String)
//  .httpsProxy(java.lang.String)
//  .insecure(java.lang.Boolean|IResolvable)
//  .maxRetries(java.lang.Number)
//  .noProxy(java.lang.String)
//  .profile(java.lang.String)
//  .region(java.lang.String)
//  .roleArn(java.lang.String)
//  .secretKey(java.lang.String)
//  .sharedConfigFiles(java.util.List<java.lang.String>)
//  .sharedCredentialsFiles(java.util.List<java.lang.String>)
//  .skipMedatadataApiCheck(java.lang.Boolean|IResolvable)
//  .skipMetadataApiCheck(java.lang.Boolean|IResolvable)
//  .token(java.lang.String)
//  .userAgent(IResolvable|java.util.List<AwsccProviderUserAgent>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.accessKey">accessKey</a></code> | <code>java.lang.String</code> | This is the AWS access key. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.assumeRole">assumeRole</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a></code> | An `assume_role` block (documented below). Only one `assume_role` block may be in the configuration. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.assumeRoleWithWebIdentity">assumeRoleWithWebIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a></code> | An `assume_role_with_web_identity` block (documented below). Only one `assume_role_with_web_identity` block may be in the configuration. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a></code> | An `endpoints` block (documented below). Only one `endpoints` block may be in the configuration. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.httpProxy">httpProxy</a></code> | <code>java.lang.String</code> | URL of a proxy to use for HTTP requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.httpsProxy">httpsProxy</a></code> | <code>java.lang.String</code> | URL of a proxy to use for HTTPS requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.insecure">insecure</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Explicitly allow the provider to perform "insecure" SSL requests. If not set, defaults to `false`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.noProxy">noProxy</a></code> | <code>java.lang.String</code> | Comma-separated list of hosts that should not use HTTP or HTTPS proxies. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.profile">profile</a></code> | <code>java.lang.String</code> | This is the AWS profile name as set in the shared credentials file. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | This is the AWS region. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Amazon Resource Name of the AWS CloudFormation service role that is used on your behalf to perform operations. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.secretKey">secretKey</a></code> | <code>java.lang.String</code> | This is the AWS secret key. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.sharedConfigFiles">sharedConfigFiles</a></code> | <code>java.util.List<java.lang.String></code> | List of paths to shared config files. If not set, defaults to `~/.aws/config`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.sharedCredentialsFiles">sharedCredentialsFiles</a></code> | <code>java.util.List<java.lang.String></code> | List of paths to shared credentials files. If not set, defaults to `~/.aws/credentials`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.skipMedatadataApiCheck">skipMedatadataApiCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Skip the AWS Metadata API check. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.skipMetadataApiCheck">skipMetadataApiCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Skip the AWS Metadata API check. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | Session token for validating temporary credentials. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.userAgent">userAgent</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>></code> | Product details to append to the User-Agent string sent in all AWS API calls. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.accessKey"></a>

- *Type:* java.lang.String

This is the AWS access key.

It must be provided, but it can also be sourced from the `AWS_ACCESS_KEY_ID` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#access_key AwsccProvider#access_key}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#alias AwsccProvider#alias}

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.assumeRole"></a>

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a>

An `assume_role` block (documented below). Only one `assume_role` block may be in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#assume_role AwsccProvider#assume_role}

---

##### `assumeRoleWithWebIdentity`<sup>Optional</sup> <a name="assumeRoleWithWebIdentity" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.assumeRoleWithWebIdentity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a>

An `assume_role_with_web_identity` block (documented below). Only one `assume_role_with_web_identity` block may be in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#assume_role_with_web_identity AwsccProvider#assume_role_with_web_identity}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.endpoints"></a>

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a>

An `endpoints` block (documented below). Only one `endpoints` block may be in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#endpoints AwsccProvider#endpoints}

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.httpProxy"></a>

- *Type:* java.lang.String

URL of a proxy to use for HTTP requests when accessing the AWS API.

Can also be set using the `HTTP_PROXY` or `http_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#http_proxy AwsccProvider#http_proxy}

---

##### `httpsProxy`<sup>Optional</sup> <a name="httpsProxy" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.httpsProxy"></a>

- *Type:* java.lang.String

URL of a proxy to use for HTTPS requests when accessing the AWS API.

Can also be set using the `HTTPS_PROXY` or `https_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#https_proxy AwsccProvider#https_proxy}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.insecure"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Explicitly allow the provider to perform "insecure" SSL requests. If not set, defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#insecure AwsccProvider#insecure}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.maxRetries"></a>

- *Type:* java.lang.Number

The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#max_retries AwsccProvider#max_retries}

---

##### `noProxy`<sup>Optional</sup> <a name="noProxy" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.noProxy"></a>

- *Type:* java.lang.String

Comma-separated list of hosts that should not use HTTP or HTTPS proxies.

Can also be set using the `NO_PROXY` or `no_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#no_proxy AwsccProvider#no_proxy}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.profile"></a>

- *Type:* java.lang.String

This is the AWS profile name as set in the shared credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#profile AwsccProvider#profile}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.region"></a>

- *Type:* java.lang.String

This is the AWS region.

It must be provided, but it can also be sourced from the `AWS_DEFAULT_REGION` environment variables, via a shared config file, or from the EC2 Instance Metadata Service if used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#region AwsccProvider#region}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Amazon Resource Name of the AWS CloudFormation service role that is used on your behalf to perform operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#role_arn AwsccProvider#role_arn}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.secretKey"></a>

- *Type:* java.lang.String

This is the AWS secret key.

It must be provided, but it can also be sourced from the `AWS_SECRET_ACCESS_KEY` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#secret_key AwsccProvider#secret_key}

---

##### `sharedConfigFiles`<sup>Optional</sup> <a name="sharedConfigFiles" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.sharedConfigFiles"></a>

- *Type:* java.util.List<java.lang.String>

List of paths to shared config files. If not set, defaults to `~/.aws/config`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#shared_config_files AwsccProvider#shared_config_files}

---

##### `sharedCredentialsFiles`<sup>Optional</sup> <a name="sharedCredentialsFiles" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.sharedCredentialsFiles"></a>

- *Type:* java.util.List<java.lang.String>

List of paths to shared credentials files. If not set, defaults to `~/.aws/credentials`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#shared_credentials_files AwsccProvider#shared_credentials_files}

---

##### `skipMedatadataApiCheck`<sup>Optional</sup> <a name="skipMedatadataApiCheck" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.skipMedatadataApiCheck"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Skip the AWS Metadata API check.

Useful for AWS API implementations that do not have a metadata API endpoint.  Setting to `true` prevents Terraform from authenticating via the Metadata API. You may need to use other authentication methods like static credentials, configuration variables, or environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#skip_medatadata_api_check AwsccProvider#skip_medatadata_api_check}

---

##### `skipMetadataApiCheck`<sup>Optional</sup> <a name="skipMetadataApiCheck" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.skipMetadataApiCheck"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Skip the AWS Metadata API check.

Useful for AWS API implementations that do not have a metadata API endpoint.  Setting to `true` prevents Terraform from authenticating via the Metadata API. You may need to use other authentication methods like static credentials, configuration variables, or environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#skip_metadata_api_check AwsccProvider#skip_metadata_api_check}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.token"></a>

- *Type:* java.lang.String

Session token for validating temporary credentials.

Typically provided after successful identity federation or Multi-Factor Authentication (MFA) login. With MFA login, this is the session token provided afterward, not the 6 digit MFA code used to get temporary credentials.  It can also be sourced from the `AWS_SESSION_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#token AwsccProvider#token}

---

##### `userAgent`<sup>Optional</sup> <a name="userAgent" id="@cdktn/provider-awscc.provider.AwsccProvider.Initializer.parameter.userAgent"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>>

Product details to append to the User-Agent string sent in all AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#user_agent AwsccProvider#user_agent}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetAssumeRole">resetAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetAssumeRoleWithWebIdentity">resetAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetEndpoints">resetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetHttpProxy">resetHttpProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetHttpsProxy">resetHttpsProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetNoProxy">resetNoProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetSecretKey">resetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetSharedConfigFiles">resetSharedConfigFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetSharedCredentialsFiles">resetSharedCredentialsFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetSkipMedatadataApiCheck">resetSkipMedatadataApiCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetSkipMetadataApiCheck">resetSkipMetadataApiCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.resetUserAgent">resetUserAgent</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.provider.AwsccProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.provider.AwsccProvider.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.provider.AwsccProvider.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.provider.AwsccProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.provider.AwsccProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.provider.AwsccProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.provider.AwsccProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.provider.AwsccProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.provider.AwsccProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.provider.AwsccProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.provider.AwsccProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.provider.AwsccProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktn/provider-awscc.provider.AwsccProvider.resetAccessKey"></a>

```java
public void resetAccessKey()
```

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-awscc.provider.AwsccProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAssumeRole` <a name="resetAssumeRole" id="@cdktn/provider-awscc.provider.AwsccProvider.resetAssumeRole"></a>

```java
public void resetAssumeRole()
```

##### `resetAssumeRoleWithWebIdentity` <a name="resetAssumeRoleWithWebIdentity" id="@cdktn/provider-awscc.provider.AwsccProvider.resetAssumeRoleWithWebIdentity"></a>

```java
public void resetAssumeRoleWithWebIdentity()
```

##### `resetEndpoints` <a name="resetEndpoints" id="@cdktn/provider-awscc.provider.AwsccProvider.resetEndpoints"></a>

```java
public void resetEndpoints()
```

##### `resetHttpProxy` <a name="resetHttpProxy" id="@cdktn/provider-awscc.provider.AwsccProvider.resetHttpProxy"></a>

```java
public void resetHttpProxy()
```

##### `resetHttpsProxy` <a name="resetHttpsProxy" id="@cdktn/provider-awscc.provider.AwsccProvider.resetHttpsProxy"></a>

```java
public void resetHttpsProxy()
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktn/provider-awscc.provider.AwsccProvider.resetInsecure"></a>

```java
public void resetInsecure()
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktn/provider-awscc.provider.AwsccProvider.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```

##### `resetNoProxy` <a name="resetNoProxy" id="@cdktn/provider-awscc.provider.AwsccProvider.resetNoProxy"></a>

```java
public void resetNoProxy()
```

##### `resetProfile` <a name="resetProfile" id="@cdktn/provider-awscc.provider.AwsccProvider.resetProfile"></a>

```java
public void resetProfile()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.provider.AwsccProvider.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.provider.AwsccProvider.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetSecretKey` <a name="resetSecretKey" id="@cdktn/provider-awscc.provider.AwsccProvider.resetSecretKey"></a>

```java
public void resetSecretKey()
```

##### `resetSharedConfigFiles` <a name="resetSharedConfigFiles" id="@cdktn/provider-awscc.provider.AwsccProvider.resetSharedConfigFiles"></a>

```java
public void resetSharedConfigFiles()
```

##### `resetSharedCredentialsFiles` <a name="resetSharedCredentialsFiles" id="@cdktn/provider-awscc.provider.AwsccProvider.resetSharedCredentialsFiles"></a>

```java
public void resetSharedCredentialsFiles()
```

##### `resetSkipMedatadataApiCheck` <a name="resetSkipMedatadataApiCheck" id="@cdktn/provider-awscc.provider.AwsccProvider.resetSkipMedatadataApiCheck"></a>

```java
public void resetSkipMedatadataApiCheck()
```

##### `resetSkipMetadataApiCheck` <a name="resetSkipMetadataApiCheck" id="@cdktn/provider-awscc.provider.AwsccProvider.resetSkipMetadataApiCheck"></a>

```java
public void resetSkipMetadataApiCheck()
```

##### `resetToken` <a name="resetToken" id="@cdktn/provider-awscc.provider.AwsccProvider.resetToken"></a>

```java
public void resetToken()
```

##### `resetUserAgent` <a name="resetUserAgent" id="@cdktn/provider-awscc.provider.AwsccProvider.resetUserAgent"></a>

```java
public void resetUserAgent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AwsccProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.provider.AwsccProvider.isConstruct"></a>

```java
import io.cdktn.providers.awscc.provider.AwsccProvider;

AwsccProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.provider.AwsccProvider.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.provider.AwsccProvider;

AwsccProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.provider.AwsccProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktn/provider-awscc.provider.AwsccProvider.isTerraformProvider"></a>

```java
import io.cdktn.providers.awscc.provider.AwsccProvider;

AwsccProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.provider.AwsccProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.provider.AwsccProvider;

AwsccProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AwsccProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AwsccProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AwsccProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AwsccProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.provider.AwsccProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AwsccProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.accessKeyInput">accessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleInput">assumeRoleInput</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleWithWebIdentityInput">assumeRoleWithWebIdentityInput</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.endpointsInput">endpointsInput</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.httpProxyInput">httpProxyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.httpsProxyInput">httpsProxyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.insecureInput">insecureInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.noProxyInput">noProxyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.profileInput">profileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.secretKeyInput">secretKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.sharedConfigFilesInput">sharedConfigFilesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.sharedCredentialsFilesInput">sharedCredentialsFilesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.skipMedatadataApiCheckInput">skipMedatadataApiCheckInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.skipMetadataApiCheckInput">skipMetadataApiCheckInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.userAgentInput">userAgentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRole">assumeRole</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleWithWebIdentity">assumeRoleWithWebIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.httpProxy">httpProxy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.httpsProxy">httpsProxy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.insecure">insecure</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.noProxy">noProxy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.profile">profile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.sharedConfigFiles">sharedConfigFiles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.sharedCredentialsFiles">sharedCredentialsFiles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.skipMedatadataApiCheck">skipMedatadataApiCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.skipMetadataApiCheck">skipMetadataApiCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.userAgent">userAgent</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.provider.AwsccProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.provider.AwsccProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.provider.AwsccProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.provider.AwsccProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktn/provider-awscc.provider.AwsccProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.provider.AwsccProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.provider.AwsccProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktn/provider-awscc.provider.AwsccProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.provider.AwsccProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.accessKeyInput"></a>

```java
public java.lang.String getAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `assumeRoleInput`<sup>Optional</sup> <a name="assumeRoleInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleInput"></a>

```java
public AwsccProviderAssumeRole getAssumeRoleInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a>

---

##### `assumeRoleWithWebIdentityInput`<sup>Optional</sup> <a name="assumeRoleWithWebIdentityInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleWithWebIdentityInput"></a>

```java
public AwsccProviderAssumeRoleWithWebIdentity getAssumeRoleWithWebIdentityInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a>

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.endpointsInput"></a>

```java
public AwsccProviderEndpoints getEndpointsInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a>

---

##### `httpProxyInput`<sup>Optional</sup> <a name="httpProxyInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.httpProxyInput"></a>

```java
public java.lang.String getHttpProxyInput();
```

- *Type:* java.lang.String

---

##### `httpsProxyInput`<sup>Optional</sup> <a name="httpsProxyInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.httpsProxyInput"></a>

```java
public java.lang.String getHttpsProxyInput();
```

- *Type:* java.lang.String

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.insecureInput"></a>

```java
public java.lang.Boolean|IResolvable getInsecureInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `noProxyInput`<sup>Optional</sup> <a name="noProxyInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.noProxyInput"></a>

```java
public java.lang.String getNoProxyInput();
```

- *Type:* java.lang.String

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.profileInput"></a>

```java
public java.lang.String getProfileInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.secretKeyInput"></a>

```java
public java.lang.String getSecretKeyInput();
```

- *Type:* java.lang.String

---

##### `sharedConfigFilesInput`<sup>Optional</sup> <a name="sharedConfigFilesInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.sharedConfigFilesInput"></a>

```java
public java.util.List<java.lang.String> getSharedConfigFilesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sharedCredentialsFilesInput`<sup>Optional</sup> <a name="sharedCredentialsFilesInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.sharedCredentialsFilesInput"></a>

```java
public java.util.List<java.lang.String> getSharedCredentialsFilesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skipMedatadataApiCheckInput`<sup>Optional</sup> <a name="skipMedatadataApiCheckInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.skipMedatadataApiCheckInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipMedatadataApiCheckInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `skipMetadataApiCheckInput`<sup>Optional</sup> <a name="skipMetadataApiCheckInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.skipMetadataApiCheckInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipMetadataApiCheckInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `userAgentInput`<sup>Optional</sup> <a name="userAgentInput" id="@cdktn/provider-awscc.provider.AwsccProvider.property.userAgentInput"></a>

```java
public IResolvable|java.util.List<AwsccProviderUserAgent> getUserAgentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>>

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktn/provider-awscc.provider.AwsccProvider.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRole"></a>

```java
public AwsccProviderAssumeRole getAssumeRole();
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a>

---

##### `assumeRoleWithWebIdentity`<sup>Optional</sup> <a name="assumeRoleWithWebIdentity" id="@cdktn/provider-awscc.provider.AwsccProvider.property.assumeRoleWithWebIdentity"></a>

```java
public AwsccProviderAssumeRoleWithWebIdentity getAssumeRoleWithWebIdentity();
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a>

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktn/provider-awscc.provider.AwsccProvider.property.endpoints"></a>

```java
public AwsccProviderEndpoints getEndpoints();
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a>

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@cdktn/provider-awscc.provider.AwsccProvider.property.httpProxy"></a>

```java
public java.lang.String getHttpProxy();
```

- *Type:* java.lang.String

---

##### `httpsProxy`<sup>Optional</sup> <a name="httpsProxy" id="@cdktn/provider-awscc.provider.AwsccProvider.property.httpsProxy"></a>

```java
public java.lang.String getHttpsProxy();
```

- *Type:* java.lang.String

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-awscc.provider.AwsccProvider.property.insecure"></a>

```java
public java.lang.Boolean|IResolvable getInsecure();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-awscc.provider.AwsccProvider.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `noProxy`<sup>Optional</sup> <a name="noProxy" id="@cdktn/provider-awscc.provider.AwsccProvider.property.noProxy"></a>

```java
public java.lang.String getNoProxy();
```

- *Type:* java.lang.String

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-awscc.provider.AwsccProvider.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.provider.AwsccProvider.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.provider.AwsccProvider.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktn/provider-awscc.provider.AwsccProvider.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

---

##### `sharedConfigFiles`<sup>Optional</sup> <a name="sharedConfigFiles" id="@cdktn/provider-awscc.provider.AwsccProvider.property.sharedConfigFiles"></a>

```java
public java.util.List<java.lang.String> getSharedConfigFiles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sharedCredentialsFiles`<sup>Optional</sup> <a name="sharedCredentialsFiles" id="@cdktn/provider-awscc.provider.AwsccProvider.property.sharedCredentialsFiles"></a>

```java
public java.util.List<java.lang.String> getSharedCredentialsFiles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skipMedatadataApiCheck`<sup>Optional</sup> <a name="skipMedatadataApiCheck" id="@cdktn/provider-awscc.provider.AwsccProvider.property.skipMedatadataApiCheck"></a>

```java
public java.lang.Boolean|IResolvable getSkipMedatadataApiCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `skipMetadataApiCheck`<sup>Optional</sup> <a name="skipMetadataApiCheck" id="@cdktn/provider-awscc.provider.AwsccProvider.property.skipMetadataApiCheck"></a>

```java
public java.lang.Boolean|IResolvable getSkipMetadataApiCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-awscc.provider.AwsccProvider.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `userAgent`<sup>Optional</sup> <a name="userAgent" id="@cdktn/provider-awscc.provider.AwsccProvider.property.userAgent"></a>

```java
public IResolvable|java.util.List<AwsccProviderUserAgent> getUserAgent();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.provider.AwsccProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AwsccProviderAssumeRole <a name="AwsccProviderAssumeRole" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.Initializer"></a>

```java
import io.cdktn.providers.awscc.provider.AwsccProviderAssumeRole;

AwsccProviderAssumeRole.builder()
    .roleArn(java.lang.String)
//  .duration(java.lang.String)
//  .externalId(java.lang.String)
//  .policy(java.lang.String)
//  .policyArns(java.util.List<java.lang.String>)
//  .sessionName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .transitiveTagKeys(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Amazon Resource Name (ARN) of the IAM Role to assume. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.duration">duration</a></code> | <code>java.lang.String</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.externalId">externalId</a></code> | <code>java.lang.String</code> | External identifier to use when assuming the role. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.policy">policy</a></code> | <code>java.lang.String</code> | IAM policy in JSON format to use as a session policy. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.policyArns">policyArns</a></code> | <code>java.util.List<java.lang.String></code> | Amazon Resource Names (ARNs) of IAM Policies to use as managed session policies. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.sessionName">sessionName</a></code> | <code>java.lang.String</code> | Session name to use when assuming the role. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of assume role session tags. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.transitiveTagKeys">transitiveTagKeys</a></code> | <code>java.util.List<java.lang.String></code> | Set of assume role session tag keys to pass to any subsequent sessions. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Amazon Resource Name (ARN) of the IAM Role to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#role_arn AwsccProvider#role_arn}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#duration AwsccProvider#duration}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

External identifier to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#external_id AwsccProvider#external_id}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

IAM policy in JSON format to use as a session policy.

The effective permissions for the session will be the intersection between this polcy and the role's policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#policy AwsccProvider#policy}

---

##### `policyArns`<sup>Optional</sup> <a name="policyArns" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.policyArns"></a>

```java
public java.util.List<java.lang.String> getPolicyArns();
```

- *Type:* java.util.List<java.lang.String>

Amazon Resource Names (ARNs) of IAM Policies to use as managed session policies.

The effective permissions for the session will be the intersection between these polcy and the role's policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#policy_arns AwsccProvider#policy_arns}

---

##### `sessionName`<sup>Optional</sup> <a name="sessionName" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.sessionName"></a>

```java
public java.lang.String getSessionName();
```

- *Type:* java.lang.String

Session name to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#session_name AwsccProvider#session_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of assume role session tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#tags AwsccProvider#tags}

---

##### `transitiveTagKeys`<sup>Optional</sup> <a name="transitiveTagKeys" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRole.property.transitiveTagKeys"></a>

```java
public java.util.List<java.lang.String> getTransitiveTagKeys();
```

- *Type:* java.util.List<java.lang.String>

Set of assume role session tag keys to pass to any subsequent sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#transitive_tag_keys AwsccProvider#transitive_tag_keys}

---

### AwsccProviderAssumeRoleWithWebIdentity <a name="AwsccProviderAssumeRoleWithWebIdentity" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.Initializer"></a>

```java
import io.cdktn.providers.awscc.provider.AwsccProviderAssumeRoleWithWebIdentity;

AwsccProviderAssumeRoleWithWebIdentity.builder()
    .roleArn(java.lang.String)
//  .duration(java.lang.String)
//  .policy(java.lang.String)
//  .policyArns(java.util.List<java.lang.String>)
//  .sessionName(java.lang.String)
//  .webIdentityToken(java.lang.String)
//  .webIdentityTokenFile(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Amazon Resource Name (ARN) of the IAM Role to assume. Can also be set with the environment variable `AWS_ROLE_ARN`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.duration">duration</a></code> | <code>java.lang.String</code> | The duration, between 15 minutes and 12 hours, of the role session. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.policy">policy</a></code> | <code>java.lang.String</code> | IAM policy in JSON format to use as a session policy. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.policyArns">policyArns</a></code> | <code>java.util.List<java.lang.String></code> | Amazon Resource Names (ARNs) of IAM Policies to use as managed session policies. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.sessionName">sessionName</a></code> | <code>java.lang.String</code> | Session name to use when assuming the role. Can also be set with the environment variable `AWS_ROLE_SESSION_NAME`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.webIdentityToken">webIdentityToken</a></code> | <code>java.lang.String</code> | The value of a web identity token from an OpenID Connect (OIDC) or OAuth provider. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile">webIdentityTokenFile</a></code> | <code>java.lang.String</code> | File containing a web identity token from an OpenID Connect (OIDC) or OAuth provider. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Amazon Resource Name (ARN) of the IAM Role to assume. Can also be set with the environment variable `AWS_ROLE_ARN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#role_arn AwsccProvider#role_arn}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

The duration, between 15 minutes and 12 hours, of the role session.

Valid time units are ns, us (or µs), ms, s, h, or m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#duration AwsccProvider#duration}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

IAM policy in JSON format to use as a session policy.

The effective permissions for the session will be the intersection between this polcy and the role's policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#policy AwsccProvider#policy}

---

##### `policyArns`<sup>Optional</sup> <a name="policyArns" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.policyArns"></a>

```java
public java.util.List<java.lang.String> getPolicyArns();
```

- *Type:* java.util.List<java.lang.String>

Amazon Resource Names (ARNs) of IAM Policies to use as managed session policies.

The effective permissions for the session will be the intersection between these polcy and the role's policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#policy_arns AwsccProvider#policy_arns}

---

##### `sessionName`<sup>Optional</sup> <a name="sessionName" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.sessionName"></a>

```java
public java.lang.String getSessionName();
```

- *Type:* java.lang.String

Session name to use when assuming the role. Can also be set with the environment variable `AWS_ROLE_SESSION_NAME`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#session_name AwsccProvider#session_name}

---

##### `webIdentityToken`<sup>Optional</sup> <a name="webIdentityToken" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.webIdentityToken"></a>

```java
public java.lang.String getWebIdentityToken();
```

- *Type:* java.lang.String

The value of a web identity token from an OpenID Connect (OIDC) or OAuth provider.

One of `web_identity_token` or `web_identity_token_file` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#web_identity_token AwsccProvider#web_identity_token}

---

##### `webIdentityTokenFile`<sup>Optional</sup> <a name="webIdentityTokenFile" id="@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile"></a>

```java
public java.lang.String getWebIdentityTokenFile();
```

- *Type:* java.lang.String

File containing a web identity token from an OpenID Connect (OIDC) or OAuth provider.

Can also be set with the  environment variable`AWS_WEB_IDENTITY_TOKEN_FILE`. One of `web_identity_token_file` or `web_identity_token` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#web_identity_token_file AwsccProvider#web_identity_token_file}

---

### AwsccProviderConfig <a name="AwsccProviderConfig" id="@cdktn/provider-awscc.provider.AwsccProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.provider.AwsccProviderConfig;

AwsccProviderConfig.builder()
//  .accessKey(java.lang.String)
//  .alias(java.lang.String)
//  .assumeRole(AwsccProviderAssumeRole)
//  .assumeRoleWithWebIdentity(AwsccProviderAssumeRoleWithWebIdentity)
//  .endpoints(AwsccProviderEndpoints)
//  .httpProxy(java.lang.String)
//  .httpsProxy(java.lang.String)
//  .insecure(java.lang.Boolean|IResolvable)
//  .maxRetries(java.lang.Number)
//  .noProxy(java.lang.String)
//  .profile(java.lang.String)
//  .region(java.lang.String)
//  .roleArn(java.lang.String)
//  .secretKey(java.lang.String)
//  .sharedConfigFiles(java.util.List<java.lang.String>)
//  .sharedCredentialsFiles(java.util.List<java.lang.String>)
//  .skipMedatadataApiCheck(java.lang.Boolean|IResolvable)
//  .skipMetadataApiCheck(java.lang.Boolean|IResolvable)
//  .token(java.lang.String)
//  .userAgent(IResolvable|java.util.List<AwsccProviderUserAgent>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | This is the AWS access key. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.assumeRole">assumeRole</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a></code> | An `assume_role` block (documented below). Only one `assume_role` block may be in the configuration. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.assumeRoleWithWebIdentity">assumeRoleWithWebIdentity</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a></code> | An `assume_role_with_web_identity` block (documented below). Only one `assume_role_with_web_identity` block may be in the configuration. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a></code> | An `endpoints` block (documented below). Only one `endpoints` block may be in the configuration. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.httpProxy">httpProxy</a></code> | <code>java.lang.String</code> | URL of a proxy to use for HTTP requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.httpsProxy">httpsProxy</a></code> | <code>java.lang.String</code> | URL of a proxy to use for HTTPS requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.insecure">insecure</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Explicitly allow the provider to perform "insecure" SSL requests. If not set, defaults to `false`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.noProxy">noProxy</a></code> | <code>java.lang.String</code> | Comma-separated list of hosts that should not use HTTP or HTTPS proxies. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.profile">profile</a></code> | <code>java.lang.String</code> | This is the AWS profile name as set in the shared credentials file. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.region">region</a></code> | <code>java.lang.String</code> | This is the AWS region. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Amazon Resource Name of the AWS CloudFormation service role that is used on your behalf to perform operations. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | This is the AWS secret key. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.sharedConfigFiles">sharedConfigFiles</a></code> | <code>java.util.List<java.lang.String></code> | List of paths to shared config files. If not set, defaults to `~/.aws/config`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.sharedCredentialsFiles">sharedCredentialsFiles</a></code> | <code>java.util.List<java.lang.String></code> | List of paths to shared credentials files. If not set, defaults to `~/.aws/credentials`. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.skipMedatadataApiCheck">skipMedatadataApiCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Skip the AWS Metadata API check. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.skipMetadataApiCheck">skipMetadataApiCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Skip the AWS Metadata API check. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.token">token</a></code> | <code>java.lang.String</code> | Session token for validating temporary credentials. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderConfig.property.userAgent">userAgent</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>></code> | Product details to append to the User-Agent string sent in all AWS API calls. |

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

This is the AWS access key.

It must be provided, but it can also be sourced from the `AWS_ACCESS_KEY_ID` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#access_key AwsccProvider#access_key}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#alias AwsccProvider#alias}

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.assumeRole"></a>

```java
public AwsccProviderAssumeRole getAssumeRole();
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRole">AwsccProviderAssumeRole</a>

An `assume_role` block (documented below). Only one `assume_role` block may be in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#assume_role AwsccProvider#assume_role}

---

##### `assumeRoleWithWebIdentity`<sup>Optional</sup> <a name="assumeRoleWithWebIdentity" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.assumeRoleWithWebIdentity"></a>

```java
public AwsccProviderAssumeRoleWithWebIdentity getAssumeRoleWithWebIdentity();
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderAssumeRoleWithWebIdentity">AwsccProviderAssumeRoleWithWebIdentity</a>

An `assume_role_with_web_identity` block (documented below). Only one `assume_role_with_web_identity` block may be in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#assume_role_with_web_identity AwsccProvider#assume_role_with_web_identity}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.endpoints"></a>

```java
public AwsccProviderEndpoints getEndpoints();
```

- *Type:* <a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints">AwsccProviderEndpoints</a>

An `endpoints` block (documented below). Only one `endpoints` block may be in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#endpoints AwsccProvider#endpoints}

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.httpProxy"></a>

```java
public java.lang.String getHttpProxy();
```

- *Type:* java.lang.String

URL of a proxy to use for HTTP requests when accessing the AWS API.

Can also be set using the `HTTP_PROXY` or `http_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#http_proxy AwsccProvider#http_proxy}

---

##### `httpsProxy`<sup>Optional</sup> <a name="httpsProxy" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.httpsProxy"></a>

```java
public java.lang.String getHttpsProxy();
```

- *Type:* java.lang.String

URL of a proxy to use for HTTPS requests when accessing the AWS API.

Can also be set using the `HTTPS_PROXY` or `https_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#https_proxy AwsccProvider#https_proxy}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.insecure"></a>

```java
public java.lang.Boolean|IResolvable getInsecure();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Explicitly allow the provider to perform "insecure" SSL requests. If not set, defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#insecure AwsccProvider#insecure}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#max_retries AwsccProvider#max_retries}

---

##### `noProxy`<sup>Optional</sup> <a name="noProxy" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.noProxy"></a>

```java
public java.lang.String getNoProxy();
```

- *Type:* java.lang.String

Comma-separated list of hosts that should not use HTTP or HTTPS proxies.

Can also be set using the `NO_PROXY` or `no_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#no_proxy AwsccProvider#no_proxy}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

This is the AWS profile name as set in the shared credentials file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#profile AwsccProvider#profile}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

This is the AWS region.

It must be provided, but it can also be sourced from the `AWS_DEFAULT_REGION` environment variables, via a shared config file, or from the EC2 Instance Metadata Service if used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#region AwsccProvider#region}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Amazon Resource Name of the AWS CloudFormation service role that is used on your behalf to perform operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#role_arn AwsccProvider#role_arn}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

This is the AWS secret key.

It must be provided, but it can also be sourced from the `AWS_SECRET_ACCESS_KEY` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#secret_key AwsccProvider#secret_key}

---

##### `sharedConfigFiles`<sup>Optional</sup> <a name="sharedConfigFiles" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.sharedConfigFiles"></a>

```java
public java.util.List<java.lang.String> getSharedConfigFiles();
```

- *Type:* java.util.List<java.lang.String>

List of paths to shared config files. If not set, defaults to `~/.aws/config`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#shared_config_files AwsccProvider#shared_config_files}

---

##### `sharedCredentialsFiles`<sup>Optional</sup> <a name="sharedCredentialsFiles" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.sharedCredentialsFiles"></a>

```java
public java.util.List<java.lang.String> getSharedCredentialsFiles();
```

- *Type:* java.util.List<java.lang.String>

List of paths to shared credentials files. If not set, defaults to `~/.aws/credentials`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#shared_credentials_files AwsccProvider#shared_credentials_files}

---

##### `skipMedatadataApiCheck`<sup>Optional</sup> <a name="skipMedatadataApiCheck" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.skipMedatadataApiCheck"></a>

```java
public java.lang.Boolean|IResolvable getSkipMedatadataApiCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Skip the AWS Metadata API check.

Useful for AWS API implementations that do not have a metadata API endpoint.  Setting to `true` prevents Terraform from authenticating via the Metadata API. You may need to use other authentication methods like static credentials, configuration variables, or environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#skip_medatadata_api_check AwsccProvider#skip_medatadata_api_check}

---

##### `skipMetadataApiCheck`<sup>Optional</sup> <a name="skipMetadataApiCheck" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.skipMetadataApiCheck"></a>

```java
public java.lang.Boolean|IResolvable getSkipMetadataApiCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Skip the AWS Metadata API check.

Useful for AWS API implementations that do not have a metadata API endpoint.  Setting to `true` prevents Terraform from authenticating via the Metadata API. You may need to use other authentication methods like static credentials, configuration variables, or environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#skip_metadata_api_check AwsccProvider#skip_metadata_api_check}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Session token for validating temporary credentials.

Typically provided after successful identity federation or Multi-Factor Authentication (MFA) login. With MFA login, this is the session token provided afterward, not the 6 digit MFA code used to get temporary credentials.  It can also be sourced from the `AWS_SESSION_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#token AwsccProvider#token}

---

##### `userAgent`<sup>Optional</sup> <a name="userAgent" id="@cdktn/provider-awscc.provider.AwsccProviderConfig.property.userAgent"></a>

```java
public IResolvable|java.util.List<AwsccProviderUserAgent> getUserAgent();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent">AwsccProviderUserAgent</a>>

Product details to append to the User-Agent string sent in all AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#user_agent AwsccProvider#user_agent}

---

### AwsccProviderEndpoints <a name="AwsccProviderEndpoints" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints.Initializer"></a>

```java
import io.cdktn.providers.awscc.provider.AwsccProviderEndpoints;

AwsccProviderEndpoints.builder()
//  .cloudcontrolapi(java.lang.String)
//  .iam(java.lang.String)
//  .sso(java.lang.String)
//  .sts(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.cloudcontrolapi">cloudcontrolapi</a></code> | <code>java.lang.String</code> | Use this to override the default Cloud Control API service endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.iam">iam</a></code> | <code>java.lang.String</code> | Use this to override the default IAM service endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.sso">sso</a></code> | <code>java.lang.String</code> | Use this to override the default SSO service endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.sts">sts</a></code> | <code>java.lang.String</code> | Use this to override the default STS service endpoint URL. |

---

##### `cloudcontrolapi`<sup>Optional</sup> <a name="cloudcontrolapi" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.cloudcontrolapi"></a>

```java
public java.lang.String getCloudcontrolapi();
```

- *Type:* java.lang.String

Use this to override the default Cloud Control API service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#cloudcontrolapi AwsccProvider#cloudcontrolapi}

---

##### `iam`<sup>Optional</sup> <a name="iam" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.iam"></a>

```java
public java.lang.String getIam();
```

- *Type:* java.lang.String

Use this to override the default IAM service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#iam AwsccProvider#iam}

---

##### `sso`<sup>Optional</sup> <a name="sso" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.sso"></a>

```java
public java.lang.String getSso();
```

- *Type:* java.lang.String

Use this to override the default SSO service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#sso AwsccProvider#sso}

---

##### `sts`<sup>Optional</sup> <a name="sts" id="@cdktn/provider-awscc.provider.AwsccProviderEndpoints.property.sts"></a>

```java
public java.lang.String getSts();
```

- *Type:* java.lang.String

Use this to override the default STS service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#sts AwsccProvider#sts}

---

### AwsccProviderUserAgent <a name="AwsccProviderUserAgent" id="@cdktn/provider-awscc.provider.AwsccProviderUserAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.provider.AwsccProviderUserAgent.Initializer"></a>

```java
import io.cdktn.providers.awscc.provider.AwsccProviderUserAgent;

AwsccProviderUserAgent.builder()
    .productName(java.lang.String)
//  .comment(java.lang.String)
//  .productVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.productName">productName</a></code> | <code>java.lang.String</code> | Product name. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.comment">comment</a></code> | <code>java.lang.String</code> | Comment describing any additional product details. |
| <code><a href="#@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.productVersion">productVersion</a></code> | <code>java.lang.String</code> | Product version. Optional, and should only be set when `product_name` is set. |

---

##### `productName`<sup>Required</sup> <a name="productName" id="@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.productName"></a>

```java
public java.lang.String getProductName();
```

- *Type:* java.lang.String

Product name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#product_name AwsccProvider#product_name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Comment describing any additional product details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#comment AwsccProvider#comment}

---

##### `productVersion`<sup>Optional</sup> <a name="productVersion" id="@cdktn/provider-awscc.provider.AwsccProviderUserAgent.property.productVersion"></a>

```java
public java.lang.String getProductVersion();
```

- *Type:* java.lang.String

Product version. Optional, and should only be set when `product_name` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs#product_version AwsccProvider#product_version}

---



