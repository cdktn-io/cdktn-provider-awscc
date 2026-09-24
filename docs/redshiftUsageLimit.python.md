# `redshiftUsageLimit` Submodule <a name="`redshiftUsageLimit` Submodule" id="@cdktn/provider-awscc.redshiftUsageLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftUsageLimit <a name="RedshiftUsageLimit" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_usage_limit awscc_redshift_usage_limit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_usage_limit

redshiftUsageLimit.RedshiftUsageLimit(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  amount: typing.Union[int, float],
  cluster_identifier: str,
  feature_type: str,
  limit_type: str,
  breach_action: str = None,
  period: str = None,
  tags: IResolvable | typing.List[RedshiftUsageLimitTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.amount">amount</a></code> | <code>typing.Union[int, float]</code> | The limit amount. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | The identifier of the cluster that you want to limit usage. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.featureType">feature_type</a></code> | <code>str</code> | The Amazon Redshift feature that you want to limit. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.limitType">limit_type</a></code> | <code>str</code> | The type of limit. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.breachAction">breach_action</a></code> | <code>str</code> | The action that Amazon Redshift takes when the limit is reached. The default is log. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.period">period</a></code> | <code>str</code> | The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags">RedshiftUsageLimitTags</a>]</code> | A list of tag instances. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.amount"></a>

- *Type:* typing.Union[int, float]

The limit amount.

If time-based, this amount is in minutes. If data-based, this amount is in terabytes (TB). The value must be a positive number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_usage_limit#amount RedshiftUsageLimit#amount}

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.clusterIdentifier"></a>

- *Type:* str

The identifier of the cluster that you want to limit usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_usage_limit#cluster_identifier RedshiftUsageLimit#cluster_identifier}

---

##### `feature_type`<sup>Required</sup> <a name="feature_type" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.featureType"></a>

- *Type:* str

The Amazon Redshift feature that you want to limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_usage_limit#feature_type RedshiftUsageLimit#feature_type}

---

##### `limit_type`<sup>Required</sup> <a name="limit_type" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.limitType"></a>

- *Type:* str

The type of limit.

Depending on the feature type, this can be based on a time duration or data size. If FeatureType is spectrum, then LimitType must be data-scanned. If FeatureType is concurrency-scaling, then LimitType must be time. If FeatureType is cross-region-datasharing, then LimitType must be data-scanned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_usage_limit#limit_type RedshiftUsageLimit#limit_type}

---

##### `breach_action`<sup>Optional</sup> <a name="breach_action" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.breachAction"></a>

- *Type:* str

The action that Amazon Redshift takes when the limit is reached. The default is log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_usage_limit#breach_action RedshiftUsageLimit#breach_action}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.period"></a>

- *Type:* str

The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_usage_limit#period RedshiftUsageLimit#period}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags">RedshiftUsageLimitTags</a>]

A list of tag instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_usage_limit#tags RedshiftUsageLimit#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.resetBreachAction">reset_breach_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RedshiftUsageLimitTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags">RedshiftUsageLimitTags</a>]

---

##### `reset_breach_action` <a name="reset_breach_action" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.resetBreachAction"></a>

```python
def reset_breach_action() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RedshiftUsageLimit resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.isConstruct"></a>

```python
from cdktn_provider_awscc import redshift_usage_limit

redshiftUsageLimit.RedshiftUsageLimit.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.isTerraformElement"></a>

```python
from cdktn_provider_awscc import redshift_usage_limit

redshiftUsageLimit.RedshiftUsageLimit.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.isTerraformResource"></a>

```python
from cdktn_provider_awscc import redshift_usage_limit

redshiftUsageLimit.RedshiftUsageLimit.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import redshift_usage_limit

redshiftUsageLimit.RedshiftUsageLimit.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RedshiftUsageLimit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RedshiftUsageLimit to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RedshiftUsageLimit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_usage_limit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftUsageLimit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList">RedshiftUsageLimitTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.usageLimitId">usage_limit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.amountInput">amount_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.breachActionInput">breach_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.clusterIdentifierInput">cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.featureTypeInput">feature_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.limitTypeInput">limit_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.periodInput">period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags">RedshiftUsageLimitTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.amount">amount</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.breachAction">breach_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.featureType">feature_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.limitType">limit_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.period">period</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.tags"></a>

```python
tags: RedshiftUsageLimitTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList">RedshiftUsageLimitTagsList</a>

---

##### `usage_limit_id`<sup>Required</sup> <a name="usage_limit_id" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.usageLimitId"></a>

```python
usage_limit_id: str
```

- *Type:* str

---

##### `amount_input`<sup>Optional</sup> <a name="amount_input" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.amountInput"></a>

```python
amount_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `breach_action_input`<sup>Optional</sup> <a name="breach_action_input" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.breachActionInput"></a>

```python
breach_action_input: str
```

- *Type:* str

---

##### `cluster_identifier_input`<sup>Optional</sup> <a name="cluster_identifier_input" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.clusterIdentifierInput"></a>

```python
cluster_identifier_input: str
```

- *Type:* str

---

##### `feature_type_input`<sup>Optional</sup> <a name="feature_type_input" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.featureTypeInput"></a>

```python
feature_type_input: str
```

- *Type:* str

---

##### `limit_type_input`<sup>Optional</sup> <a name="limit_type_input" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.limitTypeInput"></a>

```python
limit_type_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.periodInput"></a>

```python
period_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RedshiftUsageLimitTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags">RedshiftUsageLimitTags</a>]

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.amount"></a>

```python
amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `breach_action`<sup>Required</sup> <a name="breach_action" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.breachAction"></a>

```python
breach_action: str
```

- *Type:* str

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

---

##### `feature_type`<sup>Required</sup> <a name="feature_type" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.featureType"></a>

```python
feature_type: str
```

- *Type:* str

---

##### `limit_type`<sup>Required</sup> <a name="limit_type" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.limitType"></a>

```python
limit_type: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.period"></a>

```python
period: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimit.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftUsageLimitConfig <a name="RedshiftUsageLimitConfig" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_usage_limit

redshiftUsageLimit.RedshiftUsageLimitConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  amount: typing.Union[int, float],
  cluster_identifier: str,
  feature_type: str,
  limit_type: str,
  breach_action: str = None,
  period: str = None,
  tags: IResolvable | typing.List[RedshiftUsageLimitTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.amount">amount</a></code> | <code>typing.Union[int, float]</code> | The limit amount. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | The identifier of the cluster that you want to limit usage. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.featureType">feature_type</a></code> | <code>str</code> | The Amazon Redshift feature that you want to limit. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.limitType">limit_type</a></code> | <code>str</code> | The type of limit. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.breachAction">breach_action</a></code> | <code>str</code> | The action that Amazon Redshift takes when the limit is reached. The default is log. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.period">period</a></code> | <code>str</code> | The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags">RedshiftUsageLimitTags</a>]</code> | A list of tag instances. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.amount"></a>

```python
amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The limit amount.

If time-based, this amount is in minutes. If data-based, this amount is in terabytes (TB). The value must be a positive number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_usage_limit#amount RedshiftUsageLimit#amount}

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

The identifier of the cluster that you want to limit usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_usage_limit#cluster_identifier RedshiftUsageLimit#cluster_identifier}

---

##### `feature_type`<sup>Required</sup> <a name="feature_type" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.featureType"></a>

```python
feature_type: str
```

- *Type:* str

The Amazon Redshift feature that you want to limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_usage_limit#feature_type RedshiftUsageLimit#feature_type}

---

##### `limit_type`<sup>Required</sup> <a name="limit_type" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.limitType"></a>

```python
limit_type: str
```

- *Type:* str

The type of limit.

Depending on the feature type, this can be based on a time duration or data size. If FeatureType is spectrum, then LimitType must be data-scanned. If FeatureType is concurrency-scaling, then LimitType must be time. If FeatureType is cross-region-datasharing, then LimitType must be data-scanned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_usage_limit#limit_type RedshiftUsageLimit#limit_type}

---

##### `breach_action`<sup>Optional</sup> <a name="breach_action" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.breachAction"></a>

```python
breach_action: str
```

- *Type:* str

The action that Amazon Redshift takes when the limit is reached. The default is log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_usage_limit#breach_action RedshiftUsageLimit#breach_action}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.period"></a>

```python
period: str
```

- *Type:* str

The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_usage_limit#period RedshiftUsageLimit#period}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RedshiftUsageLimitTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags">RedshiftUsageLimitTags</a>]

A list of tag instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_usage_limit#tags RedshiftUsageLimit#tags}

---

### RedshiftUsageLimitTags <a name="RedshiftUsageLimitTags" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_usage_limit

redshiftUsageLimit.RedshiftUsageLimitTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags.property.key">key</a></code> | <code>str</code> | The key, or name, for the resource tag. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags.property.value">value</a></code> | <code>str</code> | The value for the resource tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key, or name, for the resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_usage_limit#key RedshiftUsageLimit#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/redshift_usage_limit#value RedshiftUsageLimit#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftUsageLimitTagsList <a name="RedshiftUsageLimitTagsList" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_usage_limit

redshiftUsageLimit.RedshiftUsageLimitTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedshiftUsageLimitTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags">RedshiftUsageLimitTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RedshiftUsageLimitTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags">RedshiftUsageLimitTags</a>]

---


### RedshiftUsageLimitTagsOutputReference <a name="RedshiftUsageLimitTagsOutputReference" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import redshift_usage_limit

redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags">RedshiftUsageLimitTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RedshiftUsageLimitTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.redshiftUsageLimit.RedshiftUsageLimitTags">RedshiftUsageLimitTags</a>

---



