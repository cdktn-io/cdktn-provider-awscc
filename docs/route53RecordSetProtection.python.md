# `route53RecordSetProtection` Submodule <a name="`route53RecordSetProtection` Submodule" id="@cdktn/provider-awscc.route53RecordSetProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecordSetProtection <a name="Route53RecordSetProtection" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_record_set_protection awscc_route53_record_set_protection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer"></a>

```python
from cdktn_provider_awscc import route53_record_set_protection

route53RecordSetProtection.Route53RecordSetProtection(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hosted_zone_id: str,
  record_name: str,
  record_type: str,
  comment: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | The ID of the hosted zone that contains the record set to protect. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.recordName">record_name</a></code> | <code>str</code> | The name of the record set to protect. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.recordType">record_type</a></code> | <code>str</code> | The DNS record type of the record set to protect. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.comment">comment</a></code> | <code>str</code> | A comment that describes the protection. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.hostedZoneId"></a>

- *Type:* str

The ID of the hosted zone that contains the record set to protect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_record_set_protection#hosted_zone_id Route53RecordSetProtection#hosted_zone_id}

---

##### `record_name`<sup>Required</sup> <a name="record_name" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.recordName"></a>

- *Type:* str

The name of the record set to protect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_record_set_protection#record_name Route53RecordSetProtection#record_name}

---

##### `record_type`<sup>Required</sup> <a name="record_type" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.recordType"></a>

- *Type:* str

The DNS record type of the record set to protect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_record_set_protection#record_type Route53RecordSetProtection#record_type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.Initializer.parameter.comment"></a>

- *Type:* str

A comment that describes the protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_record_set_protection#comment Route53RecordSetProtection#comment}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.resetComment">reset_comment</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.resetComment"></a>

```python
def reset_comment() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Route53RecordSetProtection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.isConstruct"></a>

```python
from cdktn_provider_awscc import route53_record_set_protection

route53RecordSetProtection.Route53RecordSetProtection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.isTerraformElement"></a>

```python
from cdktn_provider_awscc import route53_record_set_protection

route53RecordSetProtection.Route53RecordSetProtection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.isTerraformResource"></a>

```python
from cdktn_provider_awscc import route53_record_set_protection

route53RecordSetProtection.Route53RecordSetProtection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import route53_record_set_protection

route53RecordSetProtection.Route53RecordSetProtection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Route53RecordSetProtection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Route53RecordSetProtection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Route53RecordSetProtection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_record_set_protection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53RecordSetProtection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.hostedZoneIdInput">hosted_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.recordNameInput">record_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.recordTypeInput">record_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.recordName">record_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.recordType">record_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `hosted_zone_id_input`<sup>Optional</sup> <a name="hosted_zone_id_input" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.hostedZoneIdInput"></a>

```python
hosted_zone_id_input: str
```

- *Type:* str

---

##### `record_name_input`<sup>Optional</sup> <a name="record_name_input" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.recordNameInput"></a>

```python
record_name_input: str
```

- *Type:* str

---

##### `record_type_input`<sup>Optional</sup> <a name="record_type_input" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.recordTypeInput"></a>

```python
record_type_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `record_name`<sup>Required</sup> <a name="record_name" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.recordName"></a>

```python
record_name: str
```

- *Type:* str

---

##### `record_type`<sup>Required</sup> <a name="record_type" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.recordType"></a>

```python
record_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecordSetProtectionConfig <a name="Route53RecordSetProtectionConfig" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import route53_record_set_protection

route53RecordSetProtection.Route53RecordSetProtectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  hosted_zone_id: str,
  record_name: str,
  record_type: str,
  comment: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | The ID of the hosted zone that contains the record set to protect. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.property.recordName">record_name</a></code> | <code>str</code> | The name of the record set to protect. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.property.recordType">record_type</a></code> | <code>str</code> | The DNS record type of the record set to protect. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.property.comment">comment</a></code> | <code>str</code> | A comment that describes the protection. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

The ID of the hosted zone that contains the record set to protect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_record_set_protection#hosted_zone_id Route53RecordSetProtection#hosted_zone_id}

---

##### `record_name`<sup>Required</sup> <a name="record_name" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.property.recordName"></a>

```python
record_name: str
```

- *Type:* str

The name of the record set to protect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_record_set_protection#record_name Route53RecordSetProtection#record_name}

---

##### `record_type`<sup>Required</sup> <a name="record_type" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.property.recordType"></a>

```python
record_type: str
```

- *Type:* str

The DNS record type of the record set to protect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_record_set_protection#record_type Route53RecordSetProtection#record_type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.route53RecordSetProtection.Route53RecordSetProtectionConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

A comment that describes the protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53_record_set_protection#comment Route53RecordSetProtection#comment}

---



