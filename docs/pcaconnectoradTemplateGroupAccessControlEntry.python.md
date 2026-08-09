# `pcaconnectoradTemplateGroupAccessControlEntry` Submodule <a name="`pcaconnectoradTemplateGroupAccessControlEntry` Submodule" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PcaconnectoradTemplateGroupAccessControlEntry <a name="PcaconnectoradTemplateGroupAccessControlEntry" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry awscc_pcaconnectorad_template_group_access_control_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer"></a>

```python
from cdktn_provider_awscc import pcaconnectorad_template_group_access_control_entry

pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_rights: PcaconnectoradTemplateGroupAccessControlEntryAccessRights,
  group_display_name: str,
  group_security_identifier: str,
  template_arn: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.accessRights">access_rights</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#access_rights PcaconnectoradTemplateGroupAccessControlEntry#access_rights}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.groupDisplayName">group_display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_display_name PcaconnectoradTemplateGroupAccessControlEntry#group_display_name}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.groupSecurityIdentifier">group_security_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_security_identifier PcaconnectoradTemplateGroupAccessControlEntry#group_security_identifier}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.templateArn">template_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#template_arn PcaconnectoradTemplateGroupAccessControlEntry#template_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_rights`<sup>Required</sup> <a name="access_rights" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.accessRights"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#access_rights PcaconnectoradTemplateGroupAccessControlEntry#access_rights}.

---

##### `group_display_name`<sup>Required</sup> <a name="group_display_name" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.groupDisplayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_display_name PcaconnectoradTemplateGroupAccessControlEntry#group_display_name}.

---

##### `group_security_identifier`<sup>Required</sup> <a name="group_security_identifier" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.groupSecurityIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_security_identifier PcaconnectoradTemplateGroupAccessControlEntry#group_security_identifier}.

---

##### `template_arn`<sup>Required</sup> <a name="template_arn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.templateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#template_arn PcaconnectoradTemplateGroupAccessControlEntry#template_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.putAccessRights">put_access_rights</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_rights` <a name="put_access_rights" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.putAccessRights"></a>

```python
def put_access_rights(
  auto_enroll: str = None,
  enroll: str = None
) -> None
```

###### `auto_enroll`<sup>Optional</sup> <a name="auto_enroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.putAccessRights.parameter.autoEnroll"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#auto_enroll PcaconnectoradTemplateGroupAccessControlEntry#auto_enroll}.

---

###### `enroll`<sup>Optional</sup> <a name="enroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.putAccessRights.parameter.enroll"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#enroll PcaconnectoradTemplateGroupAccessControlEntry#enroll}.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PcaconnectoradTemplateGroupAccessControlEntry resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isConstruct"></a>

```python
from cdktn_provider_awscc import pcaconnectorad_template_group_access_control_entry

pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement"></a>

```python
from cdktn_provider_awscc import pcaconnectorad_template_group_access_control_entry

pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformResource"></a>

```python
from cdktn_provider_awscc import pcaconnectorad_template_group_access_control_entry

pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import pcaconnectorad_template_group_access_control_entry

pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PcaconnectoradTemplateGroupAccessControlEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PcaconnectoradTemplateGroupAccessControlEntry to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PcaconnectoradTemplateGroupAccessControlEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PcaconnectoradTemplateGroupAccessControlEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.accessRights">access_rights</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference">PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.accessRightsInput">access_rights_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayNameInput">group_display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifierInput">group_security_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.templateArnInput">template_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayName">group_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifier">group_security_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.templateArn">template_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_rights`<sup>Required</sup> <a name="access_rights" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.accessRights"></a>

```python
access_rights: PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference">PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `access_rights_input`<sup>Optional</sup> <a name="access_rights_input" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.accessRightsInput"></a>

```python
access_rights_input: IResolvable | PcaconnectoradTemplateGroupAccessControlEntryAccessRights
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a>

---

##### `group_display_name_input`<sup>Optional</sup> <a name="group_display_name_input" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayNameInput"></a>

```python
group_display_name_input: str
```

- *Type:* str

---

##### `group_security_identifier_input`<sup>Optional</sup> <a name="group_security_identifier_input" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifierInput"></a>

```python
group_security_identifier_input: str
```

- *Type:* str

---

##### `template_arn_input`<sup>Optional</sup> <a name="template_arn_input" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.templateArnInput"></a>

```python
template_arn_input: str
```

- *Type:* str

---

##### `group_display_name`<sup>Required</sup> <a name="group_display_name" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayName"></a>

