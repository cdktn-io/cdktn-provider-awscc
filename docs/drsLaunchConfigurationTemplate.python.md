# `drsLaunchConfigurationTemplate` Submodule <a name="`drsLaunchConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DrsLaunchConfigurationTemplate <a name="DrsLaunchConfigurationTemplate" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template awscc_drs_launch_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import drs_launch_configuration_template

drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  copy_private_ip: bool | IResolvable = None,
  copy_tags: bool | IResolvable = None,
  export_bucket_arn: str = None,
  launch_disposition: str = None,
  launch_into_source_instance: bool | IResolvable = None,
  licensing: DrsLaunchConfigurationTemplateLicensing = None,
  post_launch_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[DrsLaunchConfigurationTemplateTags] = None,
  target_instance_type_right_sizing_method: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.copyPrivateIp">copy_private_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | Copy private IP. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.copyTags">copy_tags</a></code> | <code>bool \| cdktn.IResolvable</code> | Copy tags. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.exportBucketArn">export_bucket_arn</a></code> | <code>str</code> | S3 bucket ARN to export Source Network templates. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.launchDisposition">launch_disposition</a></code> | <code>str</code> | Launch disposition. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.launchIntoSourceInstance">launch_into_source_instance</a></code> | <code>bool \| cdktn.IResolvable</code> | DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.licensing">licensing</a></code> | <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a></code> | Configuration of a machine's license. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.postLaunchEnabled">post_launch_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether we want to activate post-launch actions. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>]</code> | A set of tags associated with the Launch Configuration Template. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.targetInstanceTypeRightSizingMethod">target_instance_type_right_sizing_method</a></code> | <code>str</code> | Target instance type right-sizing method. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `copy_private_ip`<sup>Optional</sup> <a name="copy_private_ip" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.copyPrivateIp"></a>

- *Type:* bool | cdktn.IResolvable

Copy private IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#copy_private_ip DrsLaunchConfigurationTemplate#copy_private_ip}

---

##### `copy_tags`<sup>Optional</sup> <a name="copy_tags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.copyTags"></a>

- *Type:* bool | cdktn.IResolvable

Copy tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#copy_tags DrsLaunchConfigurationTemplate#copy_tags}

---

##### `export_bucket_arn`<sup>Optional</sup> <a name="export_bucket_arn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.exportBucketArn"></a>

- *Type:* str

S3 bucket ARN to export Source Network templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#export_bucket_arn DrsLaunchConfigurationTemplate#export_bucket_arn}

---

##### `launch_disposition`<sup>Optional</sup> <a name="launch_disposition" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.launchDisposition"></a>

- *Type:* str

Launch disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#launch_disposition DrsLaunchConfigurationTemplate#launch_disposition}

---

##### `launch_into_source_instance`<sup>Optional</sup> <a name="launch_into_source_instance" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.launchIntoSourceInstance"></a>

- *Type:* bool | cdktn.IResolvable

DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#launch_into_source_instance DrsLaunchConfigurationTemplate#launch_into_source_instance}

---

##### `licensing`<sup>Optional</sup> <a name="licensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.licensing"></a>

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a>

Configuration of a machine's license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#licensing DrsLaunchConfigurationTemplate#licensing}

---

##### `post_launch_enabled`<sup>Optional</sup> <a name="post_launch_enabled" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.postLaunchEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether we want to activate post-launch actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#post_launch_enabled DrsLaunchConfigurationTemplate#post_launch_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>]

A set of tags associated with the Launch Configuration Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#tags DrsLaunchConfigurationTemplate#tags}

---

##### `target_instance_type_right_sizing_method`<sup>Optional</sup> <a name="target_instance_type_right_sizing_method" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.targetInstanceTypeRightSizingMethod"></a>

- *Type:* str

