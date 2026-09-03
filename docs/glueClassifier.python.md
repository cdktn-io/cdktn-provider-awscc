# `glueClassifier` Submodule <a name="`glueClassifier` Submodule" id="@cdktn/provider-awscc.glueClassifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueClassifier <a name="GlueClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier awscc_glue_classifier}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer"></a>

```python
from cdktn_provider_awscc import glue_classifier

glueClassifier.GlueClassifier(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  csv_classifier: GlueClassifierCsvClassifier = None,
  grok_classifier: GlueClassifierGrokClassifier = None,
  json_classifier: GlueClassifierJsonClassifier = None,
  xml_classifier: GlueClassifierXmlClassifier = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.csvClassifier">csv_classifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | A classifier for comma-separated values (CSV). |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.grokClassifier">grok_classifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | A classifier that uses grok. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.jsonClassifier">json_classifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | A classifier for JSON content. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.xmlClassifier">xml_classifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | A classifier for XML content. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `csv_classifier`<sup>Optional</sup> <a name="csv_classifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.csvClassifier"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

A classifier for comma-separated values (CSV).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#csv_classifier GlueClassifier#csv_classifier}

---

##### `grok_classifier`<sup>Optional</sup> <a name="grok_classifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.grokClassifier"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

A classifier that uses grok.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#grok_classifier GlueClassifier#grok_classifier}

---

##### `json_classifier`<sup>Optional</sup> <a name="json_classifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.jsonClassifier"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

A classifier for JSON content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#json_classifier GlueClassifier#json_classifier}

---

##### `xml_classifier`<sup>Optional</sup> <a name="xml_classifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.xmlClassifier"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

A classifier for XML content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#xml_classifier GlueClassifier#xml_classifier}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.putCsvClassifier">put_csv_classifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.putGrokClassifier">put_grok_classifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.putJsonClassifier">put_json_classifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.putXmlClassifier">put_xml_classifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetCsvClassifier">reset_csv_classifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetGrokClassifier">reset_grok_classifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetJsonClassifier">reset_json_classifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetXmlClassifier">reset_xml_classifier</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_csv_classifier` <a name="put_csv_classifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putCsvClassifier"></a>

```python
def put_csv_classifier(
  allow_single_column: bool | IResolvable = None,
  contains_custom_datatype: typing.List[str] = None,
  contains_header: str = None,
  custom_datatype_configured: bool | IResolvable = None,
  delimiter: str = None,
  disable_value_trimming: bool | IResolvable = None,
  header: typing.List[str] = None,
  name: str = None,
  quote_symbol: str = None
) -> None
```

###### `allow_single_column`<sup>Optional</sup> <a name="allow_single_column" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putCsvClassifier.parameter.allowSingleColumn"></a>

- *Type:* bool | cdktn.IResolvable

Enables the processing of files that contain only one column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#allow_single_column GlueClassifier#allow_single_column}

---

###### `contains_custom_datatype`<sup>Optional</sup> <a name="contains_custom_datatype" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putCsvClassifier.parameter.containsCustomDatatype"></a>

- *Type:* typing.List[str]

Indicates whether the CSV file contains custom data types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#contains_custom_datatype GlueClassifier#contains_custom_datatype}

---

###### `contains_header`<sup>Optional</sup> <a name="contains_header" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putCsvClassifier.parameter.containsHeader"></a>

- *Type:* str

Indicates whether the CSV file contains a header.

A value of UNKNOWN specifies that the classifier will detect whether the CSV file contains headings. A value of PRESENT specifies that the CSV file contains headings. A value of ABSENT specifies that the CSV file does not contain headings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#contains_header GlueClassifier#contains_header}

---

###### `custom_datatype_configured`<sup>Optional</sup> <a name="custom_datatype_configured" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putCsvClassifier.parameter.customDatatypeConfigured"></a>

- *Type:* bool | cdktn.IResolvable

Enables the configuration of custom data types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#custom_datatype_configured GlueClassifier#custom_datatype_configured}

