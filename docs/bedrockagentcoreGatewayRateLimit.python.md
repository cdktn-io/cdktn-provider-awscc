# `bedrockagentcoreGatewayRateLimit` Submodule <a name="`bedrockagentcoreGatewayRateLimit` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreGatewayRateLimit <a name="BedrockagentcoreGatewayRateLimit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit awscc_bedrockagentcore_gateway_rate_limit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_gateway_rate_limit

bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dimension_keys: typing.List[str],
  entries: IResolvable | typing.List[BedrockagentcoreGatewayRateLimitEntries],
  description: str = None,
  gateway_identifier: str = None,
  rate_limit_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.dimensionKeys">dimension_keys</a></code> | <code>typing.List[str]</code> | Ordered list of dimension names defining the scope of this limit. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.entries">entries</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>]</code> | Rule entries mapping dimension values to rate configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional human-readable description for this limit. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.gatewayIdentifier">gateway_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#gateway_identifier BedrockagentcoreGatewayRateLimit#gateway_identifier}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.rateLimitId">rate_limit_id</a></code> | <code>str</code> | Limit identifier. Optional on Create (system-generates if not provided by customer). Always present in responses. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dimension_keys`<sup>Required</sup> <a name="dimension_keys" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.dimensionKeys"></a>

- *Type:* typing.List[str]

Ordered list of dimension names defining the scope of this limit.

Unique per gateway — no two limits can share the same dimensionKeys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#dimension_keys BedrockagentcoreGatewayRateLimit#dimension_keys}

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.entries"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>]

Rule entries mapping dimension values to rate configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#entries BedrockagentcoreGatewayRateLimit#entries}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.description"></a>

- *Type:* str

Optional human-readable description for this limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#description BedrockagentcoreGatewayRateLimit#description}

---

##### `gateway_identifier`<sup>Optional</sup> <a name="gateway_identifier" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.gatewayIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#gateway_identifier BedrockagentcoreGatewayRateLimit#gateway_identifier}.

---

##### `rate_limit_id`<sup>Optional</sup> <a name="rate_limit_id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.rateLimitId"></a>

- *Type:* str

Limit identifier. Optional on Create (system-generates if not provided by customer). Always present in responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate_limit_id BedrockagentcoreGatewayRateLimit#rate_limit_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.putEntries">put_entries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetGatewayIdentifier">reset_gateway_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetRateLimitId">reset_rate_limit_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_entries` <a name="put_entries" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.putEntries"></a>

```python
def put_entries(
  value: IResolvable | typing.List[BedrockagentcoreGatewayRateLimitEntries]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.putEntries.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_gateway_identifier` <a name="reset_gateway_identifier" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetGatewayIdentifier"></a>

```python
def reset_gateway_identifier() -> None
```

##### `reset_rate_limit_id` <a name="reset_rate_limit_id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetRateLimitId"></a>

```python
def reset_rate_limit_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BedrockagentcoreGatewayRateLimit resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isConstruct"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_gateway_rate_limit

bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformElement"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_gateway_rate_limit

bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformResource"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_gateway_rate_limit

bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_gateway_rate_limit

bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BedrockagentcoreGatewayRateLimit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BedrockagentcoreGatewayRateLimit to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BedrockagentcoreGatewayRateLimit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreGatewayRateLimit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList">BedrockagentcoreGatewayRateLimitEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dimensionKeysInput">dimension_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.entriesInput">entries_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.gatewayIdentifierInput">gateway_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.rateLimitIdInput">rate_limit_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dimensionKeys">dimension_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.gatewayIdentifier">gateway_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.rateLimitId">rate_limit_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.entries"></a>

```python
entries: BedrockagentcoreGatewayRateLimitEntriesList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList">BedrockagentcoreGatewayRateLimitEntriesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dimension_keys_input`<sup>Optional</sup> <a name="dimension_keys_input" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dimensionKeysInput"></a>

```python
dimension_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entries_input`<sup>Optional</sup> <a name="entries_input" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.entriesInput"></a>

