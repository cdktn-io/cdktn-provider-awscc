# `lambdaMicrovmImage` Submodule <a name="`lambdaMicrovmImage` Submodule" id="@cdktn/provider-awscc.lambdaMicrovmImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaMicrovmImage <a name="LambdaMicrovmImage" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image awscc_lambda_microvm_image}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImage(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  additional_os_capabilities: typing.List[str],
  base_image_arn: str,
  base_image_version: str,
  build_role_arn: str,
  code_artifact: LambdaMicrovmImageCodeArtifact,
  cpu_configurations: IResolvable | typing.List[LambdaMicrovmImageCpuConfigurations],
  description: str,
  egress_network_connectors: typing.List[str],
  environment_variables: IResolvable | typing.List[LambdaMicrovmImageEnvironmentVariables],
  hooks: LambdaMicrovmImageHooks,
  logging: LambdaMicrovmImageLogging,
  name: str,
  resources: IResolvable | typing.List[LambdaMicrovmImageResources],
  tags: IResolvable | typing.List[LambdaMicrovmImageTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.additionalOsCapabilities">additional_os_capabilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#additional_os_capabilities LambdaMicrovmImage#additional_os_capabilities}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.baseImageArn">base_image_arn</a></code> | <code>str</code> | ARN of the base MicroVM image. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.baseImageVersion">base_image_version</a></code> | <code>str</code> | Specific version of the base MicroVM image to use. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.buildRoleArn">build_role_arn</a></code> | <code>str</code> | ARN of the IAM build role. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.codeArtifact">code_artifact</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a></code> | Code artifact for the active MicroVM image. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.cpuConfigurations">cpu_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#cpu_configurations LambdaMicrovmImage#cpu_configurations}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.description">description</a></code> | <code>str</code> | Human-readable description of the MicroVM image and its purpose. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.egressNetworkConnectors">egress_network_connectors</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#egress_network_connectors LambdaMicrovmImage#egress_network_connectors}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.environmentVariables">environment_variables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>]</code> | Environment variables to set in the container during the snapshot build. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.hooks">hooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#hooks LambdaMicrovmImage#hooks}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a></code> | Configuration for MicroVM image logging. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique name for the MicroVM image within the account. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.resources">resources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#resources LambdaMicrovmImage#resources}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>]</code> | Key-value pairs to associate with the MicroVM image for organization and management. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `additional_os_capabilities`<sup>Required</sup> <a name="additional_os_capabilities" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.additionalOsCapabilities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#additional_os_capabilities LambdaMicrovmImage#additional_os_capabilities}.

---

##### `base_image_arn`<sup>Required</sup> <a name="base_image_arn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.baseImageArn"></a>

- *Type:* str

ARN of the base MicroVM image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#base_image_arn LambdaMicrovmImage#base_image_arn}

---

##### `base_image_version`<sup>Required</sup> <a name="base_image_version" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.baseImageVersion"></a>

- *Type:* str

Specific version of the base MicroVM image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#base_image_version LambdaMicrovmImage#base_image_version}

---

##### `build_role_arn`<sup>Required</sup> <a name="build_role_arn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.buildRoleArn"></a>

- *Type:* str

ARN of the IAM build role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#build_role_arn LambdaMicrovmImage#build_role_arn}

---

##### `code_artifact`<sup>Required</sup> <a name="code_artifact" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.codeArtifact"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a>

Code artifact for the active MicroVM image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#code_artifact LambdaMicrovmImage#code_artifact}

---

##### `cpu_configurations`<sup>Required</sup> <a name="cpu_configurations" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.cpuConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#cpu_configurations LambdaMicrovmImage#cpu_configurations}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.description"></a>

- *Type:* str

Human-readable description of the MicroVM image and its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#description LambdaMicrovmImage#description}

---

##### `egress_network_connectors`<sup>Required</sup> <a name="egress_network_connectors" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.egressNetworkConnectors"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#egress_network_connectors LambdaMicrovmImage#egress_network_connectors}.

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.environmentVariables"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>]

Environment variables to set in the container during the snapshot build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#environment_variables LambdaMicrovmImage#environment_variables}

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.hooks"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#hooks LambdaMicrovmImage#hooks}.

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a>

Configuration for MicroVM image logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#logging LambdaMicrovmImage#logging}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.name"></a>

- *Type:* str

Unique name for the MicroVM image within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#name LambdaMicrovmImage#name}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.resources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#resources LambdaMicrovmImage#resources}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>]

Key-value pairs to associate with the MicroVM image for organization and management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#tags LambdaMicrovmImage#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCodeArtifact">put_code_artifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCpuConfigurations">put_cpu_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putEnvironmentVariables">put_environment_variables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putHooks">put_hooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putLogging">put_logging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putResources">put_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_code_artifact` <a name="put_code_artifact" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCodeArtifact"></a>

```python
def put_code_artifact(
  uri: str
) -> None
```

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCodeArtifact.parameter.uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#uri LambdaMicrovmImage#uri}.

---

##### `put_cpu_configurations` <a name="put_cpu_configurations" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCpuConfigurations"></a>

```python
def put_cpu_configurations(
  value: IResolvable | typing.List[LambdaMicrovmImageCpuConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putCpuConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>]

---

##### `put_environment_variables` <a name="put_environment_variables" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putEnvironmentVariables"></a>

```python
def put_environment_variables(
  value: IResolvable | typing.List[LambdaMicrovmImageEnvironmentVariables]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putEnvironmentVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>]

---

##### `put_hooks` <a name="put_hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putHooks"></a>

```python
def put_hooks(
  microvm_hooks: LambdaMicrovmImageHooksMicrovmHooks = None,
  microvm_image_hooks: LambdaMicrovmImageHooksMicrovmImageHooks = None,
  port: typing.Union[int, float] = None
) -> None
```

###### `microvm_hooks`<sup>Optional</sup> <a name="microvm_hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putHooks.parameter.microvmHooks"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#microvm_hooks LambdaMicrovmImage#microvm_hooks}.

---

###### `microvm_image_hooks`<sup>Optional</sup> <a name="microvm_image_hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putHooks.parameter.microvmImageHooks"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#microvm_image_hooks LambdaMicrovmImage#microvm_image_hooks}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putHooks.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#port LambdaMicrovmImage#port}.

---

##### `put_logging` <a name="put_logging" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putLogging"></a>

```python
def put_logging(
  cloudwatch: LambdaMicrovmImageLoggingCloudwatch = None,
  disabled: bool | IResolvable = None
) -> None
```

###### `cloudwatch`<sup>Optional</sup> <a name="cloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putLogging.parameter.cloudwatch"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#cloudwatch LambdaMicrovmImage#cloudwatch}.

---

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putLogging.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#disabled LambdaMicrovmImage#disabled}.

---

##### `put_resources` <a name="put_resources" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putResources"></a>

```python
def put_resources(
  value: IResolvable | typing.List[LambdaMicrovmImageResources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putResources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LambdaMicrovmImageTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LambdaMicrovmImage resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isConstruct"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LambdaMicrovmImage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdaMicrovmImage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdaMicrovmImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaMicrovmImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.codeArtifact">code_artifact</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference">LambdaMicrovmImageCodeArtifactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cpuConfigurations">cpu_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList">LambdaMicrovmImageCpuConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.environmentVariables">environment_variables</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList">LambdaMicrovmImageEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.hooks">hooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference">LambdaMicrovmImageHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.imageArn">image_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.latestActiveImageVersion">latest_active_image_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.latestFailedImageVersion">latest_failed_image_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference">LambdaMicrovmImageLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList">LambdaMicrovmImageResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList">LambdaMicrovmImageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.additionalOsCapabilitiesInput">additional_os_capabilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageArnInput">base_image_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageVersionInput">base_image_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.buildRoleArnInput">build_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.codeArtifactInput">code_artifact_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cpuConfigurationsInput">cpu_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.egressNetworkConnectorsInput">egress_network_connectors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.environmentVariablesInput">environment_variables_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.hooksInput">hooks_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.loggingInput">logging_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.resourcesInput">resources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.additionalOsCapabilities">additional_os_capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageArn">base_image_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageVersion">base_image_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.buildRoleArn">build_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.egressNetworkConnectors">egress_network_connectors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `code_artifact`<sup>Required</sup> <a name="code_artifact" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.codeArtifact"></a>

```python
code_artifact: LambdaMicrovmImageCodeArtifactOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference">LambdaMicrovmImageCodeArtifactOutputReference</a>

---

##### `cpu_configurations`<sup>Required</sup> <a name="cpu_configurations" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cpuConfigurations"></a>

```python
cpu_configurations: LambdaMicrovmImageCpuConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList">LambdaMicrovmImageCpuConfigurationsList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.environmentVariables"></a>

```python
environment_variables: LambdaMicrovmImageEnvironmentVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList">LambdaMicrovmImageEnvironmentVariablesList</a>

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.hooks"></a>

```python
hooks: LambdaMicrovmImageHooksOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference">LambdaMicrovmImageHooksOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_arn`<sup>Required</sup> <a name="image_arn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.imageArn"></a>

```python
image_arn: str
```

- *Type:* str

---

##### `latest_active_image_version`<sup>Required</sup> <a name="latest_active_image_version" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.latestActiveImageVersion"></a>

```python
latest_active_image_version: str
```

- *Type:* str

---

##### `latest_failed_image_version`<sup>Required</sup> <a name="latest_failed_image_version" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.latestFailedImageVersion"></a>

```python
latest_failed_image_version: str
```

- *Type:* str

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.logging"></a>

```python
logging: LambdaMicrovmImageLoggingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference">LambdaMicrovmImageLoggingOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.resources"></a>

```python
resources: LambdaMicrovmImageResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList">LambdaMicrovmImageResourcesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tags"></a>

```python
tags: LambdaMicrovmImageTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList">LambdaMicrovmImageTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `additional_os_capabilities_input`<sup>Optional</sup> <a name="additional_os_capabilities_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.additionalOsCapabilitiesInput"></a>

```python
additional_os_capabilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `base_image_arn_input`<sup>Optional</sup> <a name="base_image_arn_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageArnInput"></a>

```python
base_image_arn_input: str
```

- *Type:* str

---

##### `base_image_version_input`<sup>Optional</sup> <a name="base_image_version_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageVersionInput"></a>

```python
base_image_version_input: str
```

- *Type:* str

---

##### `build_role_arn_input`<sup>Optional</sup> <a name="build_role_arn_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.buildRoleArnInput"></a>

```python
build_role_arn_input: str
```

- *Type:* str

---

##### `code_artifact_input`<sup>Optional</sup> <a name="code_artifact_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.codeArtifactInput"></a>

```python
code_artifact_input: IResolvable | LambdaMicrovmImageCodeArtifact
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a>

---

##### `cpu_configurations_input`<sup>Optional</sup> <a name="cpu_configurations_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.cpuConfigurationsInput"></a>

```python
cpu_configurations_input: IResolvable | typing.List[LambdaMicrovmImageCpuConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `egress_network_connectors_input`<sup>Optional</sup> <a name="egress_network_connectors_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.egressNetworkConnectorsInput"></a>

```python
egress_network_connectors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.environmentVariablesInput"></a>

```python
environment_variables_input: IResolvable | typing.List[LambdaMicrovmImageEnvironmentVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>]

---

##### `hooks_input`<sup>Optional</sup> <a name="hooks_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.hooksInput"></a>

```python
hooks_input: IResolvable | LambdaMicrovmImageHooks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a>

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.loggingInput"></a>

```python
logging_input: IResolvable | LambdaMicrovmImageLogging
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.resourcesInput"></a>

```python
resources_input: IResolvable | typing.List[LambdaMicrovmImageResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LambdaMicrovmImageTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>]

---

##### `additional_os_capabilities`<sup>Required</sup> <a name="additional_os_capabilities" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.additionalOsCapabilities"></a>

```python
additional_os_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `base_image_arn`<sup>Required</sup> <a name="base_image_arn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageArn"></a>

```python
base_image_arn: str
```

- *Type:* str

---

##### `base_image_version`<sup>Required</sup> <a name="base_image_version" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.baseImageVersion"></a>

```python
base_image_version: str
```

- *Type:* str

---

##### `build_role_arn`<sup>Required</sup> <a name="build_role_arn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.buildRoleArn"></a>

```python
build_role_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `egress_network_connectors`<sup>Required</sup> <a name="egress_network_connectors" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.egressNetworkConnectors"></a>

```python
egress_network_connectors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaMicrovmImageCodeArtifact <a name="LambdaMicrovmImageCodeArtifact" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact(
  uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#uri LambdaMicrovmImage#uri}. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#uri LambdaMicrovmImage#uri}.

---

### LambdaMicrovmImageConfig <a name="LambdaMicrovmImageConfig" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  additional_os_capabilities: typing.List[str],
  base_image_arn: str,
  base_image_version: str,
  build_role_arn: str,
  code_artifact: LambdaMicrovmImageCodeArtifact,
  cpu_configurations: IResolvable | typing.List[LambdaMicrovmImageCpuConfigurations],
  description: str,
  egress_network_connectors: typing.List[str],
  environment_variables: IResolvable | typing.List[LambdaMicrovmImageEnvironmentVariables],
  hooks: LambdaMicrovmImageHooks,
  logging: LambdaMicrovmImageLogging,
  name: str,
  resources: IResolvable | typing.List[LambdaMicrovmImageResources],
  tags: IResolvable | typing.List[LambdaMicrovmImageTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.additionalOsCapabilities">additional_os_capabilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#additional_os_capabilities LambdaMicrovmImage#additional_os_capabilities}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.baseImageArn">base_image_arn</a></code> | <code>str</code> | ARN of the base MicroVM image. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.baseImageVersion">base_image_version</a></code> | <code>str</code> | Specific version of the base MicroVM image to use. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.buildRoleArn">build_role_arn</a></code> | <code>str</code> | ARN of the IAM build role. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.codeArtifact">code_artifact</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a></code> | Code artifact for the active MicroVM image. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.cpuConfigurations">cpu_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#cpu_configurations LambdaMicrovmImage#cpu_configurations}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.description">description</a></code> | <code>str</code> | Human-readable description of the MicroVM image and its purpose. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.egressNetworkConnectors">egress_network_connectors</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#egress_network_connectors LambdaMicrovmImage#egress_network_connectors}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.environmentVariables">environment_variables</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>]</code> | Environment variables to set in the container during the snapshot build. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.hooks">hooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#hooks LambdaMicrovmImage#hooks}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a></code> | Configuration for MicroVM image logging. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.name">name</a></code> | <code>str</code> | Unique name for the MicroVM image within the account. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.resources">resources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#resources LambdaMicrovmImage#resources}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>]</code> | Key-value pairs to associate with the MicroVM image for organization and management. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `additional_os_capabilities`<sup>Required</sup> <a name="additional_os_capabilities" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.additionalOsCapabilities"></a>

```python
additional_os_capabilities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#additional_os_capabilities LambdaMicrovmImage#additional_os_capabilities}.

---

##### `base_image_arn`<sup>Required</sup> <a name="base_image_arn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.baseImageArn"></a>

```python
base_image_arn: str
```

- *Type:* str

ARN of the base MicroVM image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#base_image_arn LambdaMicrovmImage#base_image_arn}

---

##### `base_image_version`<sup>Required</sup> <a name="base_image_version" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.baseImageVersion"></a>

```python
base_image_version: str
```

- *Type:* str

Specific version of the base MicroVM image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#base_image_version LambdaMicrovmImage#base_image_version}

---

##### `build_role_arn`<sup>Required</sup> <a name="build_role_arn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.buildRoleArn"></a>

```python
build_role_arn: str
```

- *Type:* str

ARN of the IAM build role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#build_role_arn LambdaMicrovmImage#build_role_arn}

---

##### `code_artifact`<sup>Required</sup> <a name="code_artifact" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.codeArtifact"></a>

```python
code_artifact: LambdaMicrovmImageCodeArtifact
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a>

Code artifact for the active MicroVM image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#code_artifact LambdaMicrovmImage#code_artifact}

---

##### `cpu_configurations`<sup>Required</sup> <a name="cpu_configurations" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.cpuConfigurations"></a>

```python
cpu_configurations: IResolvable | typing.List[LambdaMicrovmImageCpuConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#cpu_configurations LambdaMicrovmImage#cpu_configurations}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the MicroVM image and its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#description LambdaMicrovmImage#description}

---

##### `egress_network_connectors`<sup>Required</sup> <a name="egress_network_connectors" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.egressNetworkConnectors"></a>

```python
egress_network_connectors: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#egress_network_connectors LambdaMicrovmImage#egress_network_connectors}.

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.environmentVariables"></a>

```python
environment_variables: IResolvable | typing.List[LambdaMicrovmImageEnvironmentVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>]

Environment variables to set in the container during the snapshot build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#environment_variables LambdaMicrovmImage#environment_variables}

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.hooks"></a>

```python
hooks: LambdaMicrovmImageHooks
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#hooks LambdaMicrovmImage#hooks}.

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.logging"></a>

```python
logging: LambdaMicrovmImageLogging
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a>

Configuration for MicroVM image logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#logging LambdaMicrovmImage#logging}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name for the MicroVM image within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#name LambdaMicrovmImage#name}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.resources"></a>

```python
resources: IResolvable | typing.List[LambdaMicrovmImageResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#resources LambdaMicrovmImage#resources}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LambdaMicrovmImageTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>]

Key-value pairs to associate with the MicroVM image for organization and management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#tags LambdaMicrovmImage#tags}

---

### LambdaMicrovmImageCpuConfigurations <a name="LambdaMicrovmImageCpuConfigurations" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations(
  architecture: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations.property.architecture">architecture</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#architecture LambdaMicrovmImage#architecture}. |

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#architecture LambdaMicrovmImage#architecture}.

---

### LambdaMicrovmImageEnvironmentVariables <a name="LambdaMicrovmImageEnvironmentVariables" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#key LambdaMicrovmImage#key}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#value LambdaMicrovmImage#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#key LambdaMicrovmImage#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#value LambdaMicrovmImage#value}.

---

### LambdaMicrovmImageHooks <a name="LambdaMicrovmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageHooks(
  microvm_hooks: LambdaMicrovmImageHooksMicrovmHooks = None,
  microvm_image_hooks: LambdaMicrovmImageHooksMicrovmImageHooks = None,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.microvmHooks">microvm_hooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#microvm_hooks LambdaMicrovmImage#microvm_hooks}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.microvmImageHooks">microvm_image_hooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#microvm_image_hooks LambdaMicrovmImage#microvm_image_hooks}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#port LambdaMicrovmImage#port}. |

---

##### `microvm_hooks`<sup>Optional</sup> <a name="microvm_hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.microvmHooks"></a>

```python
microvm_hooks: LambdaMicrovmImageHooksMicrovmHooks
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#microvm_hooks LambdaMicrovmImage#microvm_hooks}.

---

##### `microvm_image_hooks`<sup>Optional</sup> <a name="microvm_image_hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.microvmImageHooks"></a>

```python
microvm_image_hooks: LambdaMicrovmImageHooksMicrovmImageHooks
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#microvm_image_hooks LambdaMicrovmImage#microvm_image_hooks}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#port LambdaMicrovmImage#port}.

---

### LambdaMicrovmImageHooksMicrovmHooks <a name="LambdaMicrovmImageHooksMicrovmHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks(
  resume: str = None,
  resume_timeout_in_seconds: typing.Union[int, float] = None,
  run: str = None,
  run_timeout_in_seconds: typing.Union[int, float] = None,
  suspend: str = None,
  suspend_timeout_in_seconds: typing.Union[int, float] = None,
  terminate: str = None,
  terminate_timeout_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.resume">resume</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#resume LambdaMicrovmImage#resume}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.resumeTimeoutInSeconds">resume_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#resume_timeout_in_seconds LambdaMicrovmImage#resume_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.run">run</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#run LambdaMicrovmImage#run}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.runTimeoutInSeconds">run_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#run_timeout_in_seconds LambdaMicrovmImage#run_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.suspend">suspend</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#suspend LambdaMicrovmImage#suspend}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.suspendTimeoutInSeconds">suspend_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#suspend_timeout_in_seconds LambdaMicrovmImage#suspend_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.terminate">terminate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#terminate LambdaMicrovmImage#terminate}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.terminateTimeoutInSeconds">terminate_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#terminate_timeout_in_seconds LambdaMicrovmImage#terminate_timeout_in_seconds}. |

---

##### `resume`<sup>Optional</sup> <a name="resume" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.resume"></a>

```python
resume: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#resume LambdaMicrovmImage#resume}.

---

##### `resume_timeout_in_seconds`<sup>Optional</sup> <a name="resume_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.resumeTimeoutInSeconds"></a>

```python
resume_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#resume_timeout_in_seconds LambdaMicrovmImage#resume_timeout_in_seconds}.

---

##### `run`<sup>Optional</sup> <a name="run" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.run"></a>

```python
run: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#run LambdaMicrovmImage#run}.

---

##### `run_timeout_in_seconds`<sup>Optional</sup> <a name="run_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.runTimeoutInSeconds"></a>

```python
run_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#run_timeout_in_seconds LambdaMicrovmImage#run_timeout_in_seconds}.

---

##### `suspend`<sup>Optional</sup> <a name="suspend" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.suspend"></a>

```python
suspend: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#suspend LambdaMicrovmImage#suspend}.

---

##### `suspend_timeout_in_seconds`<sup>Optional</sup> <a name="suspend_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.suspendTimeoutInSeconds"></a>

```python
suspend_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#suspend_timeout_in_seconds LambdaMicrovmImage#suspend_timeout_in_seconds}.

---

##### `terminate`<sup>Optional</sup> <a name="terminate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.terminate"></a>

```python
terminate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#terminate LambdaMicrovmImage#terminate}.

---

##### `terminate_timeout_in_seconds`<sup>Optional</sup> <a name="terminate_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks.property.terminateTimeoutInSeconds"></a>

```python
terminate_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#terminate_timeout_in_seconds LambdaMicrovmImage#terminate_timeout_in_seconds}.

---

### LambdaMicrovmImageHooksMicrovmImageHooks <a name="LambdaMicrovmImageHooksMicrovmImageHooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks(
  ready: str = None,
  ready_timeout_in_seconds: typing.Union[int, float] = None,
  validate: str = None,
  validate_timeout_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.ready">ready</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#ready LambdaMicrovmImage#ready}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.readyTimeoutInSeconds">ready_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#ready_timeout_in_seconds LambdaMicrovmImage#ready_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.validate">validate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#validate LambdaMicrovmImage#validate}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.validateTimeoutInSeconds">validate_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#validate_timeout_in_seconds LambdaMicrovmImage#validate_timeout_in_seconds}. |

---

##### `ready`<sup>Optional</sup> <a name="ready" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.ready"></a>

```python
ready: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#ready LambdaMicrovmImage#ready}.

---

##### `ready_timeout_in_seconds`<sup>Optional</sup> <a name="ready_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.readyTimeoutInSeconds"></a>

```python
ready_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#ready_timeout_in_seconds LambdaMicrovmImage#ready_timeout_in_seconds}.

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.validate"></a>

```python
validate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#validate LambdaMicrovmImage#validate}.

---

##### `validate_timeout_in_seconds`<sup>Optional</sup> <a name="validate_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks.property.validateTimeoutInSeconds"></a>

```python
validate_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#validate_timeout_in_seconds LambdaMicrovmImage#validate_timeout_in_seconds}.

---

### LambdaMicrovmImageLogging <a name="LambdaMicrovmImageLogging" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageLogging(
  cloudwatch: LambdaMicrovmImageLoggingCloudwatch = None,
  disabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.property.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#cloudwatch LambdaMicrovmImage#cloudwatch}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#disabled LambdaMicrovmImage#disabled}. |

---

##### `cloudwatch`<sup>Optional</sup> <a name="cloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.property.cloudwatch"></a>

```python
cloudwatch: LambdaMicrovmImageLoggingCloudwatch
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#cloudwatch LambdaMicrovmImage#cloudwatch}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#disabled LambdaMicrovmImage#disabled}.

---

### LambdaMicrovmImageLoggingCloudwatch <a name="LambdaMicrovmImageLoggingCloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch(
  log_group: str = None,
  log_stream: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.property.logGroup">log_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#log_group LambdaMicrovmImage#log_group}. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.property.logStream">log_stream</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#log_stream LambdaMicrovmImage#log_stream}. |

---

##### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#log_group LambdaMicrovmImage#log_group}.

---

##### `log_stream`<sup>Optional</sup> <a name="log_stream" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch.property.logStream"></a>

```python
log_stream: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#log_stream LambdaMicrovmImage#log_stream}.

---

### LambdaMicrovmImageResources <a name="LambdaMicrovmImageResources" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageResources(
  minimum_memory_in_mi_b: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources.property.minimumMemoryInMiB">minimum_memory_in_mi_b</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#minimum_memory_in_mi_b LambdaMicrovmImage#minimum_memory_in_mi_b}. |

---

##### `minimum_memory_in_mi_b`<sup>Required</sup> <a name="minimum_memory_in_mi_b" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources.property.minimumMemoryInMiB"></a>

```python
minimum_memory_in_mi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#minimum_memory_in_mi_b LambdaMicrovmImage#minimum_memory_in_mi_b}.

---

### LambdaMicrovmImageTags <a name="LambdaMicrovmImageTags" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#key LambdaMicrovmImage#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#value LambdaMicrovmImage#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaMicrovmImageCodeArtifactOutputReference <a name="LambdaMicrovmImageCodeArtifactOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifactOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaMicrovmImageCodeArtifact
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCodeArtifact">LambdaMicrovmImageCodeArtifact</a>

---


### LambdaMicrovmImageCpuConfigurationsList <a name="LambdaMicrovmImageCpuConfigurationsList" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaMicrovmImageCpuConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaMicrovmImageCpuConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>]

---


### LambdaMicrovmImageCpuConfigurationsOutputReference <a name="LambdaMicrovmImageCpuConfigurationsOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.architectureInput">architecture_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture_input`<sup>Optional</sup> <a name="architecture_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.architectureInput"></a>

```python
architecture_input: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaMicrovmImageCpuConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageCpuConfigurations">LambdaMicrovmImageCpuConfigurations</a>

---


### LambdaMicrovmImageEnvironmentVariablesList <a name="LambdaMicrovmImageEnvironmentVariablesList" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaMicrovmImageEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaMicrovmImageEnvironmentVariables]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>]

---


### LambdaMicrovmImageEnvironmentVariablesOutputReference <a name="LambdaMicrovmImageEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaMicrovmImageEnvironmentVariables
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageEnvironmentVariables">LambdaMicrovmImageEnvironmentVariables</a>

---


### LambdaMicrovmImageHooksMicrovmHooksOutputReference <a name="LambdaMicrovmImageHooksMicrovmHooksOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetResume">reset_resume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetResumeTimeoutInSeconds">reset_resume_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetRun">reset_run</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetRunTimeoutInSeconds">reset_run_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetSuspend">reset_suspend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetSuspendTimeoutInSeconds">reset_suspend_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetTerminate">reset_terminate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetTerminateTimeoutInSeconds">reset_terminate_timeout_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resume` <a name="reset_resume" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetResume"></a>

```python
def reset_resume() -> None
```

##### `reset_resume_timeout_in_seconds` <a name="reset_resume_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetResumeTimeoutInSeconds"></a>

```python
def reset_resume_timeout_in_seconds() -> None
```

##### `reset_run` <a name="reset_run" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetRun"></a>

```python
def reset_run() -> None
```

##### `reset_run_timeout_in_seconds` <a name="reset_run_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetRunTimeoutInSeconds"></a>

```python
def reset_run_timeout_in_seconds() -> None
```

##### `reset_suspend` <a name="reset_suspend" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetSuspend"></a>

```python
def reset_suspend() -> None
```

##### `reset_suspend_timeout_in_seconds` <a name="reset_suspend_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetSuspendTimeoutInSeconds"></a>

```python
def reset_suspend_timeout_in_seconds() -> None
```

##### `reset_terminate` <a name="reset_terminate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetTerminate"></a>

```python
def reset_terminate() -> None
```

##### `reset_terminate_timeout_in_seconds` <a name="reset_terminate_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.resetTerminateTimeoutInSeconds"></a>

```python
def reset_terminate_timeout_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeInput">resume_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSecondsInput">resume_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runInput">run_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSecondsInput">run_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendInput">suspend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSecondsInput">suspend_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateInput">terminate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSecondsInput">terminate_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resume">resume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds">resume_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.run">run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds">run_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspend">suspend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds">suspend_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminate">terminate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds">terminate_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resume_input`<sup>Optional</sup> <a name="resume_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeInput"></a>

```python
resume_input: str
```

- *Type:* str

---

##### `resume_timeout_in_seconds_input`<sup>Optional</sup> <a name="resume_timeout_in_seconds_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSecondsInput"></a>

```python
resume_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `run_input`<sup>Optional</sup> <a name="run_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runInput"></a>

```python
run_input: str
```

- *Type:* str

---

##### `run_timeout_in_seconds_input`<sup>Optional</sup> <a name="run_timeout_in_seconds_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSecondsInput"></a>

```python
run_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `suspend_input`<sup>Optional</sup> <a name="suspend_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendInput"></a>

```python
suspend_input: str
```

- *Type:* str

---

##### `suspend_timeout_in_seconds_input`<sup>Optional</sup> <a name="suspend_timeout_in_seconds_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSecondsInput"></a>

```python
suspend_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `terminate_input`<sup>Optional</sup> <a name="terminate_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateInput"></a>

```python
terminate_input: str
```

- *Type:* str

---

##### `terminate_timeout_in_seconds_input`<sup>Optional</sup> <a name="terminate_timeout_in_seconds_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSecondsInput"></a>

```python
terminate_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resume`<sup>Required</sup> <a name="resume" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resume"></a>

```python
resume: str
```

- *Type:* str

---

##### `resume_timeout_in_seconds`<sup>Required</sup> <a name="resume_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds"></a>

```python
resume_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.run"></a>

```python
run: str
```

- *Type:* str

---

##### `run_timeout_in_seconds`<sup>Required</sup> <a name="run_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds"></a>

```python
run_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `suspend`<sup>Required</sup> <a name="suspend" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspend"></a>

```python
suspend: str
```

- *Type:* str

---

##### `suspend_timeout_in_seconds`<sup>Required</sup> <a name="suspend_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds"></a>

```python
suspend_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `terminate`<sup>Required</sup> <a name="terminate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminate"></a>

```python
terminate: str
```

- *Type:* str

---

##### `terminate_timeout_in_seconds`<sup>Required</sup> <a name="terminate_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds"></a>

```python
terminate_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaMicrovmImageHooksMicrovmHooks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a>

---


### LambdaMicrovmImageHooksMicrovmImageHooksOutputReference <a name="LambdaMicrovmImageHooksMicrovmImageHooksOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetReady">reset_ready</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetReadyTimeoutInSeconds">reset_ready_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetValidate">reset_validate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetValidateTimeoutInSeconds">reset_validate_timeout_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ready` <a name="reset_ready" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetReady"></a>

```python
def reset_ready() -> None
```

##### `reset_ready_timeout_in_seconds` <a name="reset_ready_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetReadyTimeoutInSeconds"></a>

```python
def reset_ready_timeout_in_seconds() -> None
```

##### `reset_validate` <a name="reset_validate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetValidate"></a>

```python
def reset_validate() -> None
```

##### `reset_validate_timeout_in_seconds` <a name="reset_validate_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.resetValidateTimeoutInSeconds"></a>

```python
def reset_validate_timeout_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyInput">ready_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSecondsInput">ready_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateInput">validate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSecondsInput">validate_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.ready">ready</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds">ready_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validate">validate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds">validate_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ready_input`<sup>Optional</sup> <a name="ready_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyInput"></a>

```python
ready_input: str
```

- *Type:* str

---

##### `ready_timeout_in_seconds_input`<sup>Optional</sup> <a name="ready_timeout_in_seconds_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSecondsInput"></a>

```python
ready_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `validate_input`<sup>Optional</sup> <a name="validate_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateInput"></a>

```python
validate_input: str
```

- *Type:* str

---

##### `validate_timeout_in_seconds_input`<sup>Optional</sup> <a name="validate_timeout_in_seconds_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSecondsInput"></a>

```python
validate_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ready`<sup>Required</sup> <a name="ready" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.ready"></a>

```python
ready: str
```

- *Type:* str

---

##### `ready_timeout_in_seconds`<sup>Required</sup> <a name="ready_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds"></a>

```python
ready_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validate"></a>

```python
validate: str
```

- *Type:* str

---

##### `validate_timeout_in_seconds`<sup>Required</sup> <a name="validate_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds"></a>

```python
validate_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaMicrovmImageHooksMicrovmImageHooks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a>

---


### LambdaMicrovmImageHooksOutputReference <a name="LambdaMicrovmImageHooksOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmHooks">put_microvm_hooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmImageHooks">put_microvm_image_hooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetMicrovmHooks">reset_microvm_hooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetMicrovmImageHooks">reset_microvm_image_hooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_microvm_hooks` <a name="put_microvm_hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmHooks"></a>

```python
def put_microvm_hooks(
  resume: str = None,
  resume_timeout_in_seconds: typing.Union[int, float] = None,
  run: str = None,
  run_timeout_in_seconds: typing.Union[int, float] = None,
  suspend: str = None,
  suspend_timeout_in_seconds: typing.Union[int, float] = None,
  terminate: str = None,
  terminate_timeout_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `resume`<sup>Optional</sup> <a name="resume" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmHooks.parameter.resume"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#resume LambdaMicrovmImage#resume}.

---

###### `resume_timeout_in_seconds`<sup>Optional</sup> <a name="resume_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmHooks.parameter.resumeTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#resume_timeout_in_seconds LambdaMicrovmImage#resume_timeout_in_seconds}.

---

###### `run`<sup>Optional</sup> <a name="run" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmHooks.parameter.run"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#run LambdaMicrovmImage#run}.

---

###### `run_timeout_in_seconds`<sup>Optional</sup> <a name="run_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmHooks.parameter.runTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#run_timeout_in_seconds LambdaMicrovmImage#run_timeout_in_seconds}.

---

###### `suspend`<sup>Optional</sup> <a name="suspend" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmHooks.parameter.suspend"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#suspend LambdaMicrovmImage#suspend}.

---

###### `suspend_timeout_in_seconds`<sup>Optional</sup> <a name="suspend_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmHooks.parameter.suspendTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#suspend_timeout_in_seconds LambdaMicrovmImage#suspend_timeout_in_seconds}.

---

###### `terminate`<sup>Optional</sup> <a name="terminate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmHooks.parameter.terminate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#terminate LambdaMicrovmImage#terminate}.

---

###### `terminate_timeout_in_seconds`<sup>Optional</sup> <a name="terminate_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmHooks.parameter.terminateTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#terminate_timeout_in_seconds LambdaMicrovmImage#terminate_timeout_in_seconds}.

---

##### `put_microvm_image_hooks` <a name="put_microvm_image_hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmImageHooks"></a>

```python
def put_microvm_image_hooks(
  ready: str = None,
  ready_timeout_in_seconds: typing.Union[int, float] = None,
  validate: str = None,
  validate_timeout_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `ready`<sup>Optional</sup> <a name="ready" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmImageHooks.parameter.ready"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#ready LambdaMicrovmImage#ready}.

---

###### `ready_timeout_in_seconds`<sup>Optional</sup> <a name="ready_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmImageHooks.parameter.readyTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#ready_timeout_in_seconds LambdaMicrovmImage#ready_timeout_in_seconds}.

---

###### `validate`<sup>Optional</sup> <a name="validate" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmImageHooks.parameter.validate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#validate LambdaMicrovmImage#validate}.

---

###### `validate_timeout_in_seconds`<sup>Optional</sup> <a name="validate_timeout_in_seconds" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.putMicrovmImageHooks.parameter.validateTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#validate_timeout_in_seconds LambdaMicrovmImage#validate_timeout_in_seconds}.

---

##### `reset_microvm_hooks` <a name="reset_microvm_hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetMicrovmHooks"></a>

```python
def reset_microvm_hooks() -> None
```

##### `reset_microvm_image_hooks` <a name="reset_microvm_image_hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetMicrovmImageHooks"></a>

```python
def reset_microvm_image_hooks() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmHooks">microvm_hooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference">LambdaMicrovmImageHooksMicrovmHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmImageHooks">microvm_image_hooks</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference">LambdaMicrovmImageHooksMicrovmImageHooksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmHooksInput">microvm_hooks_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmImageHooksInput">microvm_image_hooks_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `microvm_hooks`<sup>Required</sup> <a name="microvm_hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmHooks"></a>

```python
microvm_hooks: LambdaMicrovmImageHooksMicrovmHooksOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooksOutputReference">LambdaMicrovmImageHooksMicrovmHooksOutputReference</a>

---

##### `microvm_image_hooks`<sup>Required</sup> <a name="microvm_image_hooks" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmImageHooks"></a>

```python
microvm_image_hooks: LambdaMicrovmImageHooksMicrovmImageHooksOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooksOutputReference">LambdaMicrovmImageHooksMicrovmImageHooksOutputReference</a>

---

##### `microvm_hooks_input`<sup>Optional</sup> <a name="microvm_hooks_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmHooksInput"></a>

```python
microvm_hooks_input: IResolvable | LambdaMicrovmImageHooksMicrovmHooks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmHooks">LambdaMicrovmImageHooksMicrovmHooks</a>

---

##### `microvm_image_hooks_input`<sup>Optional</sup> <a name="microvm_image_hooks_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.microvmImageHooksInput"></a>

```python
microvm_image_hooks_input: IResolvable | LambdaMicrovmImageHooksMicrovmImageHooks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksMicrovmImageHooks">LambdaMicrovmImageHooksMicrovmImageHooks</a>

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaMicrovmImageHooks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageHooks">LambdaMicrovmImageHooks</a>

---


### LambdaMicrovmImageLoggingCloudwatchOutputReference <a name="LambdaMicrovmImageLoggingCloudwatchOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resetLogGroup">reset_log_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resetLogStream">reset_log_stream</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_group` <a name="reset_log_group" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resetLogGroup"></a>

```python
def reset_log_group() -> None
```

##### `reset_log_stream` <a name="reset_log_stream" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.resetLogStream"></a>

```python
def reset_log_stream() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroupInput">log_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStreamInput">log_stream_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStream">log_stream</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_input`<sup>Optional</sup> <a name="log_group_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroupInput"></a>

```python
log_group_input: str
```

- *Type:* str

---

##### `log_stream_input`<sup>Optional</sup> <a name="log_stream_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStreamInput"></a>

```python
log_stream_input: str
```

- *Type:* str

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `log_stream`<sup>Required</sup> <a name="log_stream" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.logStream"></a>

```python
log_stream: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaMicrovmImageLoggingCloudwatch
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a>

---


### LambdaMicrovmImageLoggingOutputReference <a name="LambdaMicrovmImageLoggingOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.putCloudwatch">put_cloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resetCloudwatch">reset_cloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch` <a name="put_cloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.putCloudwatch"></a>

```python
def put_cloudwatch(
  log_group: str = None,
  log_stream: str = None
) -> None
```

###### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.putCloudwatch.parameter.logGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#log_group LambdaMicrovmImage#log_group}.

---

###### `log_stream`<sup>Optional</sup> <a name="log_stream" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.putCloudwatch.parameter.logStream"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/lambda_microvm_image#log_stream LambdaMicrovmImage#log_stream}.

---

##### `reset_cloudwatch` <a name="reset_cloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resetCloudwatch"></a>

```python
def reset_cloudwatch() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference">LambdaMicrovmImageLoggingCloudwatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.cloudwatchInput">cloudwatch_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch`<sup>Required</sup> <a name="cloudwatch" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.cloudwatch"></a>

```python
cloudwatch: LambdaMicrovmImageLoggingCloudwatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatchOutputReference">LambdaMicrovmImageLoggingCloudwatchOutputReference</a>

---

##### `cloudwatch_input`<sup>Optional</sup> <a name="cloudwatch_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.cloudwatchInput"></a>

```python
cloudwatch_input: IResolvable | LambdaMicrovmImageLoggingCloudwatch
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingCloudwatch">LambdaMicrovmImageLoggingCloudwatch</a>

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLoggingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaMicrovmImageLogging
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageLogging">LambdaMicrovmImageLogging</a>

---


### LambdaMicrovmImageResourcesList <a name="LambdaMicrovmImageResourcesList" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaMicrovmImageResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaMicrovmImageResources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>]

---


### LambdaMicrovmImageResourcesOutputReference <a name="LambdaMicrovmImageResourcesOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiBInput">minimum_memory_in_mi_b_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiB">minimum_memory_in_mi_b</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minimum_memory_in_mi_b_input`<sup>Optional</sup> <a name="minimum_memory_in_mi_b_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiBInput"></a>

```python
minimum_memory_in_mi_b_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_memory_in_mi_b`<sup>Required</sup> <a name="minimum_memory_in_mi_b" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.minimumMemoryInMiB"></a>

```python
minimum_memory_in_mi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaMicrovmImageResources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageResources">LambdaMicrovmImageResources</a>

---


### LambdaMicrovmImageTagsList <a name="LambdaMicrovmImageTagsList" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaMicrovmImageTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaMicrovmImageTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>]

---


### LambdaMicrovmImageTagsOutputReference <a name="LambdaMicrovmImageTagsOutputReference" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_microvm_image

lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaMicrovmImageTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaMicrovmImage.LambdaMicrovmImageTags">LambdaMicrovmImageTags</a>

---



