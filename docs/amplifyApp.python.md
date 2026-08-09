# `amplifyApp` Submodule <a name="`amplifyApp` Submodule" id="@cdktn/provider-awscc.amplifyApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmplifyApp <a name="AmplifyApp" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app awscc_amplify_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyApp(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  access_token: str = None,
  auto_branch_creation_config: AmplifyAppAutoBranchCreationConfig = None,
  basic_auth_config: AmplifyAppBasicAuthConfig = None,
  build_spec: str = None,
  cache_config: AmplifyAppCacheConfig = None,
  compute_role_arn: str = None,
  custom_headers: str = None,
  custom_rules: IResolvable | typing.List[AmplifyAppCustomRules] = None,
  description: str = None,
  enable_branch_auto_deletion: bool | IResolvable = None,
  environment_variables: IResolvable | typing.List[AmplifyAppEnvironmentVariables] = None,
  iam_service_role: str = None,
  job_config: AmplifyAppJobConfig = None,
  oauth_token: str = None,
  platform: str = None,
  repository: str = None,
  tags: IResolvable | typing.List[AmplifyAppTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#name AmplifyApp#name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.accessToken">access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#access_token AmplifyApp#access_token}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.autoBranchCreationConfig">auto_branch_creation_config</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#auto_branch_creation_config AmplifyApp#auto_branch_creation_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.basicAuthConfig">basic_auth_config</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#basic_auth_config AmplifyApp#basic_auth_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.buildSpec">build_spec</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.cacheConfig">cache_config</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#cache_config AmplifyApp#cache_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.computeRoleArn">compute_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#compute_role_arn AmplifyApp#compute_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.customHeaders">custom_headers</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#custom_headers AmplifyApp#custom_headers}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.customRules">custom_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#custom_rules AmplifyApp#custom_rules}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#description AmplifyApp#description}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.enableBranchAutoDeletion">enable_branch_auto_deletion</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.environmentVariables">environment_variables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.iamServiceRole">iam_service_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#iam_service_role AmplifyApp#iam_service_role}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.jobConfig">job_config</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#job_config AmplifyApp#job_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.oauthToken">oauth_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#oauth_token AmplifyApp#oauth_token}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.platform">platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#platform AmplifyApp#platform}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.repository">repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#repository AmplifyApp#repository}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#tags AmplifyApp#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#name AmplifyApp#name}.

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.accessToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#access_token AmplifyApp#access_token}.

---

##### `auto_branch_creation_config`<sup>Optional</sup> <a name="auto_branch_creation_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.autoBranchCreationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#auto_branch_creation_config AmplifyApp#auto_branch_creation_config}.

---

##### `basic_auth_config`<sup>Optional</sup> <a name="basic_auth_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.basicAuthConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#basic_auth_config AmplifyApp#basic_auth_config}.

---

##### `build_spec`<sup>Optional</sup> <a name="build_spec" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.buildSpec"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}.

---

##### `cache_config`<sup>Optional</sup> <a name="cache_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.cacheConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#cache_config AmplifyApp#cache_config}.

---

##### `compute_role_arn`<sup>Optional</sup> <a name="compute_role_arn" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.computeRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#compute_role_arn AmplifyApp#compute_role_arn}.

---

##### `custom_headers`<sup>Optional</sup> <a name="custom_headers" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.customHeaders"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#custom_headers AmplifyApp#custom_headers}.

---

##### `custom_rules`<sup>Optional</sup> <a name="custom_rules" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.customRules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#custom_rules AmplifyApp#custom_rules}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#description AmplifyApp#description}.

---

##### `enable_branch_auto_deletion`<sup>Optional</sup> <a name="enable_branch_auto_deletion" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.enableBranchAutoDeletion"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.environmentVariables"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}.

---

##### `iam_service_role`<sup>Optional</sup> <a name="iam_service_role" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.iamServiceRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#iam_service_role AmplifyApp#iam_service_role}.

---

##### `job_config`<sup>Optional</sup> <a name="job_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.jobConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#job_config AmplifyApp#job_config}.

---

##### `oauth_token`<sup>Optional</sup> <a name="oauth_token" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.oauthToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#oauth_token AmplifyApp#oauth_token}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.platform"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#platform AmplifyApp#platform}.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.repository"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#repository AmplifyApp#repository}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#tags AmplifyApp#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putAutoBranchCreationConfig">put_auto_branch_creation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putBasicAuthConfig">put_basic_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCacheConfig">put_cache_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCustomRules">put_custom_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putEnvironmentVariables">put_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putJobConfig">put_job_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetAccessToken">reset_access_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetAutoBranchCreationConfig">reset_auto_branch_creation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetBasicAuthConfig">reset_basic_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetBuildSpec">reset_build_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCacheConfig">reset_cache_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetComputeRoleArn">reset_compute_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCustomHeaders">reset_custom_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCustomRules">reset_custom_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetEnableBranchAutoDeletion">reset_enable_branch_auto_deletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetIamServiceRole">reset_iam_service_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetJobConfig">reset_job_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetOauthToken">reset_oauth_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetPlatform">reset_platform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetRepository">reset_repository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auto_branch_creation_config` <a name="put_auto_branch_creation_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putAutoBranchCreationConfig"></a>

```python
def put_auto_branch_creation_config(
  auto_branch_creation_patterns: typing.List[str] = None,
  basic_auth_config: AmplifyAppAutoBranchCreationConfigBasicAuthConfig = None,
  build_spec: str = None,
  enable_auto_branch_creation: bool | IResolvable = None,
  enable_auto_build: bool | IResolvable = None,
  enable_performance_mode: bool | IResolvable = None,
  enable_pull_request_preview: bool | IResolvable = None,
  environment_variables: IResolvable | typing.List[AmplifyAppAutoBranchCreationConfigEnvironmentVariables] = None,
  framework: str = None,
  pull_request_environment_name: str = None,
  stage: str = None
) -> None
```

###### `auto_branch_creation_patterns`<sup>Optional</sup> <a name="auto_branch_creation_patterns" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.autoBranchCreationPatterns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}.

---

###### `basic_auth_config`<sup>Optional</sup> <a name="basic_auth_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.basicAuthConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#basic_auth_config AmplifyApp#basic_auth_config}.

---

###### `build_spec`<sup>Optional</sup> <a name="build_spec" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.buildSpec"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}.

---

###### `enable_auto_branch_creation`<sup>Optional</sup> <a name="enable_auto_branch_creation" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.enableAutoBranchCreation"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}.

---

###### `enable_auto_build`<sup>Optional</sup> <a name="enable_auto_build" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.enableAutoBuild"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_auto_build AmplifyApp#enable_auto_build}.

---

###### `enable_performance_mode`<sup>Optional</sup> <a name="enable_performance_mode" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.enablePerformanceMode"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_performance_mode AmplifyApp#enable_performance_mode}.

---

###### `enable_pull_request_preview`<sup>Optional</sup> <a name="enable_pull_request_preview" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.enablePullRequestPreview"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_pull_request_preview AmplifyApp#enable_pull_request_preview}.

---

###### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.environmentVariables"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}.

---

###### `framework`<sup>Optional</sup> <a name="framework" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.framework"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#framework AmplifyApp#framework}.

---

###### `pull_request_environment_name`<sup>Optional</sup> <a name="pull_request_environment_name" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.pullRequestEnvironmentName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#pull_request_environment_name AmplifyApp#pull_request_environment_name}.

---

###### `stage`<sup>Optional</sup> <a name="stage" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.stage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#stage AmplifyApp#stage}.

---

##### `put_basic_auth_config` <a name="put_basic_auth_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putBasicAuthConfig"></a>

```python
def put_basic_auth_config(
  enable_basic_auth: bool | IResolvable = None,
  password: str = None,
  username: str = None
) -> None
```

###### `enable_basic_auth`<sup>Optional</sup> <a name="enable_basic_auth" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putBasicAuthConfig.parameter.enableBasicAuth"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}.

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putBasicAuthConfig.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#password AmplifyApp#password}.

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putBasicAuthConfig.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#username AmplifyApp#username}.

---

##### `put_cache_config` <a name="put_cache_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCacheConfig"></a>

```python
def put_cache_config(
  type: str = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCacheConfig.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#type AmplifyApp#type}.

---

##### `put_custom_rules` <a name="put_custom_rules" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCustomRules"></a>

```python
def put_custom_rules(
  value: IResolvable | typing.List[AmplifyAppCustomRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCustomRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>]

---

##### `put_environment_variables` <a name="put_environment_variables" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putEnvironmentVariables"></a>

```python
def put_environment_variables(
  value: IResolvable | typing.List[AmplifyAppEnvironmentVariables]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putEnvironmentVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>]

---

##### `put_job_config` <a name="put_job_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putJobConfig"></a>

```python
def put_job_config(
  build_compute_type: str = None
) -> None
```

###### `build_compute_type`<sup>Optional</sup> <a name="build_compute_type" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putJobConfig.parameter.buildComputeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#build_compute_type AmplifyApp#build_compute_type}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AmplifyAppTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>]

---

##### `reset_access_token` <a name="reset_access_token" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetAccessToken"></a>

```python
def reset_access_token() -> None
```

##### `reset_auto_branch_creation_config` <a name="reset_auto_branch_creation_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetAutoBranchCreationConfig"></a>

```python
def reset_auto_branch_creation_config() -> None
```

##### `reset_basic_auth_config` <a name="reset_basic_auth_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetBasicAuthConfig"></a>

```python
def reset_basic_auth_config() -> None
```

##### `reset_build_spec` <a name="reset_build_spec" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetBuildSpec"></a>

```python
def reset_build_spec() -> None
```

##### `reset_cache_config` <a name="reset_cache_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCacheConfig"></a>

```python
def reset_cache_config() -> None
```

##### `reset_compute_role_arn` <a name="reset_compute_role_arn" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetComputeRoleArn"></a>

```python
def reset_compute_role_arn() -> None
```

##### `reset_custom_headers` <a name="reset_custom_headers" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCustomHeaders"></a>

```python
def reset_custom_headers() -> None
```

##### `reset_custom_rules` <a name="reset_custom_rules" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCustomRules"></a>

```python
def reset_custom_rules() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_branch_auto_deletion` <a name="reset_enable_branch_auto_deletion" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetEnableBranchAutoDeletion"></a>

```python
def reset_enable_branch_auto_deletion() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_iam_service_role` <a name="reset_iam_service_role" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetIamServiceRole"></a>

```python
def reset_iam_service_role() -> None
```

##### `reset_job_config` <a name="reset_job_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetJobConfig"></a>

```python
def reset_job_config() -> None
```

##### `reset_oauth_token` <a name="reset_oauth_token" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetOauthToken"></a>

```python
def reset_oauth_token() -> None
```

##### `reset_platform` <a name="reset_platform" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetPlatform"></a>

```python
def reset_platform() -> None
```

##### `reset_repository` <a name="reset_repository" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetRepository"></a>

```python
def reset_repository() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AmplifyApp resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isConstruct"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyApp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformElement"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformResource"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyApp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AmplifyApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AmplifyApp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AmplifyApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AmplifyApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.appName">app_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.autoBranchCreationConfig">auto_branch_creation_config</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference">AmplifyAppAutoBranchCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.basicAuthConfig">basic_auth_config</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference">AmplifyAppBasicAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cacheConfig">cache_config</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference">AmplifyAppCacheConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customRules">custom_rules</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList">AmplifyAppCustomRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.defaultDomain">default_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.environmentVariables">environment_variables</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList">AmplifyAppEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.jobConfig">job_config</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference">AmplifyAppJobConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList">AmplifyAppTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.autoBranchCreationConfigInput">auto_branch_creation_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.basicAuthConfigInput">basic_auth_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.buildSpecInput">build_spec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cacheConfigInput">cache_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.computeRoleArnInput">compute_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customHeadersInput">custom_headers_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customRulesInput">custom_rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.enableBranchAutoDeletionInput">enable_branch_auto_deletion_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.environmentVariablesInput">environment_variables_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.iamServiceRoleInput">iam_service_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.jobConfigInput">job_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.oauthTokenInput">oauth_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.platformInput">platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.buildSpec">build_spec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.computeRoleArn">compute_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customHeaders">custom_headers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.enableBranchAutoDeletion">enable_branch_auto_deletion</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.iamServiceRole">iam_service_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.oauthToken">oauth_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.repository">repository</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `app_name`<sup>Required</sup> <a name="app_name" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.appName"></a>

```python
app_name: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auto_branch_creation_config`<sup>Required</sup> <a name="auto_branch_creation_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.autoBranchCreationConfig"></a>

```python
auto_branch_creation_config: AmplifyAppAutoBranchCreationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference">AmplifyAppAutoBranchCreationConfigOutputReference</a>

---

##### `basic_auth_config`<sup>Required</sup> <a name="basic_auth_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.basicAuthConfig"></a>

```python
basic_auth_config: AmplifyAppBasicAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference">AmplifyAppBasicAuthConfigOutputReference</a>

---

##### `cache_config`<sup>Required</sup> <a name="cache_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cacheConfig"></a>

```python
cache_config: AmplifyAppCacheConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference">AmplifyAppCacheConfigOutputReference</a>

---

##### `custom_rules`<sup>Required</sup> <a name="custom_rules" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customRules"></a>

```python
custom_rules: AmplifyAppCustomRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList">AmplifyAppCustomRulesList</a>

---

##### `default_domain`<sup>Required</sup> <a name="default_domain" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.defaultDomain"></a>

```python
default_domain: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.environmentVariables"></a>

```python
environment_variables: AmplifyAppEnvironmentVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList">AmplifyAppEnvironmentVariablesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_config`<sup>Required</sup> <a name="job_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.jobConfig"></a>

```python
job_config: AmplifyAppJobConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference">AmplifyAppJobConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tags"></a>

```python
tags: AmplifyAppTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList">AmplifyAppTagsList</a>

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `auto_branch_creation_config_input`<sup>Optional</sup> <a name="auto_branch_creation_config_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.autoBranchCreationConfigInput"></a>

```python
auto_branch_creation_config_input: IResolvable | AmplifyAppAutoBranchCreationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

---

##### `basic_auth_config_input`<sup>Optional</sup> <a name="basic_auth_config_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.basicAuthConfigInput"></a>

```python
basic_auth_config_input: IResolvable | AmplifyAppBasicAuthConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a>

---

##### `build_spec_input`<sup>Optional</sup> <a name="build_spec_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.buildSpecInput"></a>

```python
build_spec_input: str
```

- *Type:* str

---

##### `cache_config_input`<sup>Optional</sup> <a name="cache_config_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cacheConfigInput"></a>

```python
cache_config_input: IResolvable | AmplifyAppCacheConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a>

---

##### `compute_role_arn_input`<sup>Optional</sup> <a name="compute_role_arn_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.computeRoleArnInput"></a>

```python
compute_role_arn_input: str
```

- *Type:* str

---

##### `custom_headers_input`<sup>Optional</sup> <a name="custom_headers_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customHeadersInput"></a>

```python
custom_headers_input: str
```

- *Type:* str

---

##### `custom_rules_input`<sup>Optional</sup> <a name="custom_rules_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customRulesInput"></a>

```python
custom_rules_input: IResolvable | typing.List[AmplifyAppCustomRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enable_branch_auto_deletion_input`<sup>Optional</sup> <a name="enable_branch_auto_deletion_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.enableBranchAutoDeletionInput"></a>

```python
enable_branch_auto_deletion_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.environmentVariablesInput"></a>

```python
environment_variables_input: IResolvable | typing.List[AmplifyAppEnvironmentVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>]

---

##### `iam_service_role_input`<sup>Optional</sup> <a name="iam_service_role_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.iamServiceRoleInput"></a>

```python
iam_service_role_input: str
```

- *Type:* str

---

##### `job_config_input`<sup>Optional</sup> <a name="job_config_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.jobConfigInput"></a>

```python
job_config_input: IResolvable | AmplifyAppJobConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `oauth_token_input`<sup>Optional</sup> <a name="oauth_token_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.oauthTokenInput"></a>

```python
oauth_token_input: str
```

- *Type:* str

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.platformInput"></a>

```python
platform_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AmplifyAppTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>]

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `build_spec`<sup>Required</sup> <a name="build_spec" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.buildSpec"></a>

```python
build_spec: str
```

- *Type:* str

---

##### `compute_role_arn`<sup>Required</sup> <a name="compute_role_arn" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.computeRoleArn"></a>

```python
compute_role_arn: str
```

- *Type:* str

---

##### `custom_headers`<sup>Required</sup> <a name="custom_headers" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customHeaders"></a>

```python
custom_headers: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_branch_auto_deletion`<sup>Required</sup> <a name="enable_branch_auto_deletion" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.enableBranchAutoDeletion"></a>

```python
enable_branch_auto_deletion: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iam_service_role`<sup>Required</sup> <a name="iam_service_role" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.iamServiceRole"></a>

```python
iam_service_role: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oauth_token`<sup>Required</sup> <a name="oauth_token" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.oauthToken"></a>

```python
oauth_token: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AmplifyAppAutoBranchCreationConfig <a name="AmplifyAppAutoBranchCreationConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppAutoBranchCreationConfig(
  auto_branch_creation_patterns: typing.List[str] = None,
  basic_auth_config: AmplifyAppAutoBranchCreationConfigBasicAuthConfig = None,
  build_spec: str = None,
  enable_auto_branch_creation: bool | IResolvable = None,
  enable_auto_build: bool | IResolvable = None,
  enable_performance_mode: bool | IResolvable = None,
  enable_pull_request_preview: bool | IResolvable = None,
  environment_variables: IResolvable | typing.List[AmplifyAppAutoBranchCreationConfigEnvironmentVariables] = None,
  framework: str = None,
  pull_request_environment_name: str = None,
  stage: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.autoBranchCreationPatterns">auto_branch_creation_patterns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.basicAuthConfig">basic_auth_config</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#basic_auth_config AmplifyApp#basic_auth_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.buildSpec">build_spec</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableAutoBranchCreation">enable_auto_branch_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableAutoBuild">enable_auto_build</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_auto_build AmplifyApp#enable_auto_build}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePerformanceMode">enable_performance_mode</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_performance_mode AmplifyApp#enable_performance_mode}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePullRequestPreview">enable_pull_request_preview</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_pull_request_preview AmplifyApp#enable_pull_request_preview}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.environmentVariables">environment_variables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.framework">framework</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#framework AmplifyApp#framework}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.pullRequestEnvironmentName">pull_request_environment_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#pull_request_environment_name AmplifyApp#pull_request_environment_name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.stage">stage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#stage AmplifyApp#stage}. |

---

##### `auto_branch_creation_patterns`<sup>Optional</sup> <a name="auto_branch_creation_patterns" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.autoBranchCreationPatterns"></a>

```python
auto_branch_creation_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}.

---

##### `basic_auth_config`<sup>Optional</sup> <a name="basic_auth_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.basicAuthConfig"></a>

```python
basic_auth_config: AmplifyAppAutoBranchCreationConfigBasicAuthConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#basic_auth_config AmplifyApp#basic_auth_config}.

---

##### `build_spec`<sup>Optional</sup> <a name="build_spec" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.buildSpec"></a>

```python
build_spec: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}.

---

##### `enable_auto_branch_creation`<sup>Optional</sup> <a name="enable_auto_branch_creation" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableAutoBranchCreation"></a>

```python
enable_auto_branch_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}.

---

##### `enable_auto_build`<sup>Optional</sup> <a name="enable_auto_build" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableAutoBuild"></a>

```python
enable_auto_build: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_auto_build AmplifyApp#enable_auto_build}.

---

##### `enable_performance_mode`<sup>Optional</sup> <a name="enable_performance_mode" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePerformanceMode"></a>

```python
enable_performance_mode: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_performance_mode AmplifyApp#enable_performance_mode}.

---

##### `enable_pull_request_preview`<sup>Optional</sup> <a name="enable_pull_request_preview" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePullRequestPreview"></a>

```python
enable_pull_request_preview: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_pull_request_preview AmplifyApp#enable_pull_request_preview}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.environmentVariables"></a>

```python
environment_variables: IResolvable | typing.List[AmplifyAppAutoBranchCreationConfigEnvironmentVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}.

---

##### `framework`<sup>Optional</sup> <a name="framework" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.framework"></a>

```python
framework: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#framework AmplifyApp#framework}.

---

##### `pull_request_environment_name`<sup>Optional</sup> <a name="pull_request_environment_name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.pullRequestEnvironmentName"></a>

```python
pull_request_environment_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#pull_request_environment_name AmplifyApp#pull_request_environment_name}.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.stage"></a>

```python
stage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#stage AmplifyApp#stage}.

---

### AmplifyAppAutoBranchCreationConfigBasicAuthConfig <a name="AmplifyAppAutoBranchCreationConfigBasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig(
  enable_basic_auth: bool | IResolvable = None,
  password: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.enableBasicAuth">enable_basic_auth</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#password AmplifyApp#password}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#username AmplifyApp#username}. |

---

##### `enable_basic_auth`<sup>Optional</sup> <a name="enable_basic_auth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.enableBasicAuth"></a>

```python
enable_basic_auth: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#password AmplifyApp#password}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#username AmplifyApp#username}.

---

### AmplifyAppAutoBranchCreationConfigEnvironmentVariables <a name="AmplifyAppAutoBranchCreationConfigEnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#name AmplifyApp#name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#value AmplifyApp#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#name AmplifyApp#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#value AmplifyApp#value}.

---

### AmplifyAppBasicAuthConfig <a name="AmplifyAppBasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppBasicAuthConfig(
  enable_basic_auth: bool | IResolvable = None,
  password: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.enableBasicAuth">enable_basic_auth</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#password AmplifyApp#password}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#username AmplifyApp#username}. |

---

##### `enable_basic_auth`<sup>Optional</sup> <a name="enable_basic_auth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.enableBasicAuth"></a>

```python
enable_basic_auth: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#password AmplifyApp#password}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#username AmplifyApp#username}.

---

### AmplifyAppCacheConfig <a name="AmplifyAppCacheConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppCacheConfig(
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#type AmplifyApp#type}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#type AmplifyApp#type}.

---

### AmplifyAppConfig <a name="AmplifyAppConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  access_token: str = None,
  auto_branch_creation_config: AmplifyAppAutoBranchCreationConfig = None,
  basic_auth_config: AmplifyAppBasicAuthConfig = None,
  build_spec: str = None,
  cache_config: AmplifyAppCacheConfig = None,
  compute_role_arn: str = None,
  custom_headers: str = None,
  custom_rules: IResolvable | typing.List[AmplifyAppCustomRules] = None,
  description: str = None,
  enable_branch_auto_deletion: bool | IResolvable = None,
  environment_variables: IResolvable | typing.List[AmplifyAppEnvironmentVariables] = None,
  iam_service_role: str = None,
  job_config: AmplifyAppJobConfig = None,
  oauth_token: str = None,
  platform: str = None,
  repository: str = None,
  tags: IResolvable | typing.List[AmplifyAppTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#name AmplifyApp#name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.accessToken">access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#access_token AmplifyApp#access_token}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.autoBranchCreationConfig">auto_branch_creation_config</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#auto_branch_creation_config AmplifyApp#auto_branch_creation_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.basicAuthConfig">basic_auth_config</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#basic_auth_config AmplifyApp#basic_auth_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.buildSpec">build_spec</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.cacheConfig">cache_config</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#cache_config AmplifyApp#cache_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.computeRoleArn">compute_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#compute_role_arn AmplifyApp#compute_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.customHeaders">custom_headers</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#custom_headers AmplifyApp#custom_headers}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.customRules">custom_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#custom_rules AmplifyApp#custom_rules}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#description AmplifyApp#description}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.enableBranchAutoDeletion">enable_branch_auto_deletion</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.environmentVariables">environment_variables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.iamServiceRole">iam_service_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#iam_service_role AmplifyApp#iam_service_role}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.jobConfig">job_config</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#job_config AmplifyApp#job_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.oauthToken">oauth_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#oauth_token AmplifyApp#oauth_token}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.platform">platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#platform AmplifyApp#platform}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.repository">repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#repository AmplifyApp#repository}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#tags AmplifyApp#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#name AmplifyApp#name}.

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#access_token AmplifyApp#access_token}.

---

##### `auto_branch_creation_config`<sup>Optional</sup> <a name="auto_branch_creation_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.autoBranchCreationConfig"></a>

```python
auto_branch_creation_config: AmplifyAppAutoBranchCreationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#auto_branch_creation_config AmplifyApp#auto_branch_creation_config}.

---

##### `basic_auth_config`<sup>Optional</sup> <a name="basic_auth_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.basicAuthConfig"></a>

```python
basic_auth_config: AmplifyAppBasicAuthConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#basic_auth_config AmplifyApp#basic_auth_config}.

---

##### `build_spec`<sup>Optional</sup> <a name="build_spec" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.buildSpec"></a>

```python
build_spec: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}.

---

##### `cache_config`<sup>Optional</sup> <a name="cache_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.cacheConfig"></a>

```python
cache_config: AmplifyAppCacheConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#cache_config AmplifyApp#cache_config}.

---

##### `compute_role_arn`<sup>Optional</sup> <a name="compute_role_arn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.computeRoleArn"></a>

```python
compute_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#compute_role_arn AmplifyApp#compute_role_arn}.

---

##### `custom_headers`<sup>Optional</sup> <a name="custom_headers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.customHeaders"></a>

```python
custom_headers: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#custom_headers AmplifyApp#custom_headers}.

---

##### `custom_rules`<sup>Optional</sup> <a name="custom_rules" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.customRules"></a>

```python
custom_rules: IResolvable | typing.List[AmplifyAppCustomRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#custom_rules AmplifyApp#custom_rules}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#description AmplifyApp#description}.

---

##### `enable_branch_auto_deletion`<sup>Optional</sup> <a name="enable_branch_auto_deletion" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.enableBranchAutoDeletion"></a>

```python
enable_branch_auto_deletion: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.environmentVariables"></a>

```python
environment_variables: IResolvable | typing.List[AmplifyAppEnvironmentVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}.

---

##### `iam_service_role`<sup>Optional</sup> <a name="iam_service_role" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.iamServiceRole"></a>

```python
iam_service_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#iam_service_role AmplifyApp#iam_service_role}.

---

##### `job_config`<sup>Optional</sup> <a name="job_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.jobConfig"></a>

```python
job_config: AmplifyAppJobConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#job_config AmplifyApp#job_config}.

---

##### `oauth_token`<sup>Optional</sup> <a name="oauth_token" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.oauthToken"></a>

```python
oauth_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#oauth_token AmplifyApp#oauth_token}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.platform"></a>

```python
platform: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#platform AmplifyApp#platform}.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#repository AmplifyApp#repository}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AmplifyAppTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#tags AmplifyApp#tags}.

---

### AmplifyAppCustomRules <a name="AmplifyAppCustomRules" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppCustomRules(
  condition: str = None,
  source: str = None,
  status: str = None,
  target: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#condition AmplifyApp#condition}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#source AmplifyApp#source}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#status AmplifyApp#status}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#target AmplifyApp#target}. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.condition"></a>

```python
condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#condition AmplifyApp#condition}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#source AmplifyApp#source}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#status AmplifyApp#status}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#target AmplifyApp#target}.

---

### AmplifyAppEnvironmentVariables <a name="AmplifyAppEnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppEnvironmentVariables(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#name AmplifyApp#name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#value AmplifyApp#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#name AmplifyApp#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#value AmplifyApp#value}.

---

### AmplifyAppJobConfig <a name="AmplifyAppJobConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppJobConfig(
  build_compute_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig.property.buildComputeType">build_compute_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#build_compute_type AmplifyApp#build_compute_type}. |

---

##### `build_compute_type`<sup>Optional</sup> <a name="build_compute_type" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig.property.buildComputeType"></a>

```python
build_compute_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#build_compute_type AmplifyApp#build_compute_type}.

---

### AmplifyAppTags <a name="AmplifyAppTags" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTags.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#key AmplifyApp#key}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#value AmplifyApp#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#key AmplifyApp#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#value AmplifyApp#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference <a name="AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetEnableBasicAuth">reset_enable_basic_auth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_basic_auth` <a name="reset_enable_basic_auth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetEnableBasicAuth"></a>

```python
def reset_enable_basic_auth() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.enableBasicAuthInput">enable_basic_auth_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.enableBasicAuth">enable_basic_auth</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_basic_auth_input`<sup>Optional</sup> <a name="enable_basic_auth_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.enableBasicAuthInput"></a>

```python
enable_basic_auth_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `enable_basic_auth`<sup>Required</sup> <a name="enable_basic_auth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.enableBasicAuth"></a>

```python
enable_basic_auth: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AmplifyAppAutoBranchCreationConfigBasicAuthConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a>

---


### AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList <a name="AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AmplifyAppAutoBranchCreationConfigEnvironmentVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>]

---


### AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference <a name="AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AmplifyAppAutoBranchCreationConfigEnvironmentVariables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>

---


### AmplifyAppAutoBranchCreationConfigOutputReference <a name="AmplifyAppAutoBranchCreationConfigOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putBasicAuthConfig">put_basic_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putEnvironmentVariables">put_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetAutoBranchCreationPatterns">reset_auto_branch_creation_patterns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBasicAuthConfig">reset_basic_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBuildSpec">reset_build_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableAutoBranchCreation">reset_enable_auto_branch_creation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableAutoBuild">reset_enable_auto_build</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePerformanceMode">reset_enable_performance_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePullRequestPreview">reset_enable_pull_request_preview</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetFramework">reset_framework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetPullRequestEnvironmentName">reset_pull_request_environment_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetStage">reset_stage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_basic_auth_config` <a name="put_basic_auth_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putBasicAuthConfig"></a>

```python
def put_basic_auth_config(
  enable_basic_auth: bool | IResolvable = None,
  password: str = None,
  username: str = None
) -> None
```

###### `enable_basic_auth`<sup>Optional</sup> <a name="enable_basic_auth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putBasicAuthConfig.parameter.enableBasicAuth"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}.

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putBasicAuthConfig.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#password AmplifyApp#password}.

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putBasicAuthConfig.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_app#username AmplifyApp#username}.

---

##### `put_environment_variables` <a name="put_environment_variables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putEnvironmentVariables"></a>

```python
def put_environment_variables(
  value: IResolvable | typing.List[AmplifyAppAutoBranchCreationConfigEnvironmentVariables]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putEnvironmentVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>]

---

##### `reset_auto_branch_creation_patterns` <a name="reset_auto_branch_creation_patterns" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetAutoBranchCreationPatterns"></a>

```python
def reset_auto_branch_creation_patterns() -> None
```

##### `reset_basic_auth_config` <a name="reset_basic_auth_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBasicAuthConfig"></a>

```python
def reset_basic_auth_config() -> None
```

##### `reset_build_spec` <a name="reset_build_spec" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBuildSpec"></a>

```python
def reset_build_spec() -> None
```

##### `reset_enable_auto_branch_creation` <a name="reset_enable_auto_branch_creation" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableAutoBranchCreation"></a>

```python
def reset_enable_auto_branch_creation() -> None
```

##### `reset_enable_auto_build` <a name="reset_enable_auto_build" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableAutoBuild"></a>

```python
def reset_enable_auto_build() -> None
```

##### `reset_enable_performance_mode` <a name="reset_enable_performance_mode" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePerformanceMode"></a>

```python
def reset_enable_performance_mode() -> None
```

##### `reset_enable_pull_request_preview` <a name="reset_enable_pull_request_preview" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePullRequestPreview"></a>

```python
def reset_enable_pull_request_preview() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_framework` <a name="reset_framework" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetFramework"></a>

```python
def reset_framework() -> None
```

##### `reset_pull_request_environment_name` <a name="reset_pull_request_environment_name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetPullRequestEnvironmentName"></a>

```python
def reset_pull_request_environment_name() -> None
```

##### `reset_stage` <a name="reset_stage" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetStage"></a>

```python
def reset_stage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthConfig">basic_auth_config</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference">AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariables">environment_variables</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList">AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.autoBranchCreationPatternsInput">auto_branch_creation_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthConfigInput">basic_auth_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpecInput">build_spec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBranchCreationInput">enable_auto_branch_creation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuildInput">enable_auto_build_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceModeInput">enable_performance_mode_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreviewInput">enable_pull_request_preview_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariablesInput">environment_variables_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.frameworkInput">framework_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentNameInput">pull_request_environment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stageInput">stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.autoBranchCreationPatterns">auto_branch_creation_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpec">build_spec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBranchCreation">enable_auto_branch_creation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuild">enable_auto_build</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceMode">enable_performance_mode</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreview">enable_pull_request_preview</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.framework">framework</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentName">pull_request_environment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic_auth_config`<sup>Required</sup> <a name="basic_auth_config" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthConfig"></a>

```python
basic_auth_config: AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference">AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference</a>

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariables"></a>

```python
environment_variables: AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList">AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList</a>

---

##### `auto_branch_creation_patterns_input`<sup>Optional</sup> <a name="auto_branch_creation_patterns_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.autoBranchCreationPatternsInput"></a>

```python
auto_branch_creation_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `basic_auth_config_input`<sup>Optional</sup> <a name="basic_auth_config_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthConfigInput"></a>

```python
basic_auth_config_input: IResolvable | AmplifyAppAutoBranchCreationConfigBasicAuthConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a>

---

##### `build_spec_input`<sup>Optional</sup> <a name="build_spec_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpecInput"></a>

```python
build_spec_input: str
```

- *Type:* str

---

##### `enable_auto_branch_creation_input`<sup>Optional</sup> <a name="enable_auto_branch_creation_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBranchCreationInput"></a>

```python
enable_auto_branch_creation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_auto_build_input`<sup>Optional</sup> <a name="enable_auto_build_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuildInput"></a>

```python
enable_auto_build_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_performance_mode_input`<sup>Optional</sup> <a name="enable_performance_mode_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceModeInput"></a>

```python
enable_performance_mode_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_pull_request_preview_input`<sup>Optional</sup> <a name="enable_pull_request_preview_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreviewInput"></a>

```python
enable_pull_request_preview_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariablesInput"></a>

```python
environment_variables_input: IResolvable | typing.List[AmplifyAppAutoBranchCreationConfigEnvironmentVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>]

---

##### `framework_input`<sup>Optional</sup> <a name="framework_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.frameworkInput"></a>

```python
framework_input: str
```

- *Type:* str

---

##### `pull_request_environment_name_input`<sup>Optional</sup> <a name="pull_request_environment_name_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentNameInput"></a>

```python
pull_request_environment_name_input: str
```

- *Type:* str

---

##### `stage_input`<sup>Optional</sup> <a name="stage_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stageInput"></a>

```python
stage_input: str
```

- *Type:* str

---

##### `auto_branch_creation_patterns`<sup>Required</sup> <a name="auto_branch_creation_patterns" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.autoBranchCreationPatterns"></a>

```python
auto_branch_creation_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `build_spec`<sup>Required</sup> <a name="build_spec" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpec"></a>

```python
build_spec: str
```

- *Type:* str

---

##### `enable_auto_branch_creation`<sup>Required</sup> <a name="enable_auto_branch_creation" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBranchCreation"></a>

```python
enable_auto_branch_creation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_auto_build`<sup>Required</sup> <a name="enable_auto_build" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuild"></a>

```python
enable_auto_build: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_performance_mode`<sup>Required</sup> <a name="enable_performance_mode" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceMode"></a>

```python
enable_performance_mode: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_pull_request_preview`<sup>Required</sup> <a name="enable_pull_request_preview" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreview"></a>

```python
enable_pull_request_preview: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.framework"></a>

```python
framework: str
```

- *Type:* str

---

##### `pull_request_environment_name`<sup>Required</sup> <a name="pull_request_environment_name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentName"></a>

```python
pull_request_environment_name: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AmplifyAppAutoBranchCreationConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

---


### AmplifyAppBasicAuthConfigOutputReference <a name="AmplifyAppBasicAuthConfigOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppBasicAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetEnableBasicAuth">reset_enable_basic_auth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_basic_auth` <a name="reset_enable_basic_auth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetEnableBasicAuth"></a>

```python
def reset_enable_basic_auth() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.enableBasicAuthInput">enable_basic_auth_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.enableBasicAuth">enable_basic_auth</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_basic_auth_input`<sup>Optional</sup> <a name="enable_basic_auth_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.enableBasicAuthInput"></a>

```python
enable_basic_auth_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `enable_basic_auth`<sup>Required</sup> <a name="enable_basic_auth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.enableBasicAuth"></a>

```python
enable_basic_auth: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AmplifyAppBasicAuthConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a>

---


### AmplifyAppCacheConfigOutputReference <a name="AmplifyAppCacheConfigOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppCacheConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AmplifyAppCacheConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a>

---


### AmplifyAppCustomRulesList <a name="AmplifyAppCustomRulesList" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppCustomRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AmplifyAppCustomRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AmplifyAppCustomRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>]

---


### AmplifyAppCustomRulesOutputReference <a name="AmplifyAppCustomRulesOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppCustomRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AmplifyAppCustomRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>

---


### AmplifyAppEnvironmentVariablesList <a name="AmplifyAppEnvironmentVariablesList" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppEnvironmentVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AmplifyAppEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AmplifyAppEnvironmentVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>]

---


### AmplifyAppEnvironmentVariablesOutputReference <a name="AmplifyAppEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppEnvironmentVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AmplifyAppEnvironmentVariables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>

---


### AmplifyAppJobConfigOutputReference <a name="AmplifyAppJobConfigOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppJobConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.resetBuildComputeType">reset_build_compute_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_build_compute_type` <a name="reset_build_compute_type" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.resetBuildComputeType"></a>

```python
def reset_build_compute_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.buildComputeTypeInput">build_compute_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.buildComputeType">build_compute_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `build_compute_type_input`<sup>Optional</sup> <a name="build_compute_type_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.buildComputeTypeInput"></a>

```python
build_compute_type_input: str
```

- *Type:* str

---

##### `build_compute_type`<sup>Required</sup> <a name="build_compute_type" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.buildComputeType"></a>

```python
build_compute_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AmplifyAppJobConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a>

---


### AmplifyAppTagsList <a name="AmplifyAppTagsList" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AmplifyAppTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AmplifyAppTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>]

---


### AmplifyAppTagsOutputReference <a name="AmplifyAppTagsOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_app

amplifyApp.AmplifyAppTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AmplifyAppTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>

---