```python
entries_input: IResolvable | typing.List[BedrockagentcoreGatewayRateLimitEntries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>]

---

##### `gateway_identifier_input`<sup>Optional</sup> <a name="gateway_identifier_input" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.gatewayIdentifierInput"></a>

```python
gateway_identifier_input: str
```

- *Type:* str

---

##### `rate_limit_id_input`<sup>Optional</sup> <a name="rate_limit_id_input" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.rateLimitIdInput"></a>

```python
rate_limit_id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dimension_keys`<sup>Required</sup> <a name="dimension_keys" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dimensionKeys"></a>

```python
dimension_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gateway_identifier`<sup>Required</sup> <a name="gateway_identifier" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.gatewayIdentifier"></a>

```python
gateway_identifier: str
```

- *Type:* str

---

##### `rate_limit_id`<sup>Required</sup> <a name="rate_limit_id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.rateLimitId"></a>

```python
rate_limit_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreGatewayRateLimitConfig <a name="BedrockagentcoreGatewayRateLimitConfig" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_gateway_rate_limit

bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dimension_keys: typing.List[str],
  entries: IResolvable | typing.List[BedrockagentcoreGatewayRateLimitEntries],
  description: str = None,
  gateway_identifier: str = None,
  rate_limit_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.dimensionKeys">dimension_keys</a></code> | <code>typing.List[str]</code> | Ordered list of dimension names defining the scope of this limit. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.entries">entries</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>]</code> | Rule entries mapping dimension values to rate configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.description">description</a></code> | <code>str</code> | Optional human-readable description for this limit. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.gatewayIdentifier">gateway_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#gateway_identifier BedrockagentcoreGatewayRateLimit#gateway_identifier}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.rateLimitId">rate_limit_id</a></code> | <code>str</code> | Limit identifier. Optional on Create (system-generates if not provided by customer). Always present in responses. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dimension_keys`<sup>Required</sup> <a name="dimension_keys" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.dimensionKeys"></a>

```python
dimension_keys: typing.List[str]
```

- *Type:* typing.List[str]

Ordered list of dimension names defining the scope of this limit.

Unique per gateway — no two limits can share the same dimensionKeys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#dimension_keys BedrockagentcoreGatewayRateLimit#dimension_keys}

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.entries"></a>

```python
entries: IResolvable | typing.List[BedrockagentcoreGatewayRateLimitEntries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>]

Rule entries mapping dimension values to rate configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#entries BedrockagentcoreGatewayRateLimit#entries}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional human-readable description for this limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#description BedrockagentcoreGatewayRateLimit#description}

---

##### `gateway_identifier`<sup>Optional</sup> <a name="gateway_identifier" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.gatewayIdentifier"></a>

```python
gateway_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#gateway_identifier BedrockagentcoreGatewayRateLimit#gateway_identifier}.

---

##### `rate_limit_id`<sup>Optional</sup> <a name="rate_limit_id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.rateLimitId"></a>

```python
rate_limit_id: str
```

- *Type:* str

Limit identifier. Optional on Create (system-generates if not provided by customer). Always present in responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate_limit_id BedrockagentcoreGatewayRateLimit#rate_limit_id}

---

### BedrockagentcoreGatewayRateLimitEntries <a name="BedrockagentcoreGatewayRateLimitEntries" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_gateway_rate_limit

bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries(
  dimensions: typing.Mapping[str],
  connections: IResolvable | typing.List[BedrockagentcoreGatewayRateLimitEntriesConnections] = None,
  requests: IResolvable | typing.List[BedrockagentcoreGatewayRateLimitEntriesRequests] = None,
  tokens: IResolvable | typing.List[BedrockagentcoreGatewayRateLimitEntriesTokens] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | Map of dimension name to dimension value for a rule entry. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.connections">connections</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>]</code> | Connection rate limits (per second only). Limited to 1 entry for now. — P2. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.requests">requests</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>]</code> | Request rate limits (RPS or RPM). Limited to 1 entry for now. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.tokens">tokens</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>]</code> | Token rate limits (TPM). Limited to 1 entry for now. — P1. |

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.dimensions"></a>