---

###### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putCsvClassifier.parameter.delimiter"></a>

- *Type:* str

A custom symbol to denote what separates each column entry in the row.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#delimiter GlueClassifier#delimiter}

---

###### `disable_value_trimming`<sup>Optional</sup> <a name="disable_value_trimming" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putCsvClassifier.parameter.disableValueTrimming"></a>

- *Type:* bool | cdktn.IResolvable

Specifies not to trim values before identifying the type of column values. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#disable_value_trimming GlueClassifier#disable_value_trimming}

---

###### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putCsvClassifier.parameter.header"></a>

- *Type:* typing.List[str]

A list of strings representing column names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#header GlueClassifier#header}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putCsvClassifier.parameter.name"></a>

- *Type:* str

The name of the classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#name GlueClassifier#name}

---

###### `quote_symbol`<sup>Optional</sup> <a name="quote_symbol" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putCsvClassifier.parameter.quoteSymbol"></a>

- *Type:* str

A custom symbol to denote what combines content into a single column value.

It must be different from the column delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#quote_symbol GlueClassifier#quote_symbol}

---

##### `put_grok_classifier` <a name="put_grok_classifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putGrokClassifier"></a>

```python
def put_grok_classifier(
  classification: str = None,
  custom_patterns: str = None,
  grok_pattern: str = None,
  name: str = None
) -> None
```

###### `classification`<sup>Optional</sup> <a name="classification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putGrokClassifier.parameter.classification"></a>

- *Type:* str

An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, and so on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#classification GlueClassifier#classification}

---

###### `custom_patterns`<sup>Optional</sup> <a name="custom_patterns" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putGrokClassifier.parameter.customPatterns"></a>

- *Type:* str

Optional custom grok patterns defined by this classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#custom_patterns GlueClassifier#custom_patterns}

---

###### `grok_pattern`<sup>Optional</sup> <a name="grok_pattern" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putGrokClassifier.parameter.grokPattern"></a>

- *Type:* str

The grok pattern applied to a data store by this classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#grok_pattern GlueClassifier#grok_pattern}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putGrokClassifier.parameter.name"></a>

- *Type:* str

The name of the classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#name GlueClassifier#name}

---

##### `put_json_classifier` <a name="put_json_classifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putJsonClassifier"></a>

```python
def put_json_classifier(
  json_path: str = None,
  name: str = None
) -> None
```

###### `json_path`<sup>Optional</sup> <a name="json_path" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putJsonClassifier.parameter.jsonPath"></a>

- *Type:* str

A JsonPath string defining the JSON data for the classifier to classify.

AWS Glue supports a subset of JsonPath, as described in Writing JsonPath Custom Classifiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#json_path GlueClassifier#json_path}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putJsonClassifier.parameter.name"></a>

- *Type:* str

The name of the classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#name GlueClassifier#name}

---

##### `put_xml_classifier` <a name="put_xml_classifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putXmlClassifier"></a>

```python
def put_xml_classifier(
  classification: str = None,
  name: str = None,
  row_tag: str = None
) -> None
```

###### `classification`<sup>Optional</sup> <a name="classification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putXmlClassifier.parameter.classification"></a>

- *Type:* str

An identifier of the data format that the classifier matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#classification GlueClassifier#classification}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putXmlClassifier.parameter.name"></a>

- *Type:* str

The name of the classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#name GlueClassifier#name}

---

###### `row_tag`<sup>Optional</sup> <a name="row_tag" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putXmlClassifier.parameter.rowTag"></a>

- *Type:* str

The XML tag designating the element that contains each record in an XML document being parsed.

This can't identify a self-closing element (closed by />). An empty row element that contains only attributes can be parsed as long as it ends with a closing tag (for example, <row item_a="A" item_b="B"></row> is okay, but <row item_a="A" item_b="B" /> is not).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#row_tag GlueClassifier#row_tag}

---

##### `reset_csv_classifier` <a name="reset_csv_classifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetCsvClassifier"></a>