```python
group_display_name: str
```

- *Type:* str

---

##### `group_security_identifier`<sup>Required</sup> <a name="group_security_identifier" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifier"></a>

```python
group_security_identifier: str
```

- *Type:* str

---

##### `template_arn`<sup>Required</sup> <a name="template_arn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.templateArn"></a>

```python
template_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PcaconnectoradTemplateGroupAccessControlEntryAccessRights <a name="PcaconnectoradTemplateGroupAccessControlEntryAccessRights" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.Initializer"></a>

```python
from cdktn_provider_awscc import pcaconnectorad_template_group_access_control_entry

pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights(
  auto_enroll: str = None,
  enroll: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.property.autoEnroll">auto_enroll</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#auto_enroll PcaconnectoradTemplateGroupAccessControlEntry#auto_enroll}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.property.enroll">enroll</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#enroll PcaconnectoradTemplateGroupAccessControlEntry#enroll}. |

---

##### `auto_enroll`<sup>Optional</sup> <a name="auto_enroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.property.autoEnroll"></a>

```python
auto_enroll: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#auto_enroll PcaconnectoradTemplateGroupAccessControlEntry#auto_enroll}.

---

##### `enroll`<sup>Optional</sup> <a name="enroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.property.enroll"></a>

```python
enroll: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#enroll PcaconnectoradTemplateGroupAccessControlEntry#enroll}.

---

### PcaconnectoradTemplateGroupAccessControlEntryConfig <a name="PcaconnectoradTemplateGroupAccessControlEntryConfig" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.Initializer"></a>

```python
from cdktn_provider_awscc import pcaconnectorad_template_group_access_control_entry

pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_rights: PcaconnectoradTemplateGroupAccessControlEntryAccessRights,
  group_display_name: str,
  group_security_identifier: str,
  template_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.accessRights">access_rights</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#access_rights PcaconnectoradTemplateGroupAccessControlEntry#access_rights}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.groupDisplayName">group_display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_display_name PcaconnectoradTemplateGroupAccessControlEntry#group_display_name}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.groupSecurityIdentifier">group_security_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_security_identifier PcaconnectoradTemplateGroupAccessControlEntry#group_security_identifier}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.templateArn">template_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#template_arn PcaconnectoradTemplateGroupAccessControlEntry#template_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_rights`<sup>Required</sup> <a name="access_rights" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.accessRights"></a>

```python
access_rights: PcaconnectoradTemplateGroupAccessControlEntryAccessRights
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#access_rights PcaconnectoradTemplateGroupAccessControlEntry#access_rights}.

---

##### `group_display_name`<sup>Required</sup> <a name="group_display_name" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.groupDisplayName"></a>

```python
group_display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_display_name PcaconnectoradTemplateGroupAccessControlEntry#group_display_name}.

---

##### `group_security_identifier`<sup>Required</sup> <a name="group_security_identifier" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.groupSecurityIdentifier"></a>

```python
group_security_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_security_identifier PcaconnectoradTemplateGroupAccessControlEntry#group_security_identifier}.

---

##### `template_arn`<sup>Required</sup> <a name="template_arn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.templateArn"></a>

```python
template_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorad_template_group_access_control_entry#template_arn PcaconnectoradTemplateGroupAccessControlEntry#template_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference <a name="PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pcaconnectorad_template_group_access_control_entry

pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resetAutoEnroll">reset_auto_enroll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resetEnroll">reset_enroll</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_enroll` <a name="reset_auto_enroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resetAutoEnroll"></a>

```python
def reset_auto_enroll() -> None
```

##### `reset_enroll` <a name="reset_enroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resetEnroll"></a>

```python
def reset_enroll() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnrollInput">auto_enroll_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enrollInput">enroll_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnroll">auto_enroll</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enroll">enroll</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_enroll_input`<sup>Optional</sup> <a name="auto_enroll_input" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnrollInput"></a>

```python
auto_enroll_input: str
```

- *Type:* str

---

##### `enroll_input`<sup>Optional</sup> <a name="enroll_input" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enrollInput"></a>

```python
enroll_input: str
```

- *Type:* str

---

##### `auto_enroll`<sup>Required</sup> <a name="auto_enroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnroll"></a>

```python
auto_enroll: str
```

- *Type:* str

---

##### `enroll`<sup>Required</sup> <a name="enroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enroll"></a>

```python
enroll: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PcaconnectoradTemplateGroupAccessControlEntryAccessRights
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a>

---