```python
dimensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of dimension name to dimension value for a rule entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#dimensions BedrockagentcoreGatewayRateLimit#dimensions}

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.connections"></a>

```python
connections: IResolvable | typing.List[BedrockagentcoreGatewayRateLimitEntriesConnections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>]

Connection rate limits (per second only). Limited to 1 entry for now. — P2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#connections BedrockagentcoreGatewayRateLimit#connections}

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.requests"></a>

```python
requests: IResolvable | typing.List[BedrockagentcoreGatewayRateLimitEntriesRequests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>]

Request rate limits (RPS or RPM). Limited to 1 entry for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#requests BedrockagentcoreGatewayRateLimit#requests}

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.tokens"></a>

```python
tokens: IResolvable | typing.List[BedrockagentcoreGatewayRateLimitEntriesTokens]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>]

Token rate limits (TPM). Limited to 1 entry for now. — P1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#tokens BedrockagentcoreGatewayRateLimit#tokens}

---

### BedrockagentcoreGatewayRateLimitEntriesConnections <a name="BedrockagentcoreGatewayRateLimitEntriesConnections" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_gateway_rate_limit

bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections(
  period: str = None,
  rate: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections.property.period">period</a></code> | <code>str</code> | Time period for rate limiting. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections.property.rate">rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}. |

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections.property.period"></a>

```python
period: str
```

- *Type:* str

Time period for rate limiting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#period BedrockagentcoreGatewayRateLimit#period}

---

##### `rate`<sup>Optional</sup> <a name="rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections.property.rate"></a>

```python
rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}.

---

### BedrockagentcoreGatewayRateLimitEntriesRequests <a name="BedrockagentcoreGatewayRateLimitEntriesRequests" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_gateway_rate_limit

bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests(
  period: str = None,
  rate: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests.property.period">period</a></code> | <code>str</code> | Time period for rate limiting. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests.property.rate">rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}. |

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests.property.period"></a>

```python
period: str
```

- *Type:* str

Time period for rate limiting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#period BedrockagentcoreGatewayRateLimit#period}

---

##### `rate`<sup>Optional</sup> <a name="rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests.property.rate"></a>

```python
rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}.

---

### BedrockagentcoreGatewayRateLimitEntriesTokens <a name="BedrockagentcoreGatewayRateLimitEntriesTokens" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_gateway_rate_limit

bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens(
  period: str = None,
  rate: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens.property.period">period</a></code> | <code>str</code> | Time period for rate limiting. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens.property.rate">rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}. |

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens.property.period"></a>

```python
period: str
```

- *Type:* str

Time period for rate limiting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#period BedrockagentcoreGatewayRateLimit#period}

---

##### `rate`<sup>Optional</sup> <a name="rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens.property.rate"></a>

```python
rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreGatewayRateLimitEntriesConnectionsList <a name="BedrockagentcoreGatewayRateLimitEntriesConnectionsList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_gateway_rate_limit

bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayRateLimitEntriesConnections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>]

---


### BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference <a name="BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_gateway_rate_limit

bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resetRate">reset_rate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_period` <a name="reset_period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_rate` <a name="reset_rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resetRate"></a>

```python
def reset_rate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.periodInput">period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.rateInput">rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.rate">rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.periodInput"></a>

```python
period_input: str
```

- *Type:* str

---

##### `rate_input`<sup>Optional</sup> <a name="rate_input" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.rateInput"></a>

```python
rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.rate"></a>

```python
rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayRateLimitEntriesConnections
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>

---


### BedrockagentcoreGatewayRateLimitEntriesList <a name="BedrockagentcoreGatewayRateLimitEntriesList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_gateway_rate_limit

bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayRateLimitEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayRateLimitEntries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>]

---


### BedrockagentcoreGatewayRateLimitEntriesOutputReference <a name="BedrockagentcoreGatewayRateLimitEntriesOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_gateway_rate_limit

bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putConnections">put_connections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putRequests">put_requests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putTokens">put_tokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetConnections">reset_connections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetRequests">reset_requests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetTokens">reset_tokens</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_connections` <a name="put_connections" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putConnections"></a>

