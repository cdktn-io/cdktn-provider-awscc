# `imagebuilderImageRecipe` Submodule <a name="`imagebuilderImageRecipe` Submodule" id="@cdktn/provider-awscc.imagebuilderImageRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderImageRecipe <a name="ImagebuilderImageRecipe" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe awscc_imagebuilder_image_recipe}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipe(
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
  parent_image: str,
  version: str,
  additional_instance_configuration: ImagebuilderImageRecipeAdditionalInstanceConfiguration = None,
  ami_tags: typing.Mapping[str] = None,
  ami_watermarks: typing.List[str] = None,
  block_device_mappings: IResolvable | typing.List[ImagebuilderImageRecipeBlockDeviceMappings] = None,
  components: IResolvable | typing.List[ImagebuilderImageRecipeComponents] = None,
  description: str = None,
  tags: typing.Mapping[str] = None,
  working_directory: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.parentImage">parent_image</a></code> | <code>str</code> | The parent image of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.version">version</a></code> | <code>str</code> | The version of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.additionalInstanceConfiguration">additional_instance_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a></code> | Specify additional settings and launch scripts for your build instances. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.amiTags">ami_tags</a></code> | <code>typing.Mapping[str]</code> | The tags to apply to the AMI created by this image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.amiWatermarks">ami_watermarks</a></code> | <code>typing.List[str]</code> | The AMI watermark names to attach to the output AMI from this recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.blockDeviceMappings">block_device_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>]</code> | The block device mappings to apply when creating images from this recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.components">components</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>]</code> | The components of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | The tags of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.workingDirectory">working_directory</a></code> | <code>str</code> | The working directory to be used during build and test workflows. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.name"></a>

- *Type:* str

The name of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}

---

##### `parent_image`<sup>Required</sup> <a name="parent_image" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.parentImage"></a>

- *Type:* str

The parent image of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#parent_image ImagebuilderImageRecipe#parent_image}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.version"></a>

- *Type:* str

The version of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#version ImagebuilderImageRecipe#version}

---

##### `additional_instance_configuration`<sup>Optional</sup> <a name="additional_instance_configuration" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.additionalInstanceConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a>

Specify additional settings and launch scripts for your build instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#additional_instance_configuration ImagebuilderImageRecipe#additional_instance_configuration}

---

##### `ami_tags`<sup>Optional</sup> <a name="ami_tags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.amiTags"></a>

- *Type:* typing.Mapping[str]

The tags to apply to the AMI created by this image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#ami_tags ImagebuilderImageRecipe#ami_tags}

---

##### `ami_watermarks`<sup>Optional</sup> <a name="ami_watermarks" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.amiWatermarks"></a>

- *Type:* typing.List[str]

The AMI watermark names to attach to the output AMI from this recipe.

AMI watermarks are lineage markers that automatically propagate to derivative AMIs when the source AMI is copied or distributed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#ami_watermarks ImagebuilderImageRecipe#ami_watermarks}

---

##### `block_device_mappings`<sup>Optional</sup> <a name="block_device_mappings" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.blockDeviceMappings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>]

The block device mappings to apply when creating images from this recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#block_device_mappings ImagebuilderImageRecipe#block_device_mappings}

---

##### `components`<sup>Optional</sup> <a name="components" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.components"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>]

The components of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#components ImagebuilderImageRecipe#components}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.description"></a>

- *Type:* str

The description of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#description ImagebuilderImageRecipe#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

The tags of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#tags ImagebuilderImageRecipe#tags}

---

##### `working_directory`<sup>Optional</sup> <a name="working_directory" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.Initializer.parameter.workingDirectory"></a>

- *Type:* str

The working directory to be used during build and test workflows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#working_directory ImagebuilderImageRecipe#working_directory}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putAdditionalInstanceConfiguration">put_additional_instance_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putBlockDeviceMappings">put_block_device_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putComponents">put_components</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAdditionalInstanceConfiguration">reset_additional_instance_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAmiTags">reset_ami_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAmiWatermarks">reset_ami_watermarks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetBlockDeviceMappings">reset_block_device_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetComponents">reset_components</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetWorkingDirectory">reset_working_directory</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_additional_instance_configuration` <a name="put_additional_instance_configuration" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putAdditionalInstanceConfiguration"></a>

