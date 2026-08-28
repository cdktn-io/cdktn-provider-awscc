# `ssmcontactsPlan` Submodule <a name="`ssmcontactsPlan` Submodule" id="@cdktn/provider-awscc.ssmcontactsPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmcontactsPlan <a name="SsmcontactsPlan" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan awscc_ssmcontacts_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlan(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  contact_id: str = None,
  rotation_ids: typing.List[str] = None,
  stages: IResolvable | typing.List[SsmcontactsPlanStages] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.contactId">contact_id</a></code> | <code>str</code> | Contact ID for the AWS SSM Incident Manager Contact to associate the plan. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.rotationIds">rotation_ids</a></code> | <code>typing.List[str]</code> | Rotation Ids to associate with Oncall Contact for engagement. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.stages">stages</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>]</code> | The stages that an escalation plan or engagement plan engages contacts and contact methods in. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `contact_id`<sup>Optional</sup> <a name="contact_id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.contactId"></a>

- *Type:* str

Contact ID for the AWS SSM Incident Manager Contact to associate the plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}

---

##### `rotation_ids`<sup>Optional</sup> <a name="rotation_ids" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.rotationIds"></a>

- *Type:* typing.List[str]

Rotation Ids to associate with Oncall Contact for engagement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#rotation_ids SsmcontactsPlan#rotation_ids}

---

##### `stages`<sup>Optional</sup> <a name="stages" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.stages"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>]

The stages that an escalation plan or engagement plan engages contacts and contact methods in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#stages SsmcontactsPlan#stages}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.putStages">put_stages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetContactId">reset_contact_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetRotationIds">reset_rotation_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetStages">reset_stages</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_stages` <a name="put_stages" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.putStages"></a>

```python
def put_stages(
  value: IResolvable | typing.List[SsmcontactsPlanStages]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.putStages.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>]

---

##### `reset_contact_id` <a name="reset_contact_id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetContactId"></a>

```python
def reset_contact_id() -> None
```

##### `reset_rotation_ids` <a name="reset_rotation_ids" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetRotationIds"></a>

```python
def reset_rotation_ids() -> None
```

##### `reset_stages` <a name="reset_stages" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetStages"></a>

```python
def reset_stages() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SsmcontactsPlan resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isConstruct"></a>

```python
from cdktn_provider_awscc import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SsmcontactsPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SsmcontactsPlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SsmcontactsPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsmcontactsPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.stages">stages</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList">SsmcontactsPlanStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.contactIdInput">contact_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.rotationIdsInput">rotation_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.stagesInput">stages_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.contactId">contact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.rotationIds">rotation_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.stages"></a>

```python
stages: SsmcontactsPlanStagesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList">SsmcontactsPlanStagesList</a>

---

##### `contact_id_input`<sup>Optional</sup> <a name="contact_id_input" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.contactIdInput"></a>

```python
contact_id_input: str
```

- *Type:* str

---

##### `rotation_ids_input`<sup>Optional</sup> <a name="rotation_ids_input" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.rotationIdsInput"></a>

```python
rotation_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `stages_input`<sup>Optional</sup> <a name="stages_input" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.stagesInput"></a>

```python
stages_input: IResolvable | typing.List[SsmcontactsPlanStages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>]

---

##### `contact_id`<sup>Required</sup> <a name="contact_id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.contactId"></a>

```python
contact_id: str
```

- *Type:* str

---

##### `rotation_ids`<sup>Required</sup> <a name="rotation_ids" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.rotationIds"></a>

