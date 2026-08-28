# `apigatewayv2RoutingRule` Submodule <a name="`apigatewayv2RoutingRule` Submodule" id="@cdktn/provider-awscc.apigatewayv2RoutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2RoutingRule <a name="Apigatewayv2RoutingRule" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule awscc_apigatewayv2_routing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  actions: IResolvable | typing.List[Apigatewayv2RoutingRuleActions],
  conditions: IResolvable | typing.List[Apigatewayv2RoutingRuleConditions],
  domain_name_arn: str,
  priority: typing.Union[int, float]
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.actions">actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions">Apigatewayv2RoutingRuleActions</a>]</code> | The resulting action based on matching a routing rules condition. Only InvokeApi is supported. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions">Apigatewayv2RoutingRuleConditions</a>]</code> | The conditions of the routing rule. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.domainNameArn">domain_name_arn</a></code> | <code>str</code> | The ARN of the domain name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The order in which API Gateway evaluates a rule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.actions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions">Apigatewayv2RoutingRuleActions</a>]

The resulting action based on matching a routing rules condition. Only InvokeApi is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#actions Apigatewayv2RoutingRule#actions}

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.conditions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions">Apigatewayv2RoutingRuleConditions</a>]

The conditions of the routing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#conditions Apigatewayv2RoutingRule#conditions}

---

##### `domain_name_arn`<sup>Required</sup> <a name="domain_name_arn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.domainNameArn"></a>

- *Type:* str

The ARN of the domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#domain_name_arn Apigatewayv2RoutingRule#domain_name_arn}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

The order in which API Gateway evaluates a rule.

Priority is evaluated from the lowest value to the highest value. Rules can't have the same priority. Priority values 1-1,000,000 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#priority Apigatewayv2RoutingRule#priority}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putConditions">put_conditions</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_actions` <a name="put_actions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putActions"></a>

