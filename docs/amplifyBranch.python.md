# `amplifyBranch` Submodule <a name="`amplifyBranch` Submodule" id="@cdktn/provider-awscc.amplifyBranch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmplifyBranch <a name="AmplifyBranch" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch awscc_amplify_branch}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_branch

amplifyBranch.AmplifyBranch(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_id: str,
  branch_name: str,
  backend: AmplifyBranchBackend = None,
  basic_auth_config: AmplifyBranchBasicAuthConfig = None,
  build_spec: str = None,
  compute_role_arn: str = None,
  description: str = None,
  enable_auto_build: bool | IResolvable = None,
  enable_performance_mode: bool | IResolvable = None,
  enable_pull_request_preview: bool | IResolvable = None,
  enable_skew_protection: bool | IResolvable = None,
  environment_variables: IResolvable | typing.List[AmplifyBranchEnvironmentVariables] = None,
  framework: str = None,
  pull_request_environment_name: str = None,
  stage: str = None,
  tags: IResolvable | typing.List[AmplifyBranchTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#app_id AmplifyBranch#app_id}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.branchName">branch_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#branch_name AmplifyBranch#branch_name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.backend">backend</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#backend AmplifyBranch#backend}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.basicAuthConfig">basic_auth_config</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#basic_auth_config AmplifyBranch#basic_auth_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.buildSpec">build_spec</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#build_spec AmplifyBranch#build_spec}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.computeRoleArn">compute_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#compute_role_arn AmplifyBranch#compute_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#description AmplifyBranch#description}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.enableAutoBuild">enable_auto_build</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.enablePerformanceMode">enable_performance_mode</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.enablePullRequestPreview">enable_pull_request_preview</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.enableSkewProtection">enable_skew_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#enable_skew_protection AmplifyBranch#enable_skew_protection}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.environmentVariables">environment_variables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#environment_variables AmplifyBranch#environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.framework">framework</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#framework AmplifyBranch#framework}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.pullRequestEnvironmentName">pull_request_environment_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.stage">stage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#stage AmplifyBranch#stage}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#tags AmplifyBranch#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.appId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#app_id AmplifyBranch#app_id}.

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.branchName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#branch_name AmplifyBranch#branch_name}.

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.backend"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#backend AmplifyBranch#backend}.

---

##### `basic_auth_config`<sup>Optional</sup> <a name="basic_auth_config" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.basicAuthConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#basic_auth_config AmplifyBranch#basic_auth_config}.

---

##### `build_spec`<sup>Optional</sup> <a name="build_spec" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.buildSpec"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#build_spec AmplifyBranch#build_spec}.

---

##### `compute_role_arn`<sup>Optional</sup> <a name="compute_role_arn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.computeRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#compute_role_arn AmplifyBranch#compute_role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#description AmplifyBranch#description}.

---

##### `enable_auto_build`<sup>Optional</sup> <a name="enable_auto_build" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.enableAutoBuild"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}.

---

##### `enable_performance_mode`<sup>Optional</sup> <a name="enable_performance_mode" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.enablePerformanceMode"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}.

---

##### `enable_pull_request_preview`<sup>Optional</sup> <a name="enable_pull_request_preview" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.enablePullRequestPreview"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}.

---

##### `enable_skew_protection`<sup>Optional</sup> <a name="enable_skew_protection" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.enableSkewProtection"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#enable_skew_protection AmplifyBranch#enable_skew_protection}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.environmentVariables"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#environment_variables AmplifyBranch#environment_variables}.

---

##### `framework`<sup>Optional</sup> <a name="framework" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.framework"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#framework AmplifyBranch#framework}.

---

##### `pull_request_environment_name`<sup>Optional</sup> <a name="pull_request_environment_name" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.pullRequestEnvironmentName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.stage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#stage AmplifyBranch#stage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#tags AmplifyBranch#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putBackend">put_backend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putBasicAuthConfig">put_basic_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putEnvironmentVariables">put_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetBasicAuthConfig">reset_basic_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetBuildSpec">reset_build_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetComputeRoleArn">reset_compute_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnableAutoBuild">reset_enable_auto_build</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnablePerformanceMode">reset_enable_performance_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnablePullRequestPreview">reset_enable_pull_request_preview</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnableSkewProtection">reset_enable_skew_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetFramework">reset_framework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetPullRequestEnvironmentName">reset_pull_request_environment_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetStage">reset_stage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backend` <a name="put_backend" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putBackend"></a>

```python
def put_backend(
  stack_arn: str = None
) -> None
```

###### `stack_arn`<sup>Optional</sup> <a name="stack_arn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putBackend.parameter.stackArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#stack_arn AmplifyBranch#stack_arn}.

---

##### `put_basic_auth_config` <a name="put_basic_auth_config" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putBasicAuthConfig"></a>

```python
def put_basic_auth_config(
  enable_basic_auth: bool | IResolvable = None,
  password: str = None,
  username: str = None
) -> None
```

###### `enable_basic_auth`<sup>Optional</sup> <a name="enable_basic_auth" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putBasicAuthConfig.parameter.enableBasicAuth"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#enable_basic_auth AmplifyBranch#enable_basic_auth}.

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putBasicAuthConfig.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#password AmplifyBranch#password}.

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putBasicAuthConfig.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#username AmplifyBranch#username}.

---

##### `put_environment_variables` <a name="put_environment_variables" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putEnvironmentVariables"></a>

```python
def put_environment_variables(
  value: IResolvable | typing.List[AmplifyBranchEnvironmentVariables]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putEnvironmentVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AmplifyBranchTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>]

---

##### `reset_backend` <a name="reset_backend" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_basic_auth_config` <a name="reset_basic_auth_config" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetBasicAuthConfig"></a>

```python
def reset_basic_auth_config() -> None
```

##### `reset_build_spec` <a name="reset_build_spec" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetBuildSpec"></a>

```python
def reset_build_spec() -> None
```

##### `reset_compute_role_arn` <a name="reset_compute_role_arn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetComputeRoleArn"></a>

```python
def reset_compute_role_arn() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_auto_build` <a name="reset_enable_auto_build" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnableAutoBuild"></a>

```python
def reset_enable_auto_build() -> None
```

##### `reset_enable_performance_mode` <a name="reset_enable_performance_mode" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnablePerformanceMode"></a>

```python
def reset_enable_performance_mode() -> None
```

##### `reset_enable_pull_request_preview` <a name="reset_enable_pull_request_preview" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnablePullRequestPreview"></a>

```python
def reset_enable_pull_request_preview() -> None
```

##### `reset_enable_skew_protection` <a name="reset_enable_skew_protection" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnableSkewProtection"></a>

```python
def reset_enable_skew_protection() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_framework` <a name="reset_framework" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetFramework"></a>

```python
def reset_framework() -> None
```

##### `reset_pull_request_environment_name` <a name="reset_pull_request_environment_name" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetPullRequestEnvironmentName"></a>

```python
def reset_pull_request_environment_name() -> None
```

##### `reset_stage` <a name="reset_stage" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetStage"></a>

```python
def reset_stage() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AmplifyBranch resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isConstruct"></a>

```python
from cdktn_provider_awscc import amplify_branch

amplifyBranch.AmplifyBranch.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isTerraformElement"></a>

```python
from cdktn_provider_awscc import amplify_branch

amplifyBranch.AmplifyBranch.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isTerraformResource"></a>

```python
from cdktn_provider_awscc import amplify_branch

amplifyBranch.AmplifyBranch.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import amplify_branch

amplifyBranch.AmplifyBranch.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AmplifyBranch resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AmplifyBranch to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AmplifyBranch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AmplifyBranch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.backend">backend</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference">AmplifyBranchBackendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.basicAuthConfig">basic_auth_config</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference">AmplifyBranchBasicAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.environmentVariables">environment_variables</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList">AmplifyBranchEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList">AmplifyBranchTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.backendInput">backend_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.basicAuthConfigInput">basic_auth_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.branchNameInput">branch_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.buildSpecInput">build_spec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.computeRoleArnInput">compute_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableAutoBuildInput">enable_auto_build_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePerformanceModeInput">enable_performance_mode_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePullRequestPreviewInput">enable_pull_request_preview_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableSkewProtectionInput">enable_skew_protection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.environmentVariablesInput">environment_variables_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.frameworkInput">framework_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentNameInput">pull_request_environment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.stageInput">stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.branchName">branch_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.buildSpec">build_spec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.computeRoleArn">compute_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableAutoBuild">enable_auto_build</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePerformanceMode">enable_performance_mode</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePullRequestPreview">enable_pull_request_preview</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableSkewProtection">enable_skew_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.framework">framework</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentName">pull_request_environment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.stage">stage</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.backend"></a>

```python
backend: AmplifyBranchBackendOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference">AmplifyBranchBackendOutputReference</a>

---

##### `basic_auth_config`<sup>Required</sup> <a name="basic_auth_config" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.basicAuthConfig"></a>

```python
basic_auth_config: AmplifyBranchBasicAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference">AmplifyBranchBasicAuthConfigOutputReference</a>

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.environmentVariables"></a>

```python
environment_variables: AmplifyBranchEnvironmentVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList">AmplifyBranchEnvironmentVariablesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.tags"></a>

```python
tags: AmplifyBranchTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList">AmplifyBranchTagsList</a>

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.backendInput"></a>

```python
backend_input: IResolvable | AmplifyBranchBackend
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a>

---

##### `basic_auth_config_input`<sup>Optional</sup> <a name="basic_auth_config_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.basicAuthConfigInput"></a>

```python
basic_auth_config_input: IResolvable | AmplifyBranchBasicAuthConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a>

---

##### `branch_name_input`<sup>Optional</sup> <a name="branch_name_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.branchNameInput"></a>

```python
branch_name_input: str
```

- *Type:* str

---

##### `build_spec_input`<sup>Optional</sup> <a name="build_spec_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.buildSpecInput"></a>

```python
build_spec_input: str
```

- *Type:* str

---

##### `compute_role_arn_input`<sup>Optional</sup> <a name="compute_role_arn_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.computeRoleArnInput"></a>

```python
compute_role_arn_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enable_auto_build_input`<sup>Optional</sup> <a name="enable_auto_build_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableAutoBuildInput"></a>

```python
enable_auto_build_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_performance_mode_input`<sup>Optional</sup> <a name="enable_performance_mode_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePerformanceModeInput"></a>

```python
enable_performance_mode_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_pull_request_preview_input`<sup>Optional</sup> <a name="enable_pull_request_preview_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePullRequestPreviewInput"></a>

```python
enable_pull_request_preview_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_skew_protection_input`<sup>Optional</sup> <a name="enable_skew_protection_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableSkewProtectionInput"></a>

```python
enable_skew_protection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.environmentVariablesInput"></a>

```python
environment_variables_input: IResolvable | typing.List[AmplifyBranchEnvironmentVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>]

---

##### `framework_input`<sup>Optional</sup> <a name="framework_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.frameworkInput"></a>

```python
framework_input: str
```

- *Type:* str

---

##### `pull_request_environment_name_input`<sup>Optional</sup> <a name="pull_request_environment_name_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentNameInput"></a>

```python
pull_request_environment_name_input: str
```

- *Type:* str

---

##### `stage_input`<sup>Optional</sup> <a name="stage_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.stageInput"></a>

```python
stage_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AmplifyBranchTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

---

##### `build_spec`<sup>Required</sup> <a name="build_spec" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.buildSpec"></a>

```python
build_spec: str
```

- *Type:* str

---

##### `compute_role_arn`<sup>Required</sup> <a name="compute_role_arn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.computeRoleArn"></a>

```python
compute_role_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_auto_build`<sup>Required</sup> <a name="enable_auto_build" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableAutoBuild"></a>

```python
enable_auto_build: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_performance_mode`<sup>Required</sup> <a name="enable_performance_mode" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePerformanceMode"></a>

```python
enable_performance_mode: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_pull_request_preview`<sup>Required</sup> <a name="enable_pull_request_preview" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePullRequestPreview"></a>

```python
enable_pull_request_preview: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_skew_protection`<sup>Required</sup> <a name="enable_skew_protection" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableSkewProtection"></a>

```python
enable_skew_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.framework"></a>

```python
framework: str
```

- *Type:* str

---

##### `pull_request_environment_name`<sup>Required</sup> <a name="pull_request_environment_name" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentName"></a>

```python
pull_request_environment_name: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AmplifyBranchBackend <a name="AmplifyBranchBackend" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_branch

amplifyBranch.AmplifyBranchBackend(
  stack_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend.property.stackArn">stack_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#stack_arn AmplifyBranch#stack_arn}. |

---

##### `stack_arn`<sup>Optional</sup> <a name="stack_arn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend.property.stackArn"></a>

```python
stack_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#stack_arn AmplifyBranch#stack_arn}.

---

### AmplifyBranchBasicAuthConfig <a name="AmplifyBranchBasicAuthConfig" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_branch

amplifyBranch.AmplifyBranchBasicAuthConfig(
  enable_basic_auth: bool | IResolvable = None,
  password: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig.property.enableBasicAuth">enable_basic_auth</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#enable_basic_auth AmplifyBranch#enable_basic_auth}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#password AmplifyBranch#password}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#username AmplifyBranch#username}. |

---

##### `enable_basic_auth`<sup>Optional</sup> <a name="enable_basic_auth" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig.property.enableBasicAuth"></a>

```python
enable_basic_auth: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#enable_basic_auth AmplifyBranch#enable_basic_auth}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#password AmplifyBranch#password}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#username AmplifyBranch#username}.

---

### AmplifyBranchConfig <a name="AmplifyBranchConfig" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_branch

amplifyBranch.AmplifyBranchConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_id: str,
  branch_name: str,
  backend: AmplifyBranchBackend = None,
  basic_auth_config: AmplifyBranchBasicAuthConfig = None,
  build_spec: str = None,
  compute_role_arn: str = None,
  description: str = None,
  enable_auto_build: bool | IResolvable = None,
  enable_performance_mode: bool | IResolvable = None,
  enable_pull_request_preview: bool | IResolvable = None,
  enable_skew_protection: bool | IResolvable = None,
  environment_variables: IResolvable | typing.List[AmplifyBranchEnvironmentVariables] = None,
  framework: str = None,
  pull_request_environment_name: str = None,
  stage: str = None,
  tags: IResolvable | typing.List[AmplifyBranchTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#app_id AmplifyBranch#app_id}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.branchName">branch_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#branch_name AmplifyBranch#branch_name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.backend">backend</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#backend AmplifyBranch#backend}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.basicAuthConfig">basic_auth_config</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#basic_auth_config AmplifyBranch#basic_auth_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.buildSpec">build_spec</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#build_spec AmplifyBranch#build_spec}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.computeRoleArn">compute_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#compute_role_arn AmplifyBranch#compute_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#description AmplifyBranch#description}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enableAutoBuild">enable_auto_build</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enablePerformanceMode">enable_performance_mode</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enablePullRequestPreview">enable_pull_request_preview</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enableSkewProtection">enable_skew_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#enable_skew_protection AmplifyBranch#enable_skew_protection}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.environmentVariables">environment_variables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#environment_variables AmplifyBranch#environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.framework">framework</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#framework AmplifyBranch#framework}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.pullRequestEnvironmentName">pull_request_environment_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.stage">stage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#stage AmplifyBranch#stage}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#tags AmplifyBranch#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#app_id AmplifyBranch#app_id}.

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#branch_name AmplifyBranch#branch_name}.

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.backend"></a>

```python
backend: AmplifyBranchBackend
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#backend AmplifyBranch#backend}.

---

##### `basic_auth_config`<sup>Optional</sup> <a name="basic_auth_config" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.basicAuthConfig"></a>

```python
basic_auth_config: AmplifyBranchBasicAuthConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#basic_auth_config AmplifyBranch#basic_auth_config}.

---

##### `build_spec`<sup>Optional</sup> <a name="build_spec" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.buildSpec"></a>

```python
build_spec: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#build_spec AmplifyBranch#build_spec}.

---

##### `compute_role_arn`<sup>Optional</sup> <a name="compute_role_arn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.computeRoleArn"></a>

```python
compute_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#compute_role_arn AmplifyBranch#compute_role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#description AmplifyBranch#description}.

---

##### `enable_auto_build`<sup>Optional</sup> <a name="enable_auto_build" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enableAutoBuild"></a>

```python
enable_auto_build: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}.

---

##### `enable_performance_mode`<sup>Optional</sup> <a name="enable_performance_mode" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enablePerformanceMode"></a>

```python
enable_performance_mode: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}.

---

##### `enable_pull_request_preview`<sup>Optional</sup> <a name="enable_pull_request_preview" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enablePullRequestPreview"></a>

```python
enable_pull_request_preview: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}.

---

##### `enable_skew_protection`<sup>Optional</sup> <a name="enable_skew_protection" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enableSkewProtection"></a>

```python
enable_skew_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#enable_skew_protection AmplifyBranch#enable_skew_protection}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.environmentVariables"></a>

```python
environment_variables: IResolvable | typing.List[AmplifyBranchEnvironmentVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#environment_variables AmplifyBranch#environment_variables}.

---

##### `framework`<sup>Optional</sup> <a name="framework" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.framework"></a>

```python
framework: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#framework AmplifyBranch#framework}.

---

##### `pull_request_environment_name`<sup>Optional</sup> <a name="pull_request_environment_name" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.pullRequestEnvironmentName"></a>

```python
pull_request_environment_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.stage"></a>

```python
stage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#stage AmplifyBranch#stage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AmplifyBranchTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#tags AmplifyBranch#tags}.

---

### AmplifyBranchEnvironmentVariables <a name="AmplifyBranchEnvironmentVariables" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_branch

amplifyBranch.AmplifyBranchEnvironmentVariables(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#name AmplifyBranch#name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#value AmplifyBranch#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#name AmplifyBranch#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#value AmplifyBranch#value}.

---

### AmplifyBranchTags <a name="AmplifyBranchTags" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_branch

amplifyBranch.AmplifyBranchTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#key AmplifyBranch#key}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#value AmplifyBranch#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#key AmplifyBranch#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_branch#value AmplifyBranch#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AmplifyBranchBackendOutputReference <a name="AmplifyBranchBackendOutputReference" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_branch

amplifyBranch.AmplifyBranchBackendOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.resetStackArn">reset_stack_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_stack_arn` <a name="reset_stack_arn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.resetStackArn"></a>

```python
def reset_stack_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.stackArnInput">stack_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.stackArn">stack_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stack_arn_input`<sup>Optional</sup> <a name="stack_arn_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.stackArnInput"></a>

```python
stack_arn_input: str
```

- *Type:* str

---

##### `stack_arn`<sup>Required</sup> <a name="stack_arn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.stackArn"></a>

```python
stack_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AmplifyBranchBackend
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a>

---


### AmplifyBranchBasicAuthConfigOutputReference <a name="AmplifyBranchBasicAuthConfigOutputReference" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_branch

amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resetEnableBasicAuth">reset_enable_basic_auth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_basic_auth` <a name="reset_enable_basic_auth" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resetEnableBasicAuth"></a>

```python
def reset_enable_basic_auth() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.enableBasicAuthInput">enable_basic_auth_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.enableBasicAuth">enable_basic_auth</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_basic_auth_input`<sup>Optional</sup> <a name="enable_basic_auth_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.enableBasicAuthInput"></a>

```python
enable_basic_auth_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `enable_basic_auth`<sup>Required</sup> <a name="enable_basic_auth" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.enableBasicAuth"></a>

```python
enable_basic_auth: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AmplifyBranchBasicAuthConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a>

---


### AmplifyBranchEnvironmentVariablesList <a name="AmplifyBranchEnvironmentVariablesList" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_branch

amplifyBranch.AmplifyBranchEnvironmentVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AmplifyBranchEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AmplifyBranchEnvironmentVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>]

---


### AmplifyBranchEnvironmentVariablesOutputReference <a name="AmplifyBranchEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_branch

amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AmplifyBranchEnvironmentVariables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>

---


### AmplifyBranchTagsList <a name="AmplifyBranchTagsList" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_branch

amplifyBranch.AmplifyBranchTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AmplifyBranchTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AmplifyBranchTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>]

---


### AmplifyBranchTagsOutputReference <a name="AmplifyBranchTagsOutputReference" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import amplify_branch

amplifyBranch.AmplifyBranchTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AmplifyBranchTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>

---