```python
rotation_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SsmcontactsPlanConfig <a name="SsmcontactsPlanConfig" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlanConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  contact_id: str = None,
  rotation_ids: typing.List[str] = None,
  stages: IResolvable | typing.List[SsmcontactsPlanStages] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.contactId">contact_id</a></code> | <code>str</code> | Contact ID for the AWS SSM Incident Manager Contact to associate the plan. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.rotationIds">rotation_ids</a></code> | <code>typing.List[str]</code> | Rotation Ids to associate with Oncall Contact for engagement. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.stages">stages</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>]</code> | The stages that an escalation plan or engagement plan engages contacts and contact methods in. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `contact_id`<sup>Optional</sup> <a name="contact_id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.contactId"></a>

```python
contact_id: str
```

- *Type:* str

Contact ID for the AWS SSM Incident Manager Contact to associate the plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}

---

##### `rotation_ids`<sup>Optional</sup> <a name="rotation_ids" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.rotationIds"></a>

```python
rotation_ids: typing.List[str]
```

- *Type:* typing.List[str]

Rotation Ids to associate with Oncall Contact for engagement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#rotation_ids SsmcontactsPlan#rotation_ids}

---

##### `stages`<sup>Optional</sup> <a name="stages" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.stages"></a>

```python
stages: IResolvable | typing.List[SsmcontactsPlanStages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>]

The stages that an escalation plan or engagement plan engages contacts and contact methods in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#stages SsmcontactsPlan#stages}

---

### SsmcontactsPlanStages <a name="SsmcontactsPlanStages" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlanStages(
  duration_in_minutes: typing.Union[int, float] = None,
  targets: IResolvable | typing.List[SsmcontactsPlanStagesTargets] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | The time to wait until beginning the next stage. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages.property.targets">targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>]</code> | The contacts or contact methods that the escalation plan or engagement plan is engaging. |

---

##### `duration_in_minutes`<sup>Optional</sup> <a name="duration_in_minutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time to wait until beginning the next stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#duration_in_minutes SsmcontactsPlan#duration_in_minutes}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages.property.targets"></a>

```python
targets: IResolvable | typing.List[SsmcontactsPlanStagesTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>]

The contacts or contact methods that the escalation plan or engagement plan is engaging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#targets SsmcontactsPlan#targets}

---

### SsmcontactsPlanStagesTargets <a name="SsmcontactsPlanStagesTargets" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlanStagesTargets(
  channel_target_info: SsmcontactsPlanStagesTargetsChannelTargetInfo = None,
  contact_target_info: SsmcontactsPlanStagesTargetsContactTargetInfo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets.property.channelTargetInfo">channel_target_info</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a></code> | Information about the contact channel that SSM Incident Manager uses to engage the contact. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets.property.contactTargetInfo">contact_target_info</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a></code> | The contact that SSM Incident Manager is engaging during an incident. |

---

##### `channel_target_info`<sup>Optional</sup> <a name="channel_target_info" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets.property.channelTargetInfo"></a>

```python
channel_target_info: SsmcontactsPlanStagesTargetsChannelTargetInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a>

Information about the contact channel that SSM Incident Manager uses to engage the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#channel_target_info SsmcontactsPlan#channel_target_info}

---

##### `contact_target_info`<sup>Optional</sup> <a name="contact_target_info" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets.property.contactTargetInfo"></a>

```python
contact_target_info: SsmcontactsPlanStagesTargetsContactTargetInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a>

The contact that SSM Incident Manager is engaging during an incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#contact_target_info SsmcontactsPlan#contact_target_info}

---

### SsmcontactsPlanStagesTargetsChannelTargetInfo <a name="SsmcontactsPlanStagesTargetsChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo(
  channel_id: str = None,
  retry_interval_in_minutes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo.property.channelId">channel_id</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the contact channel. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo.property.retryIntervalInMinutes">retry_interval_in_minutes</a></code> | <code>typing.Union[int, float]</code> | The number of minutes to wait to retry sending engagement in the case the engagement initially fails. |

---

##### `channel_id`<sup>Optional</sup> <a name="channel_id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the contact channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#channel_id SsmcontactsPlan#channel_id}

---

##### `retry_interval_in_minutes`<sup>Optional</sup> <a name="retry_interval_in_minutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo.property.retryIntervalInMinutes"></a>

```python
retry_interval_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of minutes to wait to retry sending engagement in the case the engagement initially fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#retry_interval_in_minutes SsmcontactsPlan#retry_interval_in_minutes}