```python
def put_actions(
  value: IResolvable | typing.List[Apigatewayv2RoutingRuleActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions">Apigatewayv2RoutingRuleActions</a>]

---

##### `put_conditions` <a name="put_conditions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putConditions"></a>

```python
def put_conditions(
  value: IResolvable | typing.List[Apigatewayv2RoutingRuleConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions">Apigatewayv2RoutingRuleConditions</a>]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Apigatewayv2RoutingRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct"></a>

```python
from cdktn_provider_awscc import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource"></a>

```python
from cdktn_provider_awscc import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Apigatewayv2RoutingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Apigatewayv2RoutingRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Apigatewayv2RoutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2RoutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList">Apigatewayv2RoutingRuleActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList">Apigatewayv2RoutingRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleArn">routing_rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleId">routing_rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.actionsInput">actions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions">Apigatewayv2RoutingRuleActions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.conditionsInput">conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions">Apigatewayv2RoutingRuleConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainNameArnInput">domain_name_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainNameArn">domain_name_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.actions"></a>

```python
actions: Apigatewayv2RoutingRuleActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList">Apigatewayv2RoutingRuleActionsList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.conditions"></a>

```python
conditions: Apigatewayv2RoutingRuleConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList">Apigatewayv2RoutingRuleConditionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `routing_rule_arn`<sup>Required</sup> <a name="routing_rule_arn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleArn"></a>

```python
routing_rule_arn: str
```

- *Type:* str

---

##### `routing_rule_id`<sup>Required</sup> <a name="routing_rule_id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleId"></a>

```python
routing_rule_id: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.actionsInput"></a>

```python
actions_input: IResolvable | typing.List[Apigatewayv2RoutingRuleActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions">Apigatewayv2RoutingRuleActions</a>]

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.conditionsInput"></a>

```python
conditions_input: IResolvable | typing.List[Apigatewayv2RoutingRuleConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions">Apigatewayv2RoutingRuleConditions</a>]

---

##### `domain_name_arn_input`<sup>Optional</sup> <a name="domain_name_arn_input" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainNameArnInput"></a>

```python
domain_name_arn_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain_name_arn`<sup>Required</sup> <a name="domain_name_arn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainNameArn"></a>

```python
domain_name_arn: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2RoutingRuleActions <a name="Apigatewayv2RoutingRuleActions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions(
  invoke_api: Apigatewayv2RoutingRuleActionsInvokeApi
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions.property.invokeApi">invoke_api</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi">Apigatewayv2RoutingRuleActionsInvokeApi</a></code> | Represents an InvokeApi action. |

---

##### `invoke_api`<sup>Required</sup> <a name="invoke_api" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions.property.invokeApi"></a>

```python
invoke_api: Apigatewayv2RoutingRuleActionsInvokeApi
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi">Apigatewayv2RoutingRuleActionsInvokeApi</a>

Represents an InvokeApi action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#invoke_api Apigatewayv2RoutingRule#invoke_api}

---

### Apigatewayv2RoutingRuleActionsInvokeApi <a name="Apigatewayv2RoutingRuleActionsInvokeApi" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi(
  api_id: str,
  stage: str,
  strip_base_path: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi.property.apiId">api_id</a></code> | <code>str</code> | The API identifier of the target API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi.property.stage">stage</a></code> | <code>str</code> | The name of the target stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi.property.stripBasePath">strip_base_path</a></code> | <code>bool \| cdktn.IResolvable</code> | The strip base path setting. |

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

The API identifier of the target API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#api_id Apigatewayv2RoutingRule#api_id}

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi.property.stage"></a>

```python
stage: str
```

- *Type:* str

The name of the target stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#stage Apigatewayv2RoutingRule#stage}

---

##### `strip_base_path`<sup>Optional</sup> <a name="strip_base_path" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi.property.stripBasePath"></a>

```python
strip_base_path: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

The strip base path setting.

When true, API Gateway strips the incoming matched base path when forwarding the request to the target API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#strip_base_path Apigatewayv2RoutingRule#strip_base_path}

---

### Apigatewayv2RoutingRuleConditions <a name="Apigatewayv2RoutingRuleConditions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions(
  match_base_paths: Apigatewayv2RoutingRuleConditionsMatchBasePaths = None,
  match_headers: Apigatewayv2RoutingRuleConditionsMatchHeaders = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions.property.matchBasePaths">match_base_paths</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths">Apigatewayv2RoutingRuleConditionsMatchBasePaths</a></code> | The base path to be matched. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions.property.matchHeaders">match_headers</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders">Apigatewayv2RoutingRuleConditionsMatchHeaders</a></code> | The headers to be matched. |

---

##### `match_base_paths`<sup>Optional</sup> <a name="match_base_paths" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions.property.matchBasePaths"></a>

```python
match_base_paths: Apigatewayv2RoutingRuleConditionsMatchBasePaths
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths">Apigatewayv2RoutingRuleConditionsMatchBasePaths</a>

The base path to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#match_base_paths Apigatewayv2RoutingRule#match_base_paths}

---

##### `match_headers`<sup>Optional</sup> <a name="match_headers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions.property.matchHeaders"></a>

```python
match_headers: Apigatewayv2RoutingRuleConditionsMatchHeaders
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders">Apigatewayv2RoutingRuleConditionsMatchHeaders</a>

The headers to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#match_headers Apigatewayv2RoutingRule#match_headers}

---

### Apigatewayv2RoutingRuleConditionsMatchBasePaths <a name="Apigatewayv2RoutingRuleConditionsMatchBasePaths" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths(
  any_of: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths.property.anyOf">any_of</a></code> | <code>typing.List[str]</code> | The string of the case sensitive base path to be matched. |

---

##### `any_of`<sup>Optional</sup> <a name="any_of" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths.property.anyOf"></a>

```python
any_of: typing.List[str]
```

- *Type:* typing.List[str]

The string of the case sensitive base path to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}

---

### Apigatewayv2RoutingRuleConditionsMatchHeaders <a name="Apigatewayv2RoutingRuleConditionsMatchHeaders" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders(
  any_of: IResolvable | typing.List[Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders.property.anyOf">any_of</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a>]</code> | The header name and header value glob to be matched. |

---

##### `any_of`<sup>Optional</sup> <a name="any_of" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders.property.anyOf"></a>

```python
any_of: IResolvable | typing.List[Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a>]

The header name and header value glob to be matched.

The matchHeaders condition is matched if any of the header name and header value globs are matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}

---

### Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf <a name="Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf(
  header: str = None,
  value_glob: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf.property.header">header</a></code> | <code>str</code> | The case insensitive header name to be matched. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf.property.valueGlob">value_glob</a></code> | <code>str</code> | The case sensitive header glob value to be matched against entire header value. |

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf.property.header"></a>

```python
header: str
```

- *Type:* str

The case insensitive header name to be matched.

The header name must be less than 40 characters and the only allowed characters are `a-z`, `A-Z`, `0-9`, and the following special characters: `*?-!#$%&'.^_`|~.`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#header Apigatewayv2RoutingRule#header}

---

##### `value_glob`<sup>Optional</sup> <a name="value_glob" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf.property.valueGlob"></a>

```python
value_glob: str
```

- *Type:* str

The case sensitive header glob value to be matched against entire header value.

The header glob value must be less than 128 characters and the only allowed characters are `a-z`, `A-Z`, `0-9`, and the following special characters: `*?-!#$%&'.^_`|~`. Wildcard matching is supported for header glob values but must be for `*prefix-match`, `suffix-match*`, or `*infix*-match`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#value_glob Apigatewayv2RoutingRule#value_glob}

---

### Apigatewayv2RoutingRuleConfig <a name="Apigatewayv2RoutingRuleConfig" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  actions: IResolvable | typing.List[Apigatewayv2RoutingRuleActions],
  conditions: IResolvable | typing.List[Apigatewayv2RoutingRuleConditions],
  domain_name_arn: str,
  priority: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.actions">actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions">Apigatewayv2RoutingRuleActions</a>]</code> | The resulting action based on matching a routing rules condition. Only InvokeApi is supported. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions">Apigatewayv2RoutingRuleConditions</a>]</code> | The conditions of the routing rule. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.domainNameArn">domain_name_arn</a></code> | <code>str</code> | The ARN of the domain name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The order in which API Gateway evaluates a rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.actions"></a>

```python
actions: IResolvable | typing.List[Apigatewayv2RoutingRuleActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions">Apigatewayv2RoutingRuleActions</a>]

The resulting action based on matching a routing rules condition. Only InvokeApi is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#actions Apigatewayv2RoutingRule#actions}

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.conditions"></a>

```python
conditions: IResolvable | typing.List[Apigatewayv2RoutingRuleConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions">Apigatewayv2RoutingRuleConditions</a>]

The conditions of the routing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#conditions Apigatewayv2RoutingRule#conditions}

---

##### `domain_name_arn`<sup>Required</sup> <a name="domain_name_arn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.domainNameArn"></a>

```python
domain_name_arn: str
```

- *Type:* str

The ARN of the domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#domain_name_arn Apigatewayv2RoutingRule#domain_name_arn}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The order in which API Gateway evaluates a rule.

Priority is evaluated from the lowest value to the highest value. Rules can't have the same priority. Priority values 1-1,000,000 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#priority Apigatewayv2RoutingRule#priority}

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2RoutingRuleActionsInvokeApiOutputReference <a name="Apigatewayv2RoutingRuleActionsInvokeApiOutputReference" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.resetStripBasePath">reset_strip_base_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_strip_base_path` <a name="reset_strip_base_path" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.resetStripBasePath"></a>

```python
def reset_strip_base_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.apiIdInput">api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stageInput">stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stripBasePathInput">strip_base_path_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stripBasePath">strip_base_path</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi">Apigatewayv2RoutingRuleActionsInvokeApi</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_id_input`<sup>Optional</sup> <a name="api_id_input" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.apiIdInput"></a>

```python
api_id_input: str
```

- *Type:* str

---

##### `stage_input`<sup>Optional</sup> <a name="stage_input" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stageInput"></a>

```python
stage_input: str
```

- *Type:* str

---

##### `strip_base_path_input`<sup>Optional</sup> <a name="strip_base_path_input" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stripBasePathInput"></a>

```python
strip_base_path_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `strip_base_path`<sup>Required</sup> <a name="strip_base_path" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stripBasePath"></a>

```python
strip_base_path: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Apigatewayv2RoutingRuleActionsInvokeApi
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi">Apigatewayv2RoutingRuleActionsInvokeApi</a>

---


### Apigatewayv2RoutingRuleActionsList <a name="Apigatewayv2RoutingRuleActionsList" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Apigatewayv2RoutingRuleActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions">Apigatewayv2RoutingRuleActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Apigatewayv2RoutingRuleActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions">Apigatewayv2RoutingRuleActions</a>]

---


### Apigatewayv2RoutingRuleActionsOutputReference <a name="Apigatewayv2RoutingRuleActionsOutputReference" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.putInvokeApi">put_invoke_api</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_invoke_api` <a name="put_invoke_api" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.putInvokeApi"></a>

```python
def put_invoke_api(
  api_id: str,
  stage: str,
  strip_base_path: bool | IResolvable = None
) -> None
```

###### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.putInvokeApi.parameter.apiId"></a>

- *Type:* str

The API identifier of the target API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#api_id Apigatewayv2RoutingRule#api_id}

---

###### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.putInvokeApi.parameter.stage"></a>

- *Type:* str

The name of the target stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#stage Apigatewayv2RoutingRule#stage}

---

###### `strip_base_path`<sup>Optional</sup> <a name="strip_base_path" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.putInvokeApi.parameter.stripBasePath"></a>

- *Type:* bool | cdktn.IResolvable

The strip base path setting.

When true, API Gateway strips the incoming matched base path when forwarding the request to the target API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#strip_base_path Apigatewayv2RoutingRule#strip_base_path}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.invokeApi">invoke_api</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference">Apigatewayv2RoutingRuleActionsInvokeApiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.invokeApiInput">invoke_api_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi">Apigatewayv2RoutingRuleActionsInvokeApi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions">Apigatewayv2RoutingRuleActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invoke_api`<sup>Required</sup> <a name="invoke_api" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.invokeApi"></a>

```python
invoke_api: Apigatewayv2RoutingRuleActionsInvokeApiOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference">Apigatewayv2RoutingRuleActionsInvokeApiOutputReference</a>

---

##### `invoke_api_input`<sup>Optional</sup> <a name="invoke_api_input" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.invokeApiInput"></a>

```python
invoke_api_input: IResolvable | Apigatewayv2RoutingRuleActionsInvokeApi
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi">Apigatewayv2RoutingRuleActionsInvokeApi</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Apigatewayv2RoutingRuleActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions">Apigatewayv2RoutingRuleActions</a>

---


### Apigatewayv2RoutingRuleConditionsList <a name="Apigatewayv2RoutingRuleConditionsList" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Apigatewayv2RoutingRuleConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions">Apigatewayv2RoutingRuleConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Apigatewayv2RoutingRuleConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions">Apigatewayv2RoutingRuleConditions</a>]

---


### Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference <a name="Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.resetAnyOf">reset_any_of</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_any_of` <a name="reset_any_of" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.resetAnyOf"></a>

```python
def reset_any_of() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.anyOfInput">any_of_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.anyOf">any_of</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths">Apigatewayv2RoutingRuleConditionsMatchBasePaths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `any_of_input`<sup>Optional</sup> <a name="any_of_input" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.anyOfInput"></a>

```python
any_of_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `any_of`<sup>Required</sup> <a name="any_of" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.anyOf"></a>

```python
any_of: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Apigatewayv2RoutingRuleConditionsMatchBasePaths
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths">Apigatewayv2RoutingRuleConditionsMatchBasePaths</a>

---


### Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList <a name="Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a>]

---


### Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference <a name="Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resetValueGlob">reset_value_glob</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_header` <a name="reset_header" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_value_glob` <a name="reset_value_glob" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resetValueGlob"></a>

```python
def reset_value_glob() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.headerInput">header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.valueGlobInput">value_glob_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.header">header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.valueGlob">value_glob</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.headerInput"></a>

```python
header_input: str
```

- *Type:* str

---

##### `value_glob_input`<sup>Optional</sup> <a name="value_glob_input" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.valueGlobInput"></a>

```python
value_glob_input: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.header"></a>

```python
header: str
```

- *Type:* str

---

##### `value_glob`<sup>Required</sup> <a name="value_glob" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.valueGlob"></a>

```python
value_glob: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a>

---


### Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference <a name="Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.putAnyOf">put_any_of</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.resetAnyOf">reset_any_of</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_any_of` <a name="put_any_of" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.putAnyOf"></a>

```python
def put_any_of(
  value: IResolvable | typing.List[Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.putAnyOf.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a>]

---

##### `reset_any_of` <a name="reset_any_of" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.resetAnyOf"></a>

```python
def reset_any_of() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.anyOf">any_of</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.anyOfInput">any_of_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders">Apigatewayv2RoutingRuleConditionsMatchHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `any_of`<sup>Required</sup> <a name="any_of" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.anyOf"></a>

```python
any_of: Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList</a>

---

##### `any_of_input`<sup>Optional</sup> <a name="any_of_input" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.anyOfInput"></a>

```python
any_of_input: IResolvable | typing.List[Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Apigatewayv2RoutingRuleConditionsMatchHeaders
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders">Apigatewayv2RoutingRuleConditionsMatchHeaders</a>

---


### Apigatewayv2RoutingRuleConditionsOutputReference <a name="Apigatewayv2RoutingRuleConditionsOutputReference" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apigatewayv2_routing_rule

apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.putMatchBasePaths">put_match_base_paths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.putMatchHeaders">put_match_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.resetMatchBasePaths">reset_match_base_paths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.resetMatchHeaders">reset_match_headers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_base_paths` <a name="put_match_base_paths" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.putMatchBasePaths"></a>

```python
def put_match_base_paths(
  any_of: typing.List[str] = None
) -> None
```

###### `any_of`<sup>Optional</sup> <a name="any_of" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.putMatchBasePaths.parameter.anyOf"></a>

- *Type:* typing.List[str]

The string of the case sensitive base path to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}

---

##### `put_match_headers` <a name="put_match_headers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.putMatchHeaders"></a>

```python
def put_match_headers(
  any_of: IResolvable | typing.List[Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf] = None
) -> None
```

###### `any_of`<sup>Optional</sup> <a name="any_of" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.putMatchHeaders.parameter.anyOf"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a>]

The header name and header value glob to be matched.

The matchHeaders condition is matched if any of the header name and header value globs are matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}

---

##### `reset_match_base_paths` <a name="reset_match_base_paths" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.resetMatchBasePaths"></a>

```python
def reset_match_base_paths() -> None
```

##### `reset_match_headers` <a name="reset_match_headers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.resetMatchHeaders"></a>

```python
def reset_match_headers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchBasePaths">match_base_paths</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference">Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchHeaders">match_headers</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference">Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchBasePathsInput">match_base_paths_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths">Apigatewayv2RoutingRuleConditionsMatchBasePaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchHeadersInput">match_headers_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders">Apigatewayv2RoutingRuleConditionsMatchHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions">Apigatewayv2RoutingRuleConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_base_paths`<sup>Required</sup> <a name="match_base_paths" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchBasePaths"></a>

```python
match_base_paths: Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference">Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference</a>

---

##### `match_headers`<sup>Required</sup> <a name="match_headers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchHeaders"></a>

```python
match_headers: Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference">Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference</a>

---

##### `match_base_paths_input`<sup>Optional</sup> <a name="match_base_paths_input" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchBasePathsInput"></a>

```python
match_base_paths_input: IResolvable | Apigatewayv2RoutingRuleConditionsMatchBasePaths
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths">Apigatewayv2RoutingRuleConditionsMatchBasePaths</a>

---

##### `match_headers_input`<sup>Optional</sup> <a name="match_headers_input" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchHeadersInput"></a>

```python
match_headers_input: IResolvable | Apigatewayv2RoutingRuleConditionsMatchHeaders
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders">Apigatewayv2RoutingRuleConditionsMatchHeaders</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Apigatewayv2RoutingRuleConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions">Apigatewayv2RoutingRuleConditions</a>

---