```python
def reset_csv_classifier() -> None
```

##### `reset_grok_classifier` <a name="reset_grok_classifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetGrokClassifier"></a>

```python
def reset_grok_classifier() -> None
```

##### `reset_json_classifier` <a name="reset_json_classifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetJsonClassifier"></a>

```python
def reset_json_classifier() -> None
```

##### `reset_xml_classifier` <a name="reset_xml_classifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetXmlClassifier"></a>

```python
def reset_xml_classifier() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GlueClassifier resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isConstruct"></a>

```python
from cdktn_provider_awscc import glue_classifier

glueClassifier.GlueClassifier.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformElement"></a>

```python
from cdktn_provider_awscc import glue_classifier

glueClassifier.GlueClassifier.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformResource"></a>

```python
from cdktn_provider_awscc import glue_classifier

glueClassifier.GlueClassifier.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import glue_classifier

glueClassifier.GlueClassifier.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GlueClassifier resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GlueClassifier to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GlueClassifier that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueClassifier to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.csvClassifier">csv_classifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference">GlueClassifierCsvClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.grokClassifier">grok_classifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference">GlueClassifierGrokClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.jsonClassifier">json_classifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference">GlueClassifierJsonClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.xmlClassifier">xml_classifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference">GlueClassifierXmlClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.csvClassifierInput">csv_classifier_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.grokClassifierInput">grok_classifier_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.jsonClassifierInput">json_classifier_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.xmlClassifierInput">xml_classifier_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `csv_classifier`<sup>Required</sup> <a name="csv_classifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.csvClassifier"></a>

```python
csv_classifier: GlueClassifierCsvClassifierOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference">GlueClassifierCsvClassifierOutputReference</a>

---

##### `grok_classifier`<sup>Required</sup> <a name="grok_classifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.grokClassifier"></a>

```python
grok_classifier: GlueClassifierGrokClassifierOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference">GlueClassifierGrokClassifierOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `json_classifier`<sup>Required</sup> <a name="json_classifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.jsonClassifier"></a>

```python
json_classifier: GlueClassifierJsonClassifierOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference">GlueClassifierJsonClassifierOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `xml_classifier`<sup>Required</sup> <a name="xml_classifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.xmlClassifier"></a>

```python
xml_classifier: GlueClassifierXmlClassifierOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference">GlueClassifierXmlClassifierOutputReference</a>

---

##### `csv_classifier_input`<sup>Optional</sup> <a name="csv_classifier_input" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.csvClassifierInput"></a>

```python
csv_classifier_input: IResolvable | GlueClassifierCsvClassifier
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---

##### `grok_classifier_input`<sup>Optional</sup> <a name="grok_classifier_input" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.grokClassifierInput"></a>

```python
grok_classifier_input: IResolvable | GlueClassifierGrokClassifier
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---

##### `json_classifier_input`<sup>Optional</sup> <a name="json_classifier_input" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.jsonClassifierInput"></a>

```python
json_classifier_input: IResolvable | GlueClassifierJsonClassifier
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---

##### `xml_classifier_input`<sup>Optional</sup> <a name="xml_classifier_input" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.xmlClassifierInput"></a>

```python
xml_classifier_input: IResolvable | GlueClassifierXmlClassifier
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueClassifierConfig <a name="GlueClassifierConfig" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.Initializer"></a>

```python
from cdktn_provider_awscc import glue_classifier

glueClassifier.GlueClassifierConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  csv_classifier: GlueClassifierCsvClassifier = None,
  grok_classifier: GlueClassifierGrokClassifier = None,
  json_classifier: GlueClassifierJsonClassifier = None,
  xml_classifier: GlueClassifierXmlClassifier = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.csvClassifier">csv_classifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | A classifier for comma-separated values (CSV). |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.grokClassifier">grok_classifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | A classifier that uses grok. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.jsonClassifier">json_classifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | A classifier for JSON content. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.xmlClassifier">xml_classifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | A classifier for XML content. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `csv_classifier`<sup>Optional</sup> <a name="csv_classifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.csvClassifier"></a>

```python
csv_classifier: GlueClassifierCsvClassifier
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