Target instance type right-sizing method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#target_instance_type_right_sizing_method DrsLaunchConfigurationTemplate#target_instance_type_right_sizing_method}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putLicensing">put_licensing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetCopyPrivateIp">reset_copy_private_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetCopyTags">reset_copy_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetExportBucketArn">reset_export_bucket_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLaunchDisposition">reset_launch_disposition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLaunchIntoSourceInstance">reset_launch_into_source_instance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLicensing">reset_licensing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetPostLaunchEnabled">reset_post_launch_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetTargetInstanceTypeRightSizingMethod">reset_target_instance_type_right_sizing_method</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_licensing` <a name="put_licensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putLicensing"></a>

```python
def put_licensing(
  os_byol: bool | IResolvable = None
) -> None
```

###### `os_byol`<sup>Optional</sup> <a name="os_byol" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putLicensing.parameter.osByol"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable Bring your own license or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#os_byol DrsLaunchConfigurationTemplate#os_byol}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DrsLaunchConfigurationTemplateTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>]

---

##### `reset_copy_private_ip` <a name="reset_copy_private_ip" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetCopyPrivateIp"></a>

```python
def reset_copy_private_ip() -> None
```

##### `reset_copy_tags` <a name="reset_copy_tags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetCopyTags"></a>

```python
def reset_copy_tags() -> None
```

##### `reset_export_bucket_arn` <a name="reset_export_bucket_arn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetExportBucketArn"></a>

```python
def reset_export_bucket_arn() -> None
```

##### `reset_launch_disposition` <a name="reset_launch_disposition" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLaunchDisposition"></a>

```python
def reset_launch_disposition() -> None
```

##### `reset_launch_into_source_instance` <a name="reset_launch_into_source_instance" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLaunchIntoSourceInstance"></a>

```python
def reset_launch_into_source_instance() -> None
```

##### `reset_licensing` <a name="reset_licensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLicensing"></a>

```python
def reset_licensing() -> None
```

##### `reset_post_launch_enabled` <a name="reset_post_launch_enabled" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetPostLaunchEnabled"></a>

```python
def reset_post_launch_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_target_instance_type_right_sizing_method` <a name="reset_target_instance_type_right_sizing_method" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetTargetInstanceTypeRightSizingMethod"></a>

```python
def reset_target_instance_type_right_sizing_method() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DrsLaunchConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import drs_launch_configuration_template

drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import drs_launch_configuration_template

drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformResource"></a>

```python
from cdktn_provider_awscc import drs_launch_configuration_template

drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import drs_launch_configuration_template

drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DrsLaunchConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DrsLaunchConfigurationTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DrsLaunchConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DrsLaunchConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchConfigurationTemplateId">launch_configuration_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.licensing">licensing</a></code> | <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference">DrsLaunchConfigurationTemplateLicensingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList">DrsLaunchConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyPrivateIpInput">copy_private_ip_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyTagsInput">copy_tags_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.exportBucketArnInput">export_bucket_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchDispositionInput">launch_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchIntoSourceInstanceInput">launch_into_source_instance_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.licensingInput">licensing_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.postLaunchEnabledInput">post_launch_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethodInput">target_instance_type_right_sizing_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyPrivateIp">copy_private_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyTags">copy_tags</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.exportBucketArn">export_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchDisposition">launch_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchIntoSourceInstance">launch_into_source_instance</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.postLaunchEnabled">post_launch_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethod">target_instance_type_right_sizing_method</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `launch_configuration_template_id`<sup>Required</sup> <a name="launch_configuration_template_id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchConfigurationTemplateId"></a>

```python
launch_configuration_template_id: str
```

- *Type:* str

---

##### `licensing`<sup>Required</sup> <a name="licensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.licensing"></a>

```python
licensing: DrsLaunchConfigurationTemplateLicensingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference">DrsLaunchConfigurationTemplateLicensingOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tags"></a>

```python
tags: DrsLaunchConfigurationTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList">DrsLaunchConfigurationTemplateTagsList</a>

---

##### `copy_private_ip_input`<sup>Optional</sup> <a name="copy_private_ip_input" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyPrivateIpInput"></a>

```python
copy_private_ip_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `copy_tags_input`<sup>Optional</sup> <a name="copy_tags_input" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyTagsInput"></a>

```python
copy_tags_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `export_bucket_arn_input`<sup>Optional</sup> <a name="export_bucket_arn_input" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.exportBucketArnInput"></a>