---

### SsmcontactsPlanStagesTargetsContactTargetInfo <a name="SsmcontactsPlanStagesTargetsContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo(
  contact_id: str = None,
  is_essential: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo.property.contactId">contact_id</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the contact. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo.property.isEssential">is_essential</a></code> | <code>bool \| cdktn.IResolvable</code> | A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan. |

---

##### `contact_id`<sup>Optional</sup> <a name="contact_id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo.property.contactId"></a>

```python
contact_id: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}

---

##### `is_essential`<sup>Optional</sup> <a name="is_essential" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo.property.isEssential"></a>

```python
is_essential: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#is_essential SsmcontactsPlan#is_essential}

---

## Classes <a name="Classes" id="Classes"></a>

### SsmcontactsPlanStagesList <a name="SsmcontactsPlanStagesList" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlanStagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmcontactsPlanStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsmcontactsPlanStages]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>]

---


### SsmcontactsPlanStagesOutputReference <a name="SsmcontactsPlanStagesOutputReference" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlanStagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.putTargets">put_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resetDurationInMinutes">reset_duration_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resetTargets">reset_targets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_targets` <a name="put_targets" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.putTargets"></a>

```python
def put_targets(
  value: IResolvable | typing.List[SsmcontactsPlanStagesTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.putTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>]

---

##### `reset_duration_in_minutes` <a name="reset_duration_in_minutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resetDurationInMinutes"></a>

```python
def reset_duration_in_minutes() -> None
```

##### `reset_targets` <a name="reset_targets" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resetTargets"></a>

```python
def reset_targets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList">SsmcontactsPlanStagesTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.durationInMinutesInput">duration_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.targetsInput">targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.targets"></a>

```python
targets: SsmcontactsPlanStagesTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList">SsmcontactsPlanStagesTargetsList</a>

---

##### `duration_in_minutes_input`<sup>Optional</sup> <a name="duration_in_minutes_input" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.durationInMinutesInput"></a>

```python
duration_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.targetsInput"></a>

```python
targets_input: IResolvable | typing.List[SsmcontactsPlanStagesTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>]

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmcontactsPlanStages
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages">SsmcontactsPlanStages</a>

---


### SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference <a name="SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resetChannelId">reset_channel_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resetRetryIntervalInMinutes">reset_retry_interval_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_channel_id` <a name="reset_channel_id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resetChannelId"></a>

```python
def reset_channel_id() -> None
```

##### `reset_retry_interval_in_minutes` <a name="reset_retry_interval_in_minutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resetRetryIntervalInMinutes"></a>

```python
def reset_retry_interval_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.channelIdInput">channel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutesInput">retry_interval_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.channelId">channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutes">retry_interval_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_id_input`<sup>Optional</sup> <a name="channel_id_input" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.channelIdInput"></a>

```python
channel_id_input: str
```

- *Type:* str

---

##### `retry_interval_in_minutes_input`<sup>Optional</sup> <a name="retry_interval_in_minutes_input" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutesInput"></a>

```python
retry_interval_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

---

##### `retry_interval_in_minutes`<sup>Required</sup> <a name="retry_interval_in_minutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutes"></a>

```python
retry_interval_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmcontactsPlanStagesTargetsChannelTargetInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a>

---


### SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference <a name="SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resetContactId">reset_contact_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resetIsEssential">reset_is_essential</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_contact_id` <a name="reset_contact_id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resetContactId"></a>

```python
def reset_contact_id() -> None
```

##### `reset_is_essential` <a name="reset_is_essential" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resetIsEssential"></a>

```python
def reset_is_essential() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.contactIdInput">contact_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.isEssentialInput">is_essential_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.contactId">contact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.isEssential">is_essential</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contact_id_input`<sup>Optional</sup> <a name="contact_id_input" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.contactIdInput"></a>

```python
contact_id_input: str
```