```python
def put_additional_instance_configuration(
  systems_manager_agent: ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent = None,
  user_data_override: str = None
) -> None
```

###### `systems_manager_agent`<sup>Optional</sup> <a name="systems_manager_agent" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putAdditionalInstanceConfiguration.parameter.systemsManagerAgent"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a>

Contains settings for the SSM agent on your build instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#systems_manager_agent ImagebuilderImageRecipe#systems_manager_agent}

---

###### `user_data_override`<sup>Optional</sup> <a name="user_data_override" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putAdditionalInstanceConfiguration.parameter.userDataOverride"></a>

- *Type:* str

Use this property to provide commands or a command script to run when you launch your build instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#user_data_override ImagebuilderImageRecipe#user_data_override}

---

##### `put_block_device_mappings` <a name="put_block_device_mappings" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putBlockDeviceMappings"></a>

```python
def put_block_device_mappings(
  value: IResolvable | typing.List[ImagebuilderImageRecipeBlockDeviceMappings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putBlockDeviceMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>]

---

##### `put_components` <a name="put_components" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putComponents"></a>

```python
def put_components(
  value: IResolvable | typing.List[ImagebuilderImageRecipeComponents]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.putComponents.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>]

---

##### `reset_additional_instance_configuration` <a name="reset_additional_instance_configuration" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAdditionalInstanceConfiguration"></a>

```python
def reset_additional_instance_configuration() -> None
```

##### `reset_ami_tags` <a name="reset_ami_tags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAmiTags"></a>

```python
def reset_ami_tags() -> None
```

##### `reset_ami_watermarks` <a name="reset_ami_watermarks" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetAmiWatermarks"></a>

```python
def reset_ami_watermarks() -> None
```

##### `reset_block_device_mappings` <a name="reset_block_device_mappings" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetBlockDeviceMappings"></a>

```python
def reset_block_device_mappings() -> None
```

##### `reset_components` <a name="reset_components" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetComponents"></a>

```python
def reset_components() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_working_directory` <a name="reset_working_directory" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.resetWorkingDirectory"></a>

```python
def reset_working_directory() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ImagebuilderImageRecipe resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isConstruct"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipe.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformElement"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipe.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformResource"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipe.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipe.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ImagebuilderImageRecipe resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ImagebuilderImageRecipe to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ImagebuilderImageRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderImageRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.additionalInstanceConfiguration">additional_instance_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference">ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMappings">block_device_mappings</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList">ImagebuilderImageRecipeBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.components">components</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList">ImagebuilderImageRecipeComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.latestVersion">latest_version</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference">ImagebuilderImageRecipeLatestVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.additionalInstanceConfigurationInput">additional_instance_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiTagsInput">ami_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiWatermarksInput">ami_watermarks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMappingsInput">block_device_mappings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.componentsInput">components_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImageInput">parent_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectoryInput">working_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiTags">ami_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiWatermarks">ami_watermarks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImage">parent_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectory">working_directory</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `additional_instance_configuration`<sup>Required</sup> <a name="additional_instance_configuration" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.additionalInstanceConfiguration"></a>

```python
additional_instance_configuration: ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference">ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `block_device_mappings`<sup>Required</sup> <a name="block_device_mappings" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMappings"></a>

```python
block_device_mappings: ImagebuilderImageRecipeBlockDeviceMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList">ImagebuilderImageRecipeBlockDeviceMappingsList</a>

---

##### `components`<sup>Required</sup> <a name="components" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.components"></a>

```python
components: ImagebuilderImageRecipeComponentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList">ImagebuilderImageRecipeComponentsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `latest_version`<sup>Required</sup> <a name="latest_version" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.latestVersion"></a>

```python
latest_version: ImagebuilderImageRecipeLatestVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference">ImagebuilderImageRecipeLatestVersionOutputReference</a>

---

##### `additional_instance_configuration_input`<sup>Optional</sup> <a name="additional_instance_configuration_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.additionalInstanceConfigurationInput"></a>

```python
additional_instance_configuration_input: IResolvable | ImagebuilderImageRecipeAdditionalInstanceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a>

---

##### `ami_tags_input`<sup>Optional</sup> <a name="ami_tags_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiTagsInput"></a>

