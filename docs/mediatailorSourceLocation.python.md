# `mediatailorSourceLocation` Submodule <a name="`mediatailorSourceLocation` Submodule" id="@cdktn/provider-awscc.mediatailorSourceLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediatailorSourceLocation <a name="MediatailorSourceLocation" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location awscc_mediatailor_source_location}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_source_location

mediatailorSourceLocation.MediatailorSourceLocation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  http_configuration: MediatailorSourceLocationHttpConfiguration,
  source_location_name: str,
  access_configuration: MediatailorSourceLocationAccessConfiguration = None,
  default_segment_delivery_configuration: MediatailorSourceLocationDefaultSegmentDeliveryConfiguration = None,
  segment_delivery_configurations: IResolvable | typing.List[MediatailorSourceLocationSegmentDeliveryConfigurations] = None,
  tags: IResolvable | typing.List[MediatailorSourceLocationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.httpConfiguration">http_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a></code> | <p>The HTTP configuration for the source location.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.sourceLocationName">source_location_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#source_location_name MediatailorSourceLocation#source_location_name}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.accessConfiguration">access_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a></code> | <p>Access configuration parameters.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.defaultSegmentDeliveryConfiguration">default_segment_delivery_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a></code> | <p>The optional configuration for a server that serves segments. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.segmentDeliveryConfigurations">segment_delivery_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>]</code> | <p>A list of the segment delivery configurations associated with this resource.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>]</code> | The tags to assign to the source location. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `http_configuration`<sup>Required</sup> <a name="http_configuration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.httpConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a>

<p>The HTTP configuration for the source location.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#http_configuration MediatailorSourceLocation#http_configuration}

---

##### `source_location_name`<sup>Required</sup> <a name="source_location_name" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.sourceLocationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#source_location_name MediatailorSourceLocation#source_location_name}.

---

##### `access_configuration`<sup>Optional</sup> <a name="access_configuration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.accessConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a>

<p>Access configuration parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#access_configuration MediatailorSourceLocation#access_configuration}

---

##### `default_segment_delivery_configuration`<sup>Optional</sup> <a name="default_segment_delivery_configuration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.defaultSegmentDeliveryConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a>

<p>The optional configuration for a server that serves segments.

Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#default_segment_delivery_configuration MediatailorSourceLocation#default_segment_delivery_configuration}

---

##### `segment_delivery_configurations`<sup>Optional</sup> <a name="segment_delivery_configurations" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.segmentDeliveryConfigurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>]

<p>A list of the segment delivery configurations associated with this resource.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#segment_delivery_configurations MediatailorSourceLocation#segment_delivery_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>]

The tags to assign to the source location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#tags MediatailorSourceLocation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putAccessConfiguration">put_access_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putDefaultSegmentDeliveryConfiguration">put_default_segment_delivery_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putHttpConfiguration">put_http_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putSegmentDeliveryConfigurations">put_segment_delivery_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetAccessConfiguration">reset_access_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetDefaultSegmentDeliveryConfiguration">reset_default_segment_delivery_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetSegmentDeliveryConfigurations">reset_segment_delivery_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_configuration` <a name="put_access_configuration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putAccessConfiguration"></a>

```python
def put_access_configuration(
  access_type: str = None,
  secrets_manager_access_token_configuration: MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration = None
) -> None
```

###### `access_type`<sup>Optional</sup> <a name="access_type" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putAccessConfiguration.parameter.accessType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#access_type MediatailorSourceLocation#access_type}.

---

###### `secrets_manager_access_token_configuration`<sup>Optional</sup> <a name="secrets_manager_access_token_configuration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putAccessConfiguration.parameter.secretsManagerAccessTokenConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a>

<p>AWS Secrets Manager access token configuration parameters.

For information about Secrets Manager access token authentication, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-access-configuration-access-token.html">Working with AWS Secrets Manager access token authentication</a>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#secrets_manager_access_token_configuration MediatailorSourceLocation#secrets_manager_access_token_configuration}

---

##### `put_default_segment_delivery_configuration` <a name="put_default_segment_delivery_configuration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putDefaultSegmentDeliveryConfiguration"></a>

```python
def put_default_segment_delivery_configuration(
  base_url: str = None
) -> None
```

###### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putDefaultSegmentDeliveryConfiguration.parameter.baseUrl"></a>

- *Type:* str

<p>The hostname of the server that will be used to serve segments.

This string must include the protocol, such as <b>https://</b>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#base_url MediatailorSourceLocation#base_url}

---

##### `put_http_configuration` <a name="put_http_configuration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putHttpConfiguration"></a>

```python
def put_http_configuration(
  base_url: str
) -> None
```

###### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putHttpConfiguration.parameter.baseUrl"></a>

- *Type:* str

<p>The base URL for the source location host server. This string must include the protocol, such as <b>https://</b>.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#base_url MediatailorSourceLocation#base_url}

---

##### `put_segment_delivery_configurations` <a name="put_segment_delivery_configurations" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putSegmentDeliveryConfigurations"></a>

```python
def put_segment_delivery_configurations(
  value: IResolvable | typing.List[MediatailorSourceLocationSegmentDeliveryConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putSegmentDeliveryConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[MediatailorSourceLocationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>]

---

##### `reset_access_configuration` <a name="reset_access_configuration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetAccessConfiguration"></a>

```python
def reset_access_configuration() -> None
```

##### `reset_default_segment_delivery_configuration` <a name="reset_default_segment_delivery_configuration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetDefaultSegmentDeliveryConfiguration"></a>

```python
def reset_default_segment_delivery_configuration() -> None
```

##### `reset_segment_delivery_configurations` <a name="reset_segment_delivery_configurations" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetSegmentDeliveryConfigurations"></a>

```python
def reset_segment_delivery_configurations() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MediatailorSourceLocation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isConstruct"></a>

```python
from cdktn_provider_awscc import mediatailor_source_location

mediatailorSourceLocation.MediatailorSourceLocation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mediatailor_source_location

mediatailorSourceLocation.MediatailorSourceLocation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mediatailor_source_location

mediatailorSourceLocation.MediatailorSourceLocation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mediatailor_source_location

mediatailorSourceLocation.MediatailorSourceLocation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MediatailorSourceLocation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediatailorSourceLocation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediatailorSourceLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediatailorSourceLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.accessConfiguration">access_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference">MediatailorSourceLocationAccessConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.defaultSegmentDeliveryConfiguration">default_segment_delivery_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference">MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.httpConfiguration">http_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference">MediatailorSourceLocationHttpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.segmentDeliveryConfigurations">segment_delivery_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList">MediatailorSourceLocationSegmentDeliveryConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList">MediatailorSourceLocationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.accessConfigurationInput">access_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.defaultSegmentDeliveryConfigurationInput">default_segment_delivery_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.httpConfigurationInput">http_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.segmentDeliveryConfigurationsInput">segment_delivery_configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.sourceLocationNameInput">source_location_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.sourceLocationName">source_location_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_configuration`<sup>Required</sup> <a name="access_configuration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.accessConfiguration"></a>

```python
access_configuration: MediatailorSourceLocationAccessConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference">MediatailorSourceLocationAccessConfigurationOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `default_segment_delivery_configuration`<sup>Required</sup> <a name="default_segment_delivery_configuration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.defaultSegmentDeliveryConfiguration"></a>

```python
default_segment_delivery_configuration: MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference">MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference</a>

---

##### `http_configuration`<sup>Required</sup> <a name="http_configuration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.httpConfiguration"></a>

```python
http_configuration: MediatailorSourceLocationHttpConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference">MediatailorSourceLocationHttpConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `segment_delivery_configurations`<sup>Required</sup> <a name="segment_delivery_configurations" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.segmentDeliveryConfigurations"></a>

```python
segment_delivery_configurations: MediatailorSourceLocationSegmentDeliveryConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList">MediatailorSourceLocationSegmentDeliveryConfigurationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tags"></a>

```python
tags: MediatailorSourceLocationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList">MediatailorSourceLocationTagsList</a>

---

##### `access_configuration_input`<sup>Optional</sup> <a name="access_configuration_input" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.accessConfigurationInput"></a>

```python
access_configuration_input: IResolvable | MediatailorSourceLocationAccessConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a>

---

##### `default_segment_delivery_configuration_input`<sup>Optional</sup> <a name="default_segment_delivery_configuration_input" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.defaultSegmentDeliveryConfigurationInput"></a>

```python
default_segment_delivery_configuration_input: IResolvable | MediatailorSourceLocationDefaultSegmentDeliveryConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a>

---

##### `http_configuration_input`<sup>Optional</sup> <a name="http_configuration_input" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.httpConfigurationInput"></a>

```python
http_configuration_input: IResolvable | MediatailorSourceLocationHttpConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a>

---

##### `segment_delivery_configurations_input`<sup>Optional</sup> <a name="segment_delivery_configurations_input" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.segmentDeliveryConfigurationsInput"></a>

```python
segment_delivery_configurations_input: IResolvable | typing.List[MediatailorSourceLocationSegmentDeliveryConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>]

---

##### `source_location_name_input`<sup>Optional</sup> <a name="source_location_name_input" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.sourceLocationNameInput"></a>

```python
source_location_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[MediatailorSourceLocationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>]

---

##### `source_location_name`<sup>Required</sup> <a name="source_location_name" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.sourceLocationName"></a>

```python
source_location_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediatailorSourceLocationAccessConfiguration <a name="MediatailorSourceLocationAccessConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_source_location

mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration(
  access_type: str = None,
  secrets_manager_access_token_configuration: MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration.property.accessType">access_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#access_type MediatailorSourceLocation#access_type}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration.property.secretsManagerAccessTokenConfiguration">secrets_manager_access_token_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a></code> | <p>AWS Secrets Manager access token configuration parameters. |

---

##### `access_type`<sup>Optional</sup> <a name="access_type" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#access_type MediatailorSourceLocation#access_type}.

---

##### `secrets_manager_access_token_configuration`<sup>Optional</sup> <a name="secrets_manager_access_token_configuration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration.property.secretsManagerAccessTokenConfiguration"></a>

```python
secrets_manager_access_token_configuration: MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a>

<p>AWS Secrets Manager access token configuration parameters.

For information about Secrets Manager access token authentication, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-access-configuration-access-token.html">Working with AWS Secrets Manager access token authentication</a>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#secrets_manager_access_token_configuration MediatailorSourceLocation#secrets_manager_access_token_configuration}

---

### MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration <a name="MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_source_location

mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration(
  header_name: str = None,
  secret_arn: str = None,
  secret_string_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.headerName">header_name</a></code> | <code>str</code> | <p>The name of the HTTP header used to supply the access token in requests to the source location.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.secretArn">secret_arn</a></code> | <code>str</code> | <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the access token.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.secretStringKey">secret_string_key</a></code> | <code>str</code> | <p>The AWS Secrets Manager <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#SecretsManager-CreateSecret-request-SecretString.html">SecretString</a> key associated with the access token. MediaTailor uses the key to look up SecretString key and value pair containing the access token.</p>. |

---

##### `header_name`<sup>Optional</sup> <a name="header_name" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

<p>The name of the HTTP header used to supply the access token in requests to the source location.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#header_name MediatailorSourceLocation#header_name}

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

<p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the access token.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#secret_arn MediatailorSourceLocation#secret_arn}

---

##### `secret_string_key`<sup>Optional</sup> <a name="secret_string_key" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.secretStringKey"></a>

```python
secret_string_key: str
```

- *Type:* str

<p>The AWS Secrets Manager <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#SecretsManager-CreateSecret-request-SecretString.html">SecretString</a> key associated with the access token. MediaTailor uses the key to look up SecretString key and value pair containing the access token.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#secret_string_key MediatailorSourceLocation#secret_string_key}

---

### MediatailorSourceLocationConfig <a name="MediatailorSourceLocationConfig" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_source_location

mediatailorSourceLocation.MediatailorSourceLocationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  http_configuration: MediatailorSourceLocationHttpConfiguration,
  source_location_name: str,
  access_configuration: MediatailorSourceLocationAccessConfiguration = None,
  default_segment_delivery_configuration: MediatailorSourceLocationDefaultSegmentDeliveryConfiguration = None,
  segment_delivery_configurations: IResolvable | typing.List[MediatailorSourceLocationSegmentDeliveryConfigurations] = None,
  tags: IResolvable | typing.List[MediatailorSourceLocationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.httpConfiguration">http_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a></code> | <p>The HTTP configuration for the source location.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.sourceLocationName">source_location_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#source_location_name MediatailorSourceLocation#source_location_name}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.accessConfiguration">access_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a></code> | <p>Access configuration parameters.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.defaultSegmentDeliveryConfiguration">default_segment_delivery_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a></code> | <p>The optional configuration for a server that serves segments. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.segmentDeliveryConfigurations">segment_delivery_configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>]</code> | <p>A list of the segment delivery configurations associated with this resource.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>]</code> | The tags to assign to the source location. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `http_configuration`<sup>Required</sup> <a name="http_configuration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.httpConfiguration"></a>

```python
http_configuration: MediatailorSourceLocationHttpConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a>

<p>The HTTP configuration for the source location.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#http_configuration MediatailorSourceLocation#http_configuration}

---

##### `source_location_name`<sup>Required</sup> <a name="source_location_name" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.sourceLocationName"></a>

```python
source_location_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#source_location_name MediatailorSourceLocation#source_location_name}.

---

##### `access_configuration`<sup>Optional</sup> <a name="access_configuration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.accessConfiguration"></a>

```python
access_configuration: MediatailorSourceLocationAccessConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a>

<p>Access configuration parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#access_configuration MediatailorSourceLocation#access_configuration}

---

##### `default_segment_delivery_configuration`<sup>Optional</sup> <a name="default_segment_delivery_configuration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.defaultSegmentDeliveryConfiguration"></a>

```python
default_segment_delivery_configuration: MediatailorSourceLocationDefaultSegmentDeliveryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a>

<p>The optional configuration for a server that serves segments.

Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#default_segment_delivery_configuration MediatailorSourceLocation#default_segment_delivery_configuration}

---

##### `segment_delivery_configurations`<sup>Optional</sup> <a name="segment_delivery_configurations" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.segmentDeliveryConfigurations"></a>

```python
segment_delivery_configurations: IResolvable | typing.List[MediatailorSourceLocationSegmentDeliveryConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>]

<p>A list of the segment delivery configurations associated with this resource.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#segment_delivery_configurations MediatailorSourceLocation#segment_delivery_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[MediatailorSourceLocationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>]

The tags to assign to the source location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#tags MediatailorSourceLocation#tags}

---

### MediatailorSourceLocationDefaultSegmentDeliveryConfiguration <a name="MediatailorSourceLocationDefaultSegmentDeliveryConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_source_location

mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration(
  base_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration.property.baseUrl">base_url</a></code> | <code>str</code> | <p>The hostname of the server that will be used to serve segments. |

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

<p>The hostname of the server that will be used to serve segments.

This string must include the protocol, such as <b>https://</b>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#base_url MediatailorSourceLocation#base_url}

---

### MediatailorSourceLocationHttpConfiguration <a name="MediatailorSourceLocationHttpConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_source_location

mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration(
  base_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration.property.baseUrl">base_url</a></code> | <code>str</code> | <p>The base URL for the source location host server. This string must include the protocol, such as <b>https://</b>.</p>. |

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

<p>The base URL for the source location host server. This string must include the protocol, such as <b>https://</b>.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#base_url MediatailorSourceLocation#base_url}

---

### MediatailorSourceLocationSegmentDeliveryConfigurations <a name="MediatailorSourceLocationSegmentDeliveryConfigurations" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_source_location

mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations(
  base_url: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations.property.baseUrl">base_url</a></code> | <code>str</code> | <p>The base URL of the host or path of the segment delivery server that you're using to serve segments. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations.property.name">name</a></code> | <code>str</code> | <p>A unique identifier used to distinguish between multiple segment delivery configurations in a source location.</p>. |

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

<p>The base URL of the host or path of the segment delivery server that you're using to serve segments.

This is typically a content delivery network (CDN). The URL can be absolute or relative. To use an absolute URL include the protocol, such as <code>https://example.com/some/path</code>. To use a relative URL specify the relative path, such as <code>/some/path*</code>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#base_url MediatailorSourceLocation#base_url}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations.property.name"></a>

```python
name: str
```

- *Type:* str

<p>A unique identifier used to distinguish between multiple segment delivery configurations in a source location.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#name MediatailorSourceLocation#name}

---

### MediatailorSourceLocationTags <a name="MediatailorSourceLocationTags" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_source_location

mediatailorSourceLocation.MediatailorSourceLocationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#key MediatailorSourceLocation#key}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#value MediatailorSourceLocation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#key MediatailorSourceLocation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#value MediatailorSourceLocation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediatailorSourceLocationAccessConfigurationOutputReference <a name="MediatailorSourceLocationAccessConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_source_location

mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.putSecretsManagerAccessTokenConfiguration">put_secrets_manager_access_token_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resetAccessType">reset_access_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resetSecretsManagerAccessTokenConfiguration">reset_secrets_manager_access_token_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_secrets_manager_access_token_configuration` <a name="put_secrets_manager_access_token_configuration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.putSecretsManagerAccessTokenConfiguration"></a>

```python
def put_secrets_manager_access_token_configuration(
  header_name: str = None,
  secret_arn: str = None,
  secret_string_key: str = None
) -> None
```

###### `header_name`<sup>Optional</sup> <a name="header_name" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.putSecretsManagerAccessTokenConfiguration.parameter.headerName"></a>

- *Type:* str

<p>The name of the HTTP header used to supply the access token in requests to the source location.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#header_name MediatailorSourceLocation#header_name}

---

###### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.putSecretsManagerAccessTokenConfiguration.parameter.secretArn"></a>

- *Type:* str

<p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the access token.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#secret_arn MediatailorSourceLocation#secret_arn}

---

###### `secret_string_key`<sup>Optional</sup> <a name="secret_string_key" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.putSecretsManagerAccessTokenConfiguration.parameter.secretStringKey"></a>

- *Type:* str

<p>The AWS Secrets Manager <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#SecretsManager-CreateSecret-request-SecretString.html">SecretString</a> key associated with the access token. MediaTailor uses the key to look up SecretString key and value pair containing the access token.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediatailor_source_location#secret_string_key MediatailorSourceLocation#secret_string_key}

---

##### `reset_access_type` <a name="reset_access_type" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resetAccessType"></a>

```python
def reset_access_type() -> None
```

##### `reset_secrets_manager_access_token_configuration` <a name="reset_secrets_manager_access_token_configuration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resetSecretsManagerAccessTokenConfiguration"></a>

```python
def reset_secrets_manager_access_token_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.secretsManagerAccessTokenConfiguration">secrets_manager_access_token_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.accessTypeInput">access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.secretsManagerAccessTokenConfigurationInput">secrets_manager_access_token_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secrets_manager_access_token_configuration`<sup>Required</sup> <a name="secrets_manager_access_token_configuration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.secretsManagerAccessTokenConfiguration"></a>

```python
secrets_manager_access_token_configuration: MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference</a>

---

##### `access_type_input`<sup>Optional</sup> <a name="access_type_input" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.accessTypeInput"></a>

```python
access_type_input: str
```

- *Type:* str

---

##### `secrets_manager_access_token_configuration_input`<sup>Optional</sup> <a name="secrets_manager_access_token_configuration_input" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.secretsManagerAccessTokenConfigurationInput"></a>

```python
secrets_manager_access_token_configuration_input: IResolvable | MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a>

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorSourceLocationAccessConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a>

---


### MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference <a name="MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_source_location

mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetHeaderName">reset_header_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetSecretArn">reset_secret_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetSecretStringKey">reset_secret_string_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_header_name` <a name="reset_header_name" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetHeaderName"></a>

```python
def reset_header_name() -> None
```

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```

##### `reset_secret_string_key` <a name="reset_secret_string_key" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetSecretStringKey"></a>

```python
def reset_secret_string_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.headerNameInput">header_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretStringKeyInput">secret_string_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.headerName">header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretStringKey">secret_string_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_name_input`<sup>Optional</sup> <a name="header_name_input" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.headerNameInput"></a>

```python
header_name_input: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `secret_string_key_input`<sup>Optional</sup> <a name="secret_string_key_input" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretStringKeyInput"></a>

```python
secret_string_key_input: str
```

- *Type:* str

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `secret_string_key`<sup>Required</sup> <a name="secret_string_key" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretStringKey"></a>

```python
secret_string_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a>

---


### MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference <a name="MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_source_location

mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resetBaseUrl">reset_base_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_base_url` <a name="reset_base_url" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resetBaseUrl"></a>

```python
def reset_base_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorSourceLocationDefaultSegmentDeliveryConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a>

---


### MediatailorSourceLocationHttpConfigurationOutputReference <a name="MediatailorSourceLocationHttpConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_source_location

mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorSourceLocationHttpConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a>

---


### MediatailorSourceLocationSegmentDeliveryConfigurationsList <a name="MediatailorSourceLocationSegmentDeliveryConfigurationsList" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_source_location

mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediatailorSourceLocationSegmentDeliveryConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>]

---


### MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference <a name="MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_source_location

mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resetBaseUrl">reset_base_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_base_url` <a name="reset_base_url" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resetBaseUrl"></a>

```python
def reset_base_url() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorSourceLocationSegmentDeliveryConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>

---


### MediatailorSourceLocationTagsList <a name="MediatailorSourceLocationTagsList" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_source_location

mediatailorSourceLocation.MediatailorSourceLocationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediatailorSourceLocationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediatailorSourceLocationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>]

---


### MediatailorSourceLocationTagsOutputReference <a name="MediatailorSourceLocationTagsOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediatailor_source_location

mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediatailorSourceLocationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>

---