A classifier for comma-separated values (CSV).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#csv_classifier GlueClassifier#csv_classifier}

---

##### `grok_classifier`<sup>Optional</sup> <a name="grok_classifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.grokClassifier"></a>

```python
grok_classifier: GlueClassifierGrokClassifier
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

A classifier that uses grok.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#grok_classifier GlueClassifier#grok_classifier}

---

##### `json_classifier`<sup>Optional</sup> <a name="json_classifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.jsonClassifier"></a>

```python
json_classifier: GlueClassifierJsonClassifier
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

A classifier for JSON content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#json_classifier GlueClassifier#json_classifier}

---

##### `xml_classifier`<sup>Optional</sup> <a name="xml_classifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.xmlClassifier"></a>

```python
xml_classifier: GlueClassifierXmlClassifier
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

A classifier for XML content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#xml_classifier GlueClassifier#xml_classifier}

---

### GlueClassifierCsvClassifier <a name="GlueClassifierCsvClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.Initializer"></a>

```python
from cdktn_provider_awscc import glue_classifier

glueClassifier.GlueClassifierCsvClassifier(
  allow_single_column: bool | IResolvable = None,
  contains_custom_datatype: typing.List[str] = None,
  contains_header: str = None,
  custom_datatype_configured: bool | IResolvable = None,
  delimiter: str = None,
  disable_value_trimming: bool | IResolvable = None,
  header: typing.List[str] = None,
  name: str = None,
  quote_symbol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.allowSingleColumn">allow_single_column</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables the processing of files that contain only one column. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.containsCustomDatatype">contains_custom_datatype</a></code> | <code>typing.List[str]</code> | Indicates whether the CSV file contains custom data types. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.containsHeader">contains_header</a></code> | <code>str</code> | Indicates whether the CSV file contains a header. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypeConfigured">custom_datatype_configured</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables the configuration of custom data types. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.delimiter">delimiter</a></code> | <code>str</code> | A custom symbol to denote what separates each column entry in the row. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.disableValueTrimming">disable_value_trimming</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies not to trim values before identifying the type of column values. The default value is true. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.header">header</a></code> | <code>typing.List[str]</code> | A list of strings representing column names. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.name">name</a></code> | <code>str</code> | The name of the classifier. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.quoteSymbol">quote_symbol</a></code> | <code>str</code> | A custom symbol to denote what combines content into a single column value. |

---

##### `allow_single_column`<sup>Optional</sup> <a name="allow_single_column" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.allowSingleColumn"></a>

```python
allow_single_column: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables the processing of files that contain only one column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#allow_single_column GlueClassifier#allow_single_column}

---

##### `contains_custom_datatype`<sup>Optional</sup> <a name="contains_custom_datatype" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.containsCustomDatatype"></a>

```python
contains_custom_datatype: typing.List[str]
```

- *Type:* typing.List[str]

Indicates whether the CSV file contains custom data types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#contains_custom_datatype GlueClassifier#contains_custom_datatype}

---

##### `contains_header`<sup>Optional</sup> <a name="contains_header" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.containsHeader"></a>

```python
contains_header: str
```

- *Type:* str

Indicates whether the CSV file contains a header.

A value of UNKNOWN specifies that the classifier will detect whether the CSV file contains headings. A value of PRESENT specifies that the CSV file contains headings. A value of ABSENT specifies that the CSV file does not contain headings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#contains_header GlueClassifier#contains_header}

---

##### `custom_datatype_configured`<sup>Optional</sup> <a name="custom_datatype_configured" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypeConfigured"></a>

```python
custom_datatype_configured: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables the configuration of custom data types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#custom_datatype_configured GlueClassifier#custom_datatype_configured}

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

A custom symbol to denote what separates each column entry in the row.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#delimiter GlueClassifier#delimiter}

---

##### `disable_value_trimming`<sup>Optional</sup> <a name="disable_value_trimming" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.disableValueTrimming"></a>

```python
disable_value_trimming: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies not to trim values before identifying the type of column values. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#disable_value_trimming GlueClassifier#disable_value_trimming}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.header"></a>

```python
header: typing.List[str]
```

- *Type:* typing.List[str]

A list of strings representing column names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#header GlueClassifier#header}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#name GlueClassifier#name}

---

##### `quote_symbol`<sup>Optional</sup> <a name="quote_symbol" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.quoteSymbol"></a>

```python
quote_symbol: str
```

- *Type:* str

A custom symbol to denote what combines content into a single column value.

It must be different from the column delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#quote_symbol GlueClassifier#quote_symbol}

---

### GlueClassifierGrokClassifier <a name="GlueClassifierGrokClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.Initializer"></a>

```python
from cdktn_provider_awscc import glue_classifier

glueClassifier.GlueClassifierGrokClassifier(
  classification: str = None,
  custom_patterns: str = None,
  grok_pattern: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.classification">classification</a></code> | <code>str</code> | An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, and so on. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.customPatterns">custom_patterns</a></code> | <code>str</code> | Optional custom grok patterns defined by this classifier. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.grokPattern">grok_pattern</a></code> | <code>str</code> | The grok pattern applied to a data store by this classifier. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.name">name</a></code> | <code>str</code> | The name of the classifier. |

---

##### `classification`<sup>Optional</sup> <a name="classification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.classification"></a>

```python
classification: str
```

- *Type:* str

An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, and so on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#classification GlueClassifier#classification}

---

##### `custom_patterns`<sup>Optional</sup> <a name="custom_patterns" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.customPatterns"></a>

```python
custom_patterns: str
```

- *Type:* str

Optional custom grok patterns defined by this classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#custom_patterns GlueClassifier#custom_patterns}

---

##### `grok_pattern`<sup>Optional</sup> <a name="grok_pattern" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.grokPattern"></a>

```python
grok_pattern: str
```

- *Type:* str

The grok pattern applied to a data store by this classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#grok_pattern GlueClassifier#grok_pattern}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#name GlueClassifier#name}

---

### GlueClassifierJsonClassifier <a name="GlueClassifierJsonClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier.Initializer"></a>

```python
from cdktn_provider_awscc import glue_classifier

glueClassifier.GlueClassifierJsonClassifier(
  json_path: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier.property.jsonPath">json_path</a></code> | <code>str</code> | A JsonPath string defining the JSON data for the classifier to classify. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier.property.name">name</a></code> | <code>str</code> | The name of the classifier. |

---

##### `json_path`<sup>Optional</sup> <a name="json_path" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier.property.jsonPath"></a>

```python
json_path: str
```

- *Type:* str

A JsonPath string defining the JSON data for the classifier to classify.

AWS Glue supports a subset of JsonPath, as described in Writing JsonPath Custom Classifiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#json_path GlueClassifier#json_path}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#name GlueClassifier#name}

---

### GlueClassifierXmlClassifier <a name="GlueClassifierXmlClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.Initializer"></a>

```python
from cdktn_provider_awscc import glue_classifier

glueClassifier.GlueClassifierXmlClassifier(
  classification: str = None,
  name: str = None,
  row_tag: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.classification">classification</a></code> | <code>str</code> | An identifier of the data format that the classifier matches. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.name">name</a></code> | <code>str</code> | The name of the classifier. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.rowTag">row_tag</a></code> | <code>str</code> | The XML tag designating the element that contains each record in an XML document being parsed. |

---

##### `classification`<sup>Optional</sup> <a name="classification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.classification"></a>

```python
classification: str
```

- *Type:* str

An identifier of the data format that the classifier matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#classification GlueClassifier#classification}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#name GlueClassifier#name}

---

##### `row_tag`<sup>Optional</sup> <a name="row_tag" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.rowTag"></a>

```python
row_tag: str
```

- *Type:* str

The XML tag designating the element that contains each record in an XML document being parsed.

This can't identify a self-closing element (closed by />). An empty row element that contains only attributes can be parsed as long as it ends with a closing tag (for example, <row item_a="A" item_b="B"></row> is okay, but <row item_a="A" item_b="B" /> is not).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_classifier#row_tag GlueClassifier#row_tag}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueClassifierCsvClassifierOutputReference <a name="GlueClassifierCsvClassifierOutputReference" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_classifier

glueClassifier.GlueClassifierCsvClassifierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetAllowSingleColumn">reset_allow_single_column</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsCustomDatatype">reset_contains_custom_datatype</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsHeader">reset_contains_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypeConfigured">reset_custom_datatype_configured</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDelimiter">reset_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDisableValueTrimming">reset_disable_value_trimming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetQuoteSymbol">reset_quote_symbol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_single_column` <a name="reset_allow_single_column" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetAllowSingleColumn"></a>

```python
def reset_allow_single_column() -> None
```

##### `reset_contains_custom_datatype` <a name="reset_contains_custom_datatype" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsCustomDatatype"></a>

```python
def reset_contains_custom_datatype() -> None
```

##### `reset_contains_header` <a name="reset_contains_header" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsHeader"></a>

```python
def reset_contains_header() -> None
```

##### `reset_custom_datatype_configured` <a name="reset_custom_datatype_configured" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypeConfigured"></a>

```python
def reset_custom_datatype_configured() -> None
```

##### `reset_delimiter` <a name="reset_delimiter" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDelimiter"></a>

```python
def reset_delimiter() -> None
```

##### `reset_disable_value_trimming` <a name="reset_disable_value_trimming" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDisableValueTrimming"></a>

```python
def reset_disable_value_trimming() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_quote_symbol` <a name="reset_quote_symbol" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetQuoteSymbol"></a>

```python
def reset_quote_symbol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumnInput">allow_single_column_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsCustomDatatypeInput">contains_custom_datatype_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeaderInput">contains_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfiguredInput">custom_datatype_configured_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiterInput">delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimmingInput">disable_value_trimming_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.headerInput">header_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbolInput">quote_symbol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumn">allow_single_column</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsCustomDatatype">contains_custom_datatype</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeader">contains_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfigured">custom_datatype_configured</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiter">delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimming">disable_value_trimming</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.header">header</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbol">quote_symbol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_single_column_input`<sup>Optional</sup> <a name="allow_single_column_input" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumnInput"></a>

```python
allow_single_column_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `contains_custom_datatype_input`<sup>Optional</sup> <a name="contains_custom_datatype_input" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsCustomDatatypeInput"></a>

```python
contains_custom_datatype_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `contains_header_input`<sup>Optional</sup> <a name="contains_header_input" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeaderInput"></a>

```python
contains_header_input: str
```

- *Type:* str

---

##### `custom_datatype_configured_input`<sup>Optional</sup> <a name="custom_datatype_configured_input" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfiguredInput"></a>

```python
custom_datatype_configured_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delimiter_input`<sup>Optional</sup> <a name="delimiter_input" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiterInput"></a>

```python
delimiter_input: str
```

- *Type:* str

---

##### `disable_value_trimming_input`<sup>Optional</sup> <a name="disable_value_trimming_input" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimmingInput"></a>

```python
disable_value_trimming_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.headerInput"></a>

```python
header_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `quote_symbol_input`<sup>Optional</sup> <a name="quote_symbol_input" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbolInput"></a>

```python
quote_symbol_input: str
```

- *Type:* str

---

##### `allow_single_column`<sup>Required</sup> <a name="allow_single_column" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumn"></a>

```python
allow_single_column: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `contains_custom_datatype`<sup>Required</sup> <a name="contains_custom_datatype" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsCustomDatatype"></a>

```python
contains_custom_datatype: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `contains_header`<sup>Required</sup> <a name="contains_header" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeader"></a>

```python
contains_header: str
```

- *Type:* str

---

##### `custom_datatype_configured`<sup>Required</sup> <a name="custom_datatype_configured" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfigured"></a>

```python
custom_datatype_configured: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

---

##### `disable_value_trimming`<sup>Required</sup> <a name="disable_value_trimming" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimming"></a>

```python
disable_value_trimming: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.header"></a>

```python
header: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `quote_symbol`<sup>Required</sup> <a name="quote_symbol" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbol"></a>

```python
quote_symbol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueClassifierCsvClassifier
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---


### GlueClassifierGrokClassifierOutputReference <a name="GlueClassifierGrokClassifierOutputReference" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_classifier

glueClassifier.GlueClassifierGrokClassifierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetClassification">reset_classification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetCustomPatterns">reset_custom_patterns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetGrokPattern">reset_grok_pattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_classification` <a name="reset_classification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetClassification"></a>

```python
def reset_classification() -> None
```

##### `reset_custom_patterns` <a name="reset_custom_patterns" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetCustomPatterns"></a>

```python
def reset_custom_patterns() -> None
```

##### `reset_grok_pattern` <a name="reset_grok_pattern" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetGrokPattern"></a>

```python
def reset_grok_pattern() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classificationInput">classification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatternsInput">custom_patterns_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPatternInput">grok_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classification">classification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatterns">custom_patterns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPattern">grok_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classification_input`<sup>Optional</sup> <a name="classification_input" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classificationInput"></a>

```python
classification_input: str
```

- *Type:* str

---

##### `custom_patterns_input`<sup>Optional</sup> <a name="custom_patterns_input" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatternsInput"></a>

```python
custom_patterns_input: str
```

- *Type:* str

---

##### `grok_pattern_input`<sup>Optional</sup> <a name="grok_pattern_input" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPatternInput"></a>

```python
grok_pattern_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classification"></a>

```python
classification: str
```

- *Type:* str

---

##### `custom_patterns`<sup>Required</sup> <a name="custom_patterns" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatterns"></a>

```python
custom_patterns: str
```

- *Type:* str

---

##### `grok_pattern`<sup>Required</sup> <a name="grok_pattern" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPattern"></a>

```python
grok_pattern: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueClassifierGrokClassifier
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---


### GlueClassifierJsonClassifierOutputReference <a name="GlueClassifierJsonClassifierOutputReference" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_classifier

glueClassifier.GlueClassifierJsonClassifierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resetJsonPath">reset_json_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_json_path` <a name="reset_json_path" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resetJsonPath"></a>

```python
def reset_json_path() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPathInput">json_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPath">json_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json_path_input`<sup>Optional</sup> <a name="json_path_input" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPathInput"></a>

```python
json_path_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `json_path`<sup>Required</sup> <a name="json_path" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPath"></a>

```python
json_path: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueClassifierJsonClassifier
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---


### GlueClassifierXmlClassifierOutputReference <a name="GlueClassifierXmlClassifierOutputReference" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_classifier

glueClassifier.GlueClassifierXmlClassifierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetClassification">reset_classification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetRowTag">reset_row_tag</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_classification` <a name="reset_classification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetClassification"></a>

```python
def reset_classification() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_row_tag` <a name="reset_row_tag" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetRowTag"></a>

```python
def reset_row_tag() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classificationInput">classification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTagInput">row_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classification">classification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTag">row_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classification_input`<sup>Optional</sup> <a name="classification_input" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classificationInput"></a>

```python
classification_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `row_tag_input`<sup>Optional</sup> <a name="row_tag_input" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTagInput"></a>

```python
row_tag_input: str
```

- *Type:* str

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classification"></a>

```python
classification: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `row_tag`<sup>Required</sup> <a name="row_tag" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTag"></a>

```python
row_tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueClassifierXmlClassifier
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---