```python
ami_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ami_watermarks_input`<sup>Optional</sup> <a name="ami_watermarks_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiWatermarksInput"></a>

```python
ami_watermarks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `block_device_mappings_input`<sup>Optional</sup> <a name="block_device_mappings_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.blockDeviceMappingsInput"></a>

```python
block_device_mappings_input: IResolvable | typing.List[ImagebuilderImageRecipeBlockDeviceMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>]

---

##### `components_input`<sup>Optional</sup> <a name="components_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.componentsInput"></a>

```python
components_input: IResolvable | typing.List[ImagebuilderImageRecipeComponents]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_image_input`<sup>Optional</sup> <a name="parent_image_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImageInput"></a>

```python
parent_image_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `working_directory_input`<sup>Optional</sup> <a name="working_directory_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectoryInput"></a>

```python
working_directory_input: str
```

- *Type:* str

---

##### `ami_tags`<sup>Required</sup> <a name="ami_tags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiTags"></a>

```python
ami_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ami_watermarks`<sup>Required</sup> <a name="ami_watermarks" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.amiWatermarks"></a>

```python
ami_watermarks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_image`<sup>Required</sup> <a name="parent_image" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.parentImage"></a>

```python
parent_image: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `working_directory`<sup>Required</sup> <a name="working_directory" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipe.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderImageRecipeAdditionalInstanceConfiguration <a name="ImagebuilderImageRecipeAdditionalInstanceConfiguration" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration(
  systems_manager_agent: ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent = None,
  user_data_override: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration.property.systemsManagerAgent">systems_manager_agent</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a></code> | Contains settings for the SSM agent on your build instance. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration.property.userDataOverride">user_data_override</a></code> | <code>str</code> | Use this property to provide commands or a command script to run when you launch your build instance. |

---

##### `systems_manager_agent`<sup>Optional</sup> <a name="systems_manager_agent" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration.property.systemsManagerAgent"></a>

```python
systems_manager_agent: ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a>

Contains settings for the SSM agent on your build instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#systems_manager_agent ImagebuilderImageRecipe#systems_manager_agent}

---

##### `user_data_override`<sup>Optional</sup> <a name="user_data_override" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration.property.userDataOverride"></a>

```python
user_data_override: str
```

- *Type:* str

Use this property to provide commands or a command script to run when you launch your build instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#user_data_override ImagebuilderImageRecipe#user_data_override}

---

### ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent <a name="ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent(
  uninstall_after_build: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent.property.uninstallAfterBuild">uninstall_after_build</a></code> | <code>bool \| cdktn.IResolvable</code> | Controls whether the SSM agent is removed from your final build image, prior to creating the new AMI. |

---

##### `uninstall_after_build`<sup>Optional</sup> <a name="uninstall_after_build" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent.property.uninstallAfterBuild"></a>

```python
uninstall_after_build: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Controls whether the SSM agent is removed from your final build image, prior to creating the new AMI.

If this is set to true, then the agent is removed from the final image. If it's set to false, then the agent is left in, so that it is included in the new AMI. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#uninstall_after_build ImagebuilderImageRecipe#uninstall_after_build}

---

### ImagebuilderImageRecipeBlockDeviceMappings <a name="ImagebuilderImageRecipeBlockDeviceMappings" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings(
  device_name: str = None,
  ebs: ImagebuilderImageRecipeBlockDeviceMappingsEbs = None,
  no_device: str = None,
  virtual_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.deviceName">device_name</a></code> | <code>str</code> | The device to which these mappings apply. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a></code> | Use to manage Amazon EBS-specific configuration for this mapping. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.noDevice">no_device</a></code> | <code>str</code> | Use to remove a mapping from the parent image. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.virtualName">virtual_name</a></code> | <code>str</code> | Use to manage instance ephemeral devices. |

---

##### `device_name`<sup>Optional</sup> <a name="device_name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

The device to which these mappings apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#device_name ImagebuilderImageRecipe#device_name}

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.ebs"></a>

```python
ebs: ImagebuilderImageRecipeBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a>

Use to manage Amazon EBS-specific configuration for this mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#ebs ImagebuilderImageRecipe#ebs}

---

##### `no_device`<sup>Optional</sup> <a name="no_device" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.noDevice"></a>

```python
no_device: str
```

- *Type:* str

Use to remove a mapping from the parent image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#no_device ImagebuilderImageRecipe#no_device}

---

##### `virtual_name`<sup>Optional</sup> <a name="virtual_name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

Use to manage instance ephemeral devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#virtual_name ImagebuilderImageRecipe#virtual_name}

---

### ImagebuilderImageRecipeBlockDeviceMappingsEbs <a name="ImagebuilderImageRecipeBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs(
  delete_on_termination: bool | IResolvable = None,
  encrypted: bool | IResolvable = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  snapshot_id: str = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.deleteOnTermination">delete_on_termination</a></code> | <code>bool \| cdktn.IResolvable</code> | Use to configure delete on termination of the associated device. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.encrypted">encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | Use to configure device encryption. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Use to configure device IOPS. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Use to configure the KMS key to use when encrypting the device. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.snapshotId">snapshot_id</a></code> | <code>str</code> | The snapshot that defines the device contents. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | For GP3 volumes only - The throughput in MiB/s that the volume supports. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Use to override the device's volume size. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.volumeType">volume_type</a></code> | <code>str</code> | Use to override the device's volume type. |

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```python
delete_on_termination: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Use to configure delete on termination of the associated device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#delete_on_termination ImagebuilderImageRecipe#delete_on_termination}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.encrypted"></a>

```python
encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Use to configure device encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#encrypted ImagebuilderImageRecipe#encrypted}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Use to configure device IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#iops ImagebuilderImageRecipe#iops}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Use to configure the KMS key to use when encrypting the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#kms_key_id ImagebuilderImageRecipe#kms_key_id}

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

The snapshot that defines the device contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#snapshot_id ImagebuilderImageRecipe#snapshot_id}

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

For GP3 volumes only - The throughput in MiB/s that the volume supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#throughput ImagebuilderImageRecipe#throughput}

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Use to override the device's volume size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#volume_size ImagebuilderImageRecipe#volume_size}

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Use to override the device's volume type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#volume_type ImagebuilderImageRecipe#volume_type}

---

### ImagebuilderImageRecipeComponents <a name="ImagebuilderImageRecipeComponents" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeComponents(
  component_arn: str = None,
  parameters: IResolvable | typing.List[ImagebuilderImageRecipeComponentsParameters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents.property.componentArn">component_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>]</code> | A group of parameter settings that are used to configure the component for a specific recipe. |

---

##### `component_arn`<sup>Optional</sup> <a name="component_arn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents.property.componentArn"></a>

```python
component_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#component_arn ImagebuilderImageRecipe#component_arn}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents.property.parameters"></a>

```python
parameters: IResolvable | typing.List[ImagebuilderImageRecipeComponentsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>]

A group of parameter settings that are used to configure the component for a specific recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#parameters ImagebuilderImageRecipe#parameters}

---

### ImagebuilderImageRecipeComponentsParameters <a name="ImagebuilderImageRecipeComponentsParameters" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters(
  name: str = None,
  value: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters.property.name">name</a></code> | <code>str</code> | The name of the component parameter to set. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters.property.value">value</a></code> | <code>typing.List[str]</code> | Sets the value for the named component parameter. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the component parameter to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

Sets the value for the named component parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#value ImagebuilderImageRecipe#value}

---

### ImagebuilderImageRecipeConfig <a name="ImagebuilderImageRecipeConfig" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  parent_image: str,
  version: str,
  additional_instance_configuration: ImagebuilderImageRecipeAdditionalInstanceConfiguration = None,
  ami_tags: typing.Mapping[str] = None,
  ami_watermarks: typing.List[str] = None,
  block_device_mappings: IResolvable | typing.List[ImagebuilderImageRecipeBlockDeviceMappings] = None,
  components: IResolvable | typing.List[ImagebuilderImageRecipeComponents] = None,
  description: str = None,
  tags: typing.Mapping[str] = None,
  working_directory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.name">name</a></code> | <code>str</code> | The name of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.parentImage">parent_image</a></code> | <code>str</code> | The parent image of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.version">version</a></code> | <code>str</code> | The version of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.additionalInstanceConfiguration">additional_instance_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a></code> | Specify additional settings and launch scripts for your build instances. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.amiTags">ami_tags</a></code> | <code>typing.Mapping[str]</code> | The tags to apply to the AMI created by this image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.amiWatermarks">ami_watermarks</a></code> | <code>typing.List[str]</code> | The AMI watermark names to attach to the output AMI from this recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.blockDeviceMappings">block_device_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>]</code> | The block device mappings to apply when creating images from this recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.components">components</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>]</code> | The components of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.description">description</a></code> | <code>str</code> | The description of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | The tags of the image recipe. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.workingDirectory">working_directory</a></code> | <code>str</code> | The working directory to be used during build and test workflows. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}

---

##### `parent_image`<sup>Required</sup> <a name="parent_image" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.parentImage"></a>

```python
parent_image: str
```

- *Type:* str

The parent image of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#parent_image ImagebuilderImageRecipe#parent_image}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.version"></a>

```python
version: str
```

- *Type:* str

The version of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#version ImagebuilderImageRecipe#version}

---

##### `additional_instance_configuration`<sup>Optional</sup> <a name="additional_instance_configuration" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.additionalInstanceConfiguration"></a>

```python
additional_instance_configuration: ImagebuilderImageRecipeAdditionalInstanceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a>

Specify additional settings and launch scripts for your build instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#additional_instance_configuration ImagebuilderImageRecipe#additional_instance_configuration}

---

##### `ami_tags`<sup>Optional</sup> <a name="ami_tags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.amiTags"></a>

```python
ami_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The tags to apply to the AMI created by this image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#ami_tags ImagebuilderImageRecipe#ami_tags}

---

##### `ami_watermarks`<sup>Optional</sup> <a name="ami_watermarks" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.amiWatermarks"></a>

```python
ami_watermarks: typing.List[str]
```

- *Type:* typing.List[str]

The AMI watermark names to attach to the output AMI from this recipe.

AMI watermarks are lineage markers that automatically propagate to derivative AMIs when the source AMI is copied or distributed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#ami_watermarks ImagebuilderImageRecipe#ami_watermarks}

---

##### `block_device_mappings`<sup>Optional</sup> <a name="block_device_mappings" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.blockDeviceMappings"></a>

```python
block_device_mappings: IResolvable | typing.List[ImagebuilderImageRecipeBlockDeviceMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>]

The block device mappings to apply when creating images from this recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#block_device_mappings ImagebuilderImageRecipe#block_device_mappings}

---

##### `components`<sup>Optional</sup> <a name="components" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.components"></a>

```python
components: IResolvable | typing.List[ImagebuilderImageRecipeComponents]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>]

The components of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#components ImagebuilderImageRecipe#components}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#description ImagebuilderImageRecipe#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The tags of the image recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#tags ImagebuilderImageRecipe#tags}

---

##### `working_directory`<sup>Optional</sup> <a name="working_directory" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeConfig.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

The working directory to be used during build and test workflows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#working_directory ImagebuilderImageRecipe#working_directory}

---

### ImagebuilderImageRecipeLatestVersion <a name="ImagebuilderImageRecipeLatestVersion" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersion.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersion()
```


## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference <a name="ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.putSystemsManagerAgent">put_systems_manager_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resetSystemsManagerAgent">reset_systems_manager_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resetUserDataOverride">reset_user_data_override</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_systems_manager_agent` <a name="put_systems_manager_agent" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.putSystemsManagerAgent"></a>

```python
def put_systems_manager_agent(
  uninstall_after_build: bool | IResolvable = None
) -> None
```

###### `uninstall_after_build`<sup>Optional</sup> <a name="uninstall_after_build" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.putSystemsManagerAgent.parameter.uninstallAfterBuild"></a>

- *Type:* bool | cdktn.IResolvable

Controls whether the SSM agent is removed from your final build image, prior to creating the new AMI.

If this is set to true, then the agent is removed from the final image. If it's set to false, then the agent is left in, so that it is included in the new AMI. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#uninstall_after_build ImagebuilderImageRecipe#uninstall_after_build}

---

##### `reset_systems_manager_agent` <a name="reset_systems_manager_agent" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resetSystemsManagerAgent"></a>

```python
def reset_systems_manager_agent() -> None
```

##### `reset_user_data_override` <a name="reset_user_data_override" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.resetUserDataOverride"></a>

```python
def reset_user_data_override() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.systemsManagerAgent">systems_manager_agent</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.systemsManagerAgentInput">systems_manager_agent_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.userDataOverrideInput">user_data_override_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.userDataOverride">user_data_override</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `systems_manager_agent`<sup>Required</sup> <a name="systems_manager_agent" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.systemsManagerAgent"></a>

```python
systems_manager_agent: ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference</a>

---

##### `systems_manager_agent_input`<sup>Optional</sup> <a name="systems_manager_agent_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.systemsManagerAgentInput"></a>

```python
systems_manager_agent_input: IResolvable | ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a>

---

##### `user_data_override_input`<sup>Optional</sup> <a name="user_data_override_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.userDataOverrideInput"></a>

```python
user_data_override_input: str
```

- *Type:* str

---

##### `user_data_override`<sup>Required</sup> <a name="user_data_override" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.userDataOverride"></a>

```python
user_data_override: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderImageRecipeAdditionalInstanceConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfiguration">ImagebuilderImageRecipeAdditionalInstanceConfiguration</a>

---


### ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference <a name="ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resetUninstallAfterBuild">reset_uninstall_after_build</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_uninstall_after_build` <a name="reset_uninstall_after_build" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.resetUninstallAfterBuild"></a>

```python
def reset_uninstall_after_build() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.uninstallAfterBuildInput">uninstall_after_build_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.uninstallAfterBuild">uninstall_after_build</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uninstall_after_build_input`<sup>Optional</sup> <a name="uninstall_after_build_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.uninstallAfterBuildInput"></a>

```python
uninstall_after_build_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `uninstall_after_build`<sup>Required</sup> <a name="uninstall_after_build" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.uninstallAfterBuild"></a>

```python
uninstall_after_build: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent">ImagebuilderImageRecipeAdditionalInstanceConfigurationSystemsManagerAgent</a>

---


### ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference <a name="ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```python
encrypted_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```python
encrypted: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderImageRecipeBlockDeviceMappingsEbs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a>

---


### ImagebuilderImageRecipeBlockDeviceMappingsList <a name="ImagebuilderImageRecipeBlockDeviceMappingsList" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ImagebuilderImageRecipeBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ImagebuilderImageRecipeBlockDeviceMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>]

---


### ImagebuilderImageRecipeBlockDeviceMappingsOutputReference <a name="ImagebuilderImageRecipeBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.putEbs">put_ebs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetDeviceName">reset_device_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetEbs">reset_ebs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetNoDevice">reset_no_device</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetVirtualName">reset_virtual_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ebs` <a name="put_ebs" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.putEbs"></a>

```python
def put_ebs(
  delete_on_termination: bool | IResolvable = None,
  encrypted: bool | IResolvable = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  snapshot_id: str = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
) -> None
```

###### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.putEbs.parameter.deleteOnTermination"></a>

- *Type:* bool | cdktn.IResolvable

Use to configure delete on termination of the associated device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#delete_on_termination ImagebuilderImageRecipe#delete_on_termination}

---

###### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.putEbs.parameter.encrypted"></a>

- *Type:* bool | cdktn.IResolvable

Use to configure device encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#encrypted ImagebuilderImageRecipe#encrypted}

---

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.putEbs.parameter.iops"></a>

- *Type:* typing.Union[int, float]

Use to configure device IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#iops ImagebuilderImageRecipe#iops}

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.putEbs.parameter.kmsKeyId"></a>

- *Type:* str

Use to configure the KMS key to use when encrypting the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#kms_key_id ImagebuilderImageRecipe#kms_key_id}

---

###### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.putEbs.parameter.snapshotId"></a>

- *Type:* str

The snapshot that defines the device contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#snapshot_id ImagebuilderImageRecipe#snapshot_id}

---

###### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.putEbs.parameter.throughput"></a>

- *Type:* typing.Union[int, float]

For GP3 volumes only - The throughput in MiB/s that the volume supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#throughput ImagebuilderImageRecipe#throughput}

---

###### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.putEbs.parameter.volumeSize"></a>

- *Type:* typing.Union[int, float]

Use to override the device's volume size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#volume_size ImagebuilderImageRecipe#volume_size}

---

###### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.putEbs.parameter.volumeType"></a>

- *Type:* str

Use to override the device's volume type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_image_recipe#volume_type ImagebuilderImageRecipe#volume_type}

---

##### `reset_device_name` <a name="reset_device_name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```python
def reset_device_name() -> None
```

##### `reset_ebs` <a name="reset_ebs" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetEbs"></a>

```python
def reset_ebs() -> None
```

##### `reset_no_device` <a name="reset_no_device" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```python
def reset_no_device() -> None
```

##### `reset_virtual_name` <a name="reset_virtual_name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```python
def reset_virtual_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference">ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.ebsInput">ebs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.noDeviceInput">no_device_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.virtualNameInput">virtual_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.noDevice">no_device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.virtualName">virtual_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.ebs"></a>

```python
ebs: ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference">ImagebuilderImageRecipeBlockDeviceMappingsEbsOutputReference</a>

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `ebs_input`<sup>Optional</sup> <a name="ebs_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```python
ebs_input: IResolvable | ImagebuilderImageRecipeBlockDeviceMappingsEbs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsEbs">ImagebuilderImageRecipeBlockDeviceMappingsEbs</a>

---

##### `no_device_input`<sup>Optional</sup> <a name="no_device_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```python
no_device_input: str
```

- *Type:* str

---

##### `virtual_name_input`<sup>Optional</sup> <a name="virtual_name_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```python
virtual_name_input: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `no_device`<sup>Required</sup> <a name="no_device" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.noDevice"></a>

```python
no_device: str
```

- *Type:* str

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderImageRecipeBlockDeviceMappings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeBlockDeviceMappings">ImagebuilderImageRecipeBlockDeviceMappings</a>

---


### ImagebuilderImageRecipeComponentsList <a name="ImagebuilderImageRecipeComponentsList" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ImagebuilderImageRecipeComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ImagebuilderImageRecipeComponents]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>]

---


### ImagebuilderImageRecipeComponentsOutputReference <a name="ImagebuilderImageRecipeComponentsOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resetComponentArn">reset_component_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.List[ImagebuilderImageRecipeComponentsParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>]

---

##### `reset_component_arn` <a name="reset_component_arn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resetComponentArn"></a>

```python
def reset_component_arn() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList">ImagebuilderImageRecipeComponentsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.componentArnInput">component_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.componentArn">component_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.parameters"></a>

```python
parameters: ImagebuilderImageRecipeComponentsParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList">ImagebuilderImageRecipeComponentsParametersList</a>

---

##### `component_arn_input`<sup>Optional</sup> <a name="component_arn_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.componentArnInput"></a>

```python
component_arn_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.List[ImagebuilderImageRecipeComponentsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>]

---

##### `component_arn`<sup>Required</sup> <a name="component_arn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.componentArn"></a>

```python
component_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderImageRecipeComponents
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponents">ImagebuilderImageRecipeComponents</a>

---


### ImagebuilderImageRecipeComponentsParametersList <a name="ImagebuilderImageRecipeComponentsParametersList" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ImagebuilderImageRecipeComponentsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ImagebuilderImageRecipeComponentsParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>]

---


### ImagebuilderImageRecipeComponentsParametersOutputReference <a name="ImagebuilderImageRecipeComponentsParametersOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.valueInput">value_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.value">value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.valueInput"></a>

```python
value_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ImagebuilderImageRecipeComponentsParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeComponentsParameters">ImagebuilderImageRecipeComponentsParameters</a>

---


### ImagebuilderImageRecipeLatestVersionOutputReference <a name="ImagebuilderImageRecipeLatestVersionOutputReference" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import imagebuilder_image_recipe

imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.major">major</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.minor">minor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.patch">patch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersion">ImagebuilderImageRecipeLatestVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `major`<sup>Required</sup> <a name="major" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.major"></a>

```python
major: str
```

- *Type:* str

---

##### `minor`<sup>Required</sup> <a name="minor" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.minor"></a>

```python
minor: str
```

- *Type:* str

---

##### `patch`<sup>Required</sup> <a name="patch" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.patch"></a>

```python
patch: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersionOutputReference.property.internalValue"></a>

```python
internal_value: ImagebuilderImageRecipeLatestVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderImageRecipe.ImagebuilderImageRecipeLatestVersion">ImagebuilderImageRecipeLatestVersion</a>

---