```python
def put_connections(
  value: IResolvable | typing.List[BedrockagentcoreGatewayRateLimitEntriesConnections]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putConnections.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>]

---

##### `put_requests` <a name="put_requests" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putRequests"></a>

```python
def put_requests(
  value: IResolvable | typing.List[BedrockagentcoreGatewayRateLimitEntriesRequests]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putRequests.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>]

---

##### `put_tokens` <a name="put_tokens" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putTokens"></a>

```python
def put_tokens(
  value: IResolvable | typing.List[BedrockagentcoreGatewayRateLimitEntriesTokens]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putTokens.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>]

---

##### `reset_connections` <a name="reset_connections" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetConnections"></a>

```python
def reset_connections() -> None
```

##### `reset_requests` <a name="reset_requests" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetRequests"></a>

```python
def reset_requests() -> None
```

##### `reset_tokens` <a name="reset_tokens" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetTokens"></a>

```python
def reset_tokens() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.connections">connections</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList">BedrockagentcoreGatewayRateLimitEntriesConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.requests">requests</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList">BedrockagentcoreGatewayRateLimitEntriesRequestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.tokens">tokens</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList">BedrockagentcoreGatewayRateLimitEntriesTokensList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.connectionsInput">connections_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.requestsInput">requests_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.tokensInput">tokens_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.connections"></a>

```python
connections: BedrockagentcoreGatewayRateLimitEntriesConnectionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList">BedrockagentcoreGatewayRateLimitEntriesConnectionsList</a>

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.requests"></a>

```python
requests: BedrockagentcoreGatewayRateLimitEntriesRequestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList">BedrockagentcoreGatewayRateLimitEntriesRequestsList</a>

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.tokens"></a>

```python
tokens: BedrockagentcoreGatewayRateLimitEntriesTokensList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList">BedrockagentcoreGatewayRateLimitEntriesTokensList</a>

---

##### `connections_input`<sup>Optional</sup> <a name="connections_input" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.connectionsInput"></a>

```python
connections_input: IResolvable | typing.List[BedrockagentcoreGatewayRateLimitEntriesConnections]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>]

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `requests_input`<sup>Optional</sup> <a name="requests_input" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.requestsInput"></a>

```python
requests_input: IResolvable | typing.List[BedrockagentcoreGatewayRateLimitEntriesRequests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>]

---

##### `tokens_input`<sup>Optional</sup> <a name="tokens_input" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.tokensInput"></a>

```python
tokens_input: IResolvable | typing.List[BedrockagentcoreGatewayRateLimitEntriesTokens]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>]

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.dimensions"></a>

```python
dimensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayRateLimitEntries
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>

---


### BedrockagentcoreGatewayRateLimitEntriesRequestsList <a name="BedrockagentcoreGatewayRateLimitEntriesRequestsList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_gateway_rate_limit

bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayRateLimitEntriesRequests]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>]

---


### BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference <a name="BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_gateway_rate_limit

bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resetRate">reset_rate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_period` <a name="reset_period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_rate` <a name="reset_rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resetRate"></a>

```python
def reset_rate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.periodInput">period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.rateInput">rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.rate">rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.periodInput"></a>

```python
period_input: str
```

- *Type:* str

---

##### `rate_input`<sup>Optional</sup> <a name="rate_input" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.rateInput"></a>

```python
rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.rate"></a>

```python
rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayRateLimitEntriesRequests
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>

---


### BedrockagentcoreGatewayRateLimitEntriesTokensList <a name="BedrockagentcoreGatewayRateLimitEntriesTokensList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_gateway_rate_limit

bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BedrockagentcoreGatewayRateLimitEntriesTokens]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>]

---


### BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference <a name="BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import bedrockagentcore_gateway_rate_limit

bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resetRate">reset_rate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_period` <a name="reset_period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_rate` <a name="reset_rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resetRate"></a>

```python
def reset_rate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.periodInput">period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.rateInput">rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.rate">rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.periodInput"></a>

```python
period_input: str
```

- *Type:* str

---

##### `rate_input`<sup>Optional</sup> <a name="rate_input" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.rateInput"></a>

```python
rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.rate"></a>

```python
rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BedrockagentcoreGatewayRateLimitEntriesTokens
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>

---