- *Type:* str

---

##### `is_essential_input`<sup>Optional</sup> <a name="is_essential_input" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.isEssentialInput"></a>

```python
is_essential_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `contact_id`<sup>Required</sup> <a name="contact_id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.contactId"></a>

```python
contact_id: str
```

- *Type:* str

---

##### `is_essential`<sup>Required</sup> <a name="is_essential" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.isEssential"></a>

```python
is_essential: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmcontactsPlanStagesTargetsContactTargetInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a>

---


### SsmcontactsPlanStagesTargetsList <a name="SsmcontactsPlanStagesTargetsList" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlanStagesTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmcontactsPlanStagesTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsmcontactsPlanStagesTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>]

---


### SsmcontactsPlanStagesTargetsOutputReference <a name="SsmcontactsPlanStagesTargetsOutputReference" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssmcontacts_plan

ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putChannelTargetInfo">put_channel_target_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putContactTargetInfo">put_contact_target_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resetChannelTargetInfo">reset_channel_target_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resetContactTargetInfo">reset_contact_target_info</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_channel_target_info` <a name="put_channel_target_info" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putChannelTargetInfo"></a>

```python
def put_channel_target_info(
  channel_id: str = None,
  retry_interval_in_minutes: typing.Union[int, float] = None
) -> None
```

###### `channel_id`<sup>Optional</sup> <a name="channel_id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putChannelTargetInfo.parameter.channelId"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the contact channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#channel_id SsmcontactsPlan#channel_id}

---

###### `retry_interval_in_minutes`<sup>Optional</sup> <a name="retry_interval_in_minutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putChannelTargetInfo.parameter.retryIntervalInMinutes"></a>

- *Type:* typing.Union[int, float]

The number of minutes to wait to retry sending engagement in the case the engagement initially fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#retry_interval_in_minutes SsmcontactsPlan#retry_interval_in_minutes}

---

##### `put_contact_target_info` <a name="put_contact_target_info" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putContactTargetInfo"></a>

```python
def put_contact_target_info(
  contact_id: str = None,
  is_essential: bool | IResolvable = None
) -> None
```

###### `contact_id`<sup>Optional</sup> <a name="contact_id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putContactTargetInfo.parameter.contactId"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}

---

###### `is_essential`<sup>Optional</sup> <a name="is_essential" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putContactTargetInfo.parameter.isEssential"></a>

- *Type:* bool | cdktn.IResolvable

A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_plan#is_essential SsmcontactsPlan#is_essential}

---

##### `reset_channel_target_info` <a name="reset_channel_target_info" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resetChannelTargetInfo"></a>

```python
def reset_channel_target_info() -> None
```

##### `reset_contact_target_info` <a name="reset_contact_target_info" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resetContactTargetInfo"></a>

```python
def reset_contact_target_info() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.channelTargetInfo">channel_target_info</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference">SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.contactTargetInfo">contact_target_info</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference">SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.channelTargetInfoInput">channel_target_info_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.contactTargetInfoInput">contact_target_info_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_target_info`<sup>Required</sup> <a name="channel_target_info" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.channelTargetInfo"></a>

```python
channel_target_info: SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference">SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference</a>

---

##### `contact_target_info`<sup>Required</sup> <a name="contact_target_info" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.contactTargetInfo"></a>

```python
contact_target_info: SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference">SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference</a>

---

##### `channel_target_info_input`<sup>Optional</sup> <a name="channel_target_info_input" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.channelTargetInfoInput"></a>

```python
channel_target_info_input: IResolvable | SsmcontactsPlanStagesTargetsChannelTargetInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a>

---

##### `contact_target_info_input`<sup>Optional</sup> <a name="contact_target_info_input" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.contactTargetInfoInput"></a>

```python
contact_target_info_input: IResolvable | SsmcontactsPlanStagesTargetsContactTargetInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmcontactsPlanStagesTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets">SsmcontactsPlanStagesTargets</a>

---