```python
export_bucket_arn_input: str
```

- *Type:* str

---

##### `launch_disposition_input`<sup>Optional</sup> <a name="launch_disposition_input" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchDispositionInput"></a>

```python
launch_disposition_input: str
```

- *Type:* str

---

##### `launch_into_source_instance_input`<sup>Optional</sup> <a name="launch_into_source_instance_input" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchIntoSourceInstanceInput"></a>

```python
launch_into_source_instance_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `licensing_input`<sup>Optional</sup> <a name="licensing_input" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.licensingInput"></a>

```python
licensing_input: IResolvable | DrsLaunchConfigurationTemplateLicensing
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a>

---

##### `post_launch_enabled_input`<sup>Optional</sup> <a name="post_launch_enabled_input" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.postLaunchEnabledInput"></a>

```python
post_launch_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DrsLaunchConfigurationTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>]

---

##### `target_instance_type_right_sizing_method_input`<sup>Optional</sup> <a name="target_instance_type_right_sizing_method_input" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethodInput"></a>

```python
target_instance_type_right_sizing_method_input: str
```

- *Type:* str

---

##### `copy_private_ip`<sup>Required</sup> <a name="copy_private_ip" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyPrivateIp"></a>

```python
copy_private_ip: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `copy_tags`<sup>Required</sup> <a name="copy_tags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyTags"></a>

```python
copy_tags: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `export_bucket_arn`<sup>Required</sup> <a name="export_bucket_arn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.exportBucketArn"></a>

```python
export_bucket_arn: str
```

- *Type:* str

---

##### `launch_disposition`<sup>Required</sup> <a name="launch_disposition" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchDisposition"></a>

```python
launch_disposition: str
```

- *Type:* str

---

##### `launch_into_source_instance`<sup>Required</sup> <a name="launch_into_source_instance" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchIntoSourceInstance"></a>

```python
launch_into_source_instance: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `post_launch_enabled`<sup>Required</sup> <a name="post_launch_enabled" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.postLaunchEnabled"></a>

```python
post_launch_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `target_instance_type_right_sizing_method`<sup>Required</sup> <a name="target_instance_type_right_sizing_method" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethod"></a>

```python
target_instance_type_right_sizing_method: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DrsLaunchConfigurationTemplateConfig <a name="DrsLaunchConfigurationTemplateConfig" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import drs_launch_configuration_template

drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  copy_private_ip: bool | IResolvable = None,
  copy_tags: bool | IResolvable = None,
  export_bucket_arn: str = None,
  launch_disposition: str = None,
  launch_into_source_instance: bool | IResolvable = None,
  licensing: DrsLaunchConfigurationTemplateLicensing = None,
  post_launch_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[DrsLaunchConfigurationTemplateTags] = None,
  target_instance_type_right_sizing_method: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.copyPrivateIp">copy_private_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | Copy private IP. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.copyTags">copy_tags</a></code> | <code>bool \| cdktn.IResolvable</code> | Copy tags. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.exportBucketArn">export_bucket_arn</a></code> | <code>str</code> | S3 bucket ARN to export Source Network templates. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.launchDisposition">launch_disposition</a></code> | <code>str</code> | Launch disposition. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.launchIntoSourceInstance">launch_into_source_instance</a></code> | <code>bool \| cdktn.IResolvable</code> | DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.licensing">licensing</a></code> | <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a></code> | Configuration of a machine's license. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.postLaunchEnabled">post_launch_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether we want to activate post-launch actions. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>]</code> | A set of tags associated with the Launch Configuration Template. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.targetInstanceTypeRightSizingMethod">target_instance_type_right_sizing_method</a></code> | <code>str</code> | Target instance type right-sizing method. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `copy_private_ip`<sup>Optional</sup> <a name="copy_private_ip" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.copyPrivateIp"></a>

```python
copy_private_ip: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Copy private IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#copy_private_ip DrsLaunchConfigurationTemplate#copy_private_ip}

---

##### `copy_tags`<sup>Optional</sup> <a name="copy_tags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.copyTags"></a>

```python
copy_tags: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Copy tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#copy_tags DrsLaunchConfigurationTemplate#copy_tags}

---

##### `export_bucket_arn`<sup>Optional</sup> <a name="export_bucket_arn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.exportBucketArn"></a>

```python
export_bucket_arn: str
```

- *Type:* str

S3 bucket ARN to export Source Network templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#export_bucket_arn DrsLaunchConfigurationTemplate#export_bucket_arn}

---

##### `launch_disposition`<sup>Optional</sup> <a name="launch_disposition" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.launchDisposition"></a>

```python
launch_disposition: str
```

- *Type:* str

Launch disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#launch_disposition DrsLaunchConfigurationTemplate#launch_disposition}

---

##### `launch_into_source_instance`<sup>Optional</sup> <a name="launch_into_source_instance" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.launchIntoSourceInstance"></a>

```python
launch_into_source_instance: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#launch_into_source_instance DrsLaunchConfigurationTemplate#launch_into_source_instance}

---

##### `licensing`<sup>Optional</sup> <a name="licensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.licensing"></a>

```python
licensing: DrsLaunchConfigurationTemplateLicensing
```

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a>

Configuration of a machine's license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#licensing DrsLaunchConfigurationTemplate#licensing}

---

##### `post_launch_enabled`<sup>Optional</sup> <a name="post_launch_enabled" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.postLaunchEnabled"></a>

```python
post_launch_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether we want to activate post-launch actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#post_launch_enabled DrsLaunchConfigurationTemplate#post_launch_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DrsLaunchConfigurationTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>]

A set of tags associated with the Launch Configuration Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#tags DrsLaunchConfigurationTemplate#tags}

---

##### `target_instance_type_right_sizing_method`<sup>Optional</sup> <a name="target_instance_type_right_sizing_method" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.targetInstanceTypeRightSizingMethod"></a>

```python
target_instance_type_right_sizing_method: str
```

- *Type:* str

Target instance type right-sizing method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#target_instance_type_right_sizing_method DrsLaunchConfigurationTemplate#target_instance_type_right_sizing_method}

---

### DrsLaunchConfigurationTemplateLicensing <a name="DrsLaunchConfigurationTemplateLicensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing.Initializer"></a>

```python
from cdktn_provider_awscc import drs_launch_configuration_template

drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing(
  os_byol: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing.property.osByol">os_byol</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable Bring your own license or not. |

---

##### `os_byol`<sup>Optional</sup> <a name="os_byol" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing.property.osByol"></a>

```python
os_byol: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable Bring your own license or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#os_byol DrsLaunchConfigurationTemplate#os_byol}

---

### DrsLaunchConfigurationTemplateTags <a name="DrsLaunchConfigurationTemplateTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.Initializer"></a>

```python
from cdktn_provider_awscc import drs_launch_configuration_template

drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#key DrsLaunchConfigurationTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/drs_launch_configuration_template#value DrsLaunchConfigurationTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DrsLaunchConfigurationTemplateLicensingOutputReference <a name="DrsLaunchConfigurationTemplateLicensingOutputReference" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import drs_launch_configuration_template

drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resetOsByol">reset_os_byol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_os_byol` <a name="reset_os_byol" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resetOsByol"></a>

```python
def reset_os_byol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.osByolInput">os_byol_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.osByol">os_byol</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `os_byol_input`<sup>Optional</sup> <a name="os_byol_input" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.osByolInput"></a>

```python
os_byol_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `os_byol`<sup>Required</sup> <a name="os_byol" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.osByol"></a>

```python
os_byol: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DrsLaunchConfigurationTemplateLicensing
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a>

---


### DrsLaunchConfigurationTemplateTagsList <a name="DrsLaunchConfigurationTemplateTagsList" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import drs_launch_configuration_template

drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DrsLaunchConfigurationTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DrsLaunchConfigurationTemplateTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>]

---


### DrsLaunchConfigurationTemplateTagsOutputReference <a name="DrsLaunchConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import drs_launch_configuration_template

drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DrsLaunchConfigurationTemplateTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>

---



