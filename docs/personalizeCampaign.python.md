# `personalizeCampaign` Submodule <a name="`personalizeCampaign` Submodule" id="@cdktn/provider-awscc.personalizeCampaign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersonalizeCampaign <a name="PersonalizeCampaign" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign awscc_personalize_campaign}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_campaign

personalizeCampaign.PersonalizeCampaign(
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
  solution_version_arn: str,
  campaign_config: PersonalizeCampaignCampaignConfig = None,
  min_provisioned_tps: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[PersonalizeCampaignTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the campaign. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.solutionVersionArn">solution_version_arn</a></code> | <code>str</code> | The ARN of the solution version to deploy. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.campaignConfig">campaign_config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a></code> | The configuration details of a campaign. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.minProvisionedTps">min_provisioned_tps</a></code> | <code>typing.Union[int, float]</code> | Specifies the requested minimum provisioned transactions per second. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>]</code> | Tags to associate with the campaign. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.name"></a>

- *Type:* str

The name of the campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#name PersonalizeCampaign#name}

---

##### `solution_version_arn`<sup>Required</sup> <a name="solution_version_arn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.solutionVersionArn"></a>

- *Type:* str

The ARN of the solution version to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#solution_version_arn PersonalizeCampaign#solution_version_arn}

---

##### `campaign_config`<sup>Optional</sup> <a name="campaign_config" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.campaignConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a>

The configuration details of a campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#campaign_config PersonalizeCampaign#campaign_config}

---

##### `min_provisioned_tps`<sup>Optional</sup> <a name="min_provisioned_tps" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.minProvisionedTps"></a>

- *Type:* typing.Union[int, float]

Specifies the requested minimum provisioned transactions per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#min_provisioned_tps PersonalizeCampaign#min_provisioned_tps}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>]

Tags to associate with the campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#tags PersonalizeCampaign#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putCampaignConfig">put_campaign_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetCampaignConfig">reset_campaign_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetMinProvisionedTps">reset_min_provisioned_tps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_campaign_config` <a name="put_campaign_config" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putCampaignConfig"></a>

```python
def put_campaign_config(
  enable_metadata_with_recommendations: bool | IResolvable = None,
  item_exploration_config: typing.Mapping[str] = None,
  ranking_influence: typing.Mapping[typing.Union[int, float]] = None,
  sync_with_latest_solution_version: bool | IResolvable = None
) -> None
```

###### `enable_metadata_with_recommendations`<sup>Optional</sup> <a name="enable_metadata_with_recommendations" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putCampaignConfig.parameter.enableMetadataWithRecommendations"></a>

- *Type:* bool | cdktn.IResolvable

Whether metadata with recommendations is enabled for the campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#enable_metadata_with_recommendations PersonalizeCampaign#enable_metadata_with_recommendations}

---

###### `item_exploration_config`<sup>Optional</sup> <a name="item_exploration_config" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putCampaignConfig.parameter.itemExplorationConfig"></a>

- *Type:* typing.Mapping[str]

Specifies the exploration configuration hyperparameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#item_exploration_config PersonalizeCampaign#item_exploration_config}

---

###### `ranking_influence`<sup>Optional</sup> <a name="ranking_influence" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putCampaignConfig.parameter.rankingInfluence"></a>

- *Type:* typing.Mapping[typing.Union[int, float]]

A map of ranking influence values for POPULARITY and FRESHNESS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#ranking_influence PersonalizeCampaign#ranking_influence}

---

###### `sync_with_latest_solution_version`<sup>Optional</sup> <a name="sync_with_latest_solution_version" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putCampaignConfig.parameter.syncWithLatestSolutionVersion"></a>

- *Type:* bool | cdktn.IResolvable

Whether the campaign automatically updates to use the latest solution version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#sync_with_latest_solution_version PersonalizeCampaign#sync_with_latest_solution_version}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[PersonalizeCampaignTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>]

---

##### `reset_campaign_config` <a name="reset_campaign_config" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetCampaignConfig"></a>

```python
def reset_campaign_config() -> None
```

##### `reset_min_provisioned_tps` <a name="reset_min_provisioned_tps" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetMinProvisionedTps"></a>

```python
def reset_min_provisioned_tps() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PersonalizeCampaign resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isConstruct"></a>

```python
from cdktn_provider_awscc import personalize_campaign

personalizeCampaign.PersonalizeCampaign.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformElement"></a>

```python
from cdktn_provider_awscc import personalize_campaign

personalizeCampaign.PersonalizeCampaign.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformResource"></a>

```python
from cdktn_provider_awscc import personalize_campaign

personalizeCampaign.PersonalizeCampaign.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import personalize_campaign

personalizeCampaign.PersonalizeCampaign.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PersonalizeCampaign resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PersonalizeCampaign to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PersonalizeCampaign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PersonalizeCampaign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignArn">campaign_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignConfig">campaign_config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference">PersonalizeCampaignCampaignConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.creationDateTime">creation_date_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.lastUpdatedDateTime">last_updated_date_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList">PersonalizeCampaignTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignConfigInput">campaign_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.minProvisionedTpsInput">min_provisioned_tps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.solutionVersionArnInput">solution_version_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.minProvisionedTps">min_provisioned_tps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.solutionVersionArn">solution_version_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `campaign_arn`<sup>Required</sup> <a name="campaign_arn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignArn"></a>

```python
campaign_arn: str
```

- *Type:* str

---

##### `campaign_config`<sup>Required</sup> <a name="campaign_config" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignConfig"></a>

```python
campaign_config: PersonalizeCampaignCampaignConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference">PersonalizeCampaignCampaignConfigOutputReference</a>

---

##### `creation_date_time`<sup>Required</sup> <a name="creation_date_time" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.creationDateTime"></a>

```python
creation_date_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_date_time`<sup>Required</sup> <a name="last_updated_date_time" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.lastUpdatedDateTime"></a>

```python
last_updated_date_time: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tags"></a>

```python
tags: PersonalizeCampaignTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList">PersonalizeCampaignTagsList</a>

---

##### `campaign_config_input`<sup>Optional</sup> <a name="campaign_config_input" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignConfigInput"></a>

```python
campaign_config_input: IResolvable | PersonalizeCampaignCampaignConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a>

---

##### `min_provisioned_tps_input`<sup>Optional</sup> <a name="min_provisioned_tps_input" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.minProvisionedTpsInput"></a>

```python
min_provisioned_tps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `solution_version_arn_input`<sup>Optional</sup> <a name="solution_version_arn_input" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.solutionVersionArnInput"></a>

```python
solution_version_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[PersonalizeCampaignTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>]

---

##### `min_provisioned_tps`<sup>Required</sup> <a name="min_provisioned_tps" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.minProvisionedTps"></a>

```python
min_provisioned_tps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `solution_version_arn`<sup>Required</sup> <a name="solution_version_arn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.solutionVersionArn"></a>

```python
solution_version_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PersonalizeCampaignCampaignConfig <a name="PersonalizeCampaignCampaignConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_campaign

personalizeCampaign.PersonalizeCampaignCampaignConfig(
  enable_metadata_with_recommendations: bool | IResolvable = None,
  item_exploration_config: typing.Mapping[str] = None,
  ranking_influence: typing.Mapping[typing.Union[int, float]] = None,
  sync_with_latest_solution_version: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.enableMetadataWithRecommendations">enable_metadata_with_recommendations</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether metadata with recommendations is enabled for the campaign. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.itemExplorationConfig">item_exploration_config</a></code> | <code>typing.Mapping[str]</code> | Specifies the exploration configuration hyperparameters. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.rankingInfluence">ranking_influence</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | A map of ranking influence values for POPULARITY and FRESHNESS. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.syncWithLatestSolutionVersion">sync_with_latest_solution_version</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the campaign automatically updates to use the latest solution version. |

---

##### `enable_metadata_with_recommendations`<sup>Optional</sup> <a name="enable_metadata_with_recommendations" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.enableMetadataWithRecommendations"></a>

```python
enable_metadata_with_recommendations: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether metadata with recommendations is enabled for the campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#enable_metadata_with_recommendations PersonalizeCampaign#enable_metadata_with_recommendations}

---

##### `item_exploration_config`<sup>Optional</sup> <a name="item_exploration_config" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.itemExplorationConfig"></a>

```python
item_exploration_config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specifies the exploration configuration hyperparameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#item_exploration_config PersonalizeCampaign#item_exploration_config}

---

##### `ranking_influence`<sup>Optional</sup> <a name="ranking_influence" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.rankingInfluence"></a>

```python
ranking_influence: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

A map of ranking influence values for POPULARITY and FRESHNESS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#ranking_influence PersonalizeCampaign#ranking_influence}

---

##### `sync_with_latest_solution_version`<sup>Optional</sup> <a name="sync_with_latest_solution_version" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.syncWithLatestSolutionVersion"></a>

```python
sync_with_latest_solution_version: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the campaign automatically updates to use the latest solution version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#sync_with_latest_solution_version PersonalizeCampaign#sync_with_latest_solution_version}

---

### PersonalizeCampaignConfig <a name="PersonalizeCampaignConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_campaign

personalizeCampaign.PersonalizeCampaignConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  solution_version_arn: str,
  campaign_config: PersonalizeCampaignCampaignConfig = None,
  min_provisioned_tps: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[PersonalizeCampaignTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.name">name</a></code> | <code>str</code> | The name of the campaign. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.solutionVersionArn">solution_version_arn</a></code> | <code>str</code> | The ARN of the solution version to deploy. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.campaignConfig">campaign_config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a></code> | The configuration details of a campaign. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.minProvisionedTps">min_provisioned_tps</a></code> | <code>typing.Union[int, float]</code> | Specifies the requested minimum provisioned transactions per second. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>]</code> | Tags to associate with the campaign. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#name PersonalizeCampaign#name}

---

##### `solution_version_arn`<sup>Required</sup> <a name="solution_version_arn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.solutionVersionArn"></a>

```python
solution_version_arn: str
```

- *Type:* str

The ARN of the solution version to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#solution_version_arn PersonalizeCampaign#solution_version_arn}

---

##### `campaign_config`<sup>Optional</sup> <a name="campaign_config" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.campaignConfig"></a>

```python
campaign_config: PersonalizeCampaignCampaignConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a>

The configuration details of a campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#campaign_config PersonalizeCampaign#campaign_config}

---

##### `min_provisioned_tps`<sup>Optional</sup> <a name="min_provisioned_tps" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.minProvisionedTps"></a>

```python
min_provisioned_tps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the requested minimum provisioned transactions per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#min_provisioned_tps PersonalizeCampaign#min_provisioned_tps}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[PersonalizeCampaignTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>]

Tags to associate with the campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#tags PersonalizeCampaign#tags}

---

### PersonalizeCampaignTags <a name="PersonalizeCampaignTags" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_campaign

personalizeCampaign.PersonalizeCampaignTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#key PersonalizeCampaign#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#value PersonalizeCampaign#value}

---

## Classes <a name="Classes" id="Classes"></a>

### PersonalizeCampaignCampaignConfigOutputReference <a name="PersonalizeCampaignCampaignConfigOutputReference" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_campaign

personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetEnableMetadataWithRecommendations">reset_enable_metadata_with_recommendations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetItemExplorationConfig">reset_item_exploration_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetRankingInfluence">reset_ranking_influence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetSyncWithLatestSolutionVersion">reset_sync_with_latest_solution_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_metadata_with_recommendations` <a name="reset_enable_metadata_with_recommendations" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetEnableMetadataWithRecommendations"></a>

```python
def reset_enable_metadata_with_recommendations() -> None
```

##### `reset_item_exploration_config` <a name="reset_item_exploration_config" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetItemExplorationConfig"></a>

```python
def reset_item_exploration_config() -> None
```

##### `reset_ranking_influence` <a name="reset_ranking_influence" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetRankingInfluence"></a>

```python
def reset_ranking_influence() -> None
```

##### `reset_sync_with_latest_solution_version` <a name="reset_sync_with_latest_solution_version" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetSyncWithLatestSolutionVersion"></a>

```python
def reset_sync_with_latest_solution_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.enableMetadataWithRecommendationsInput">enable_metadata_with_recommendations_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.itemExplorationConfigInput">item_exploration_config_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.rankingInfluenceInput">ranking_influence_input</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.syncWithLatestSolutionVersionInput">sync_with_latest_solution_version_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.enableMetadataWithRecommendations">enable_metadata_with_recommendations</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.itemExplorationConfig">item_exploration_config</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.rankingInfluence">ranking_influence</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.syncWithLatestSolutionVersion">sync_with_latest_solution_version</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_metadata_with_recommendations_input`<sup>Optional</sup> <a name="enable_metadata_with_recommendations_input" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.enableMetadataWithRecommendationsInput"></a>

```python
enable_metadata_with_recommendations_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `item_exploration_config_input`<sup>Optional</sup> <a name="item_exploration_config_input" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.itemExplorationConfigInput"></a>

```python
item_exploration_config_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ranking_influence_input`<sup>Optional</sup> <a name="ranking_influence_input" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.rankingInfluenceInput"></a>

```python
ranking_influence_input: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

---

##### `sync_with_latest_solution_version_input`<sup>Optional</sup> <a name="sync_with_latest_solution_version_input" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.syncWithLatestSolutionVersionInput"></a>

```python
sync_with_latest_solution_version_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_metadata_with_recommendations`<sup>Required</sup> <a name="enable_metadata_with_recommendations" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.enableMetadataWithRecommendations"></a>

```python
enable_metadata_with_recommendations: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `item_exploration_config`<sup>Required</sup> <a name="item_exploration_config" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.itemExplorationConfig"></a>

```python
item_exploration_config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ranking_influence`<sup>Required</sup> <a name="ranking_influence" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.rankingInfluence"></a>

```python
ranking_influence: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

---

##### `sync_with_latest_solution_version`<sup>Required</sup> <a name="sync_with_latest_solution_version" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.syncWithLatestSolutionVersion"></a>

```python
sync_with_latest_solution_version: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PersonalizeCampaignCampaignConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a>

---


### PersonalizeCampaignTagsList <a name="PersonalizeCampaignTagsList" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_campaign

personalizeCampaign.PersonalizeCampaignTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PersonalizeCampaignTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PersonalizeCampaignTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>]

---


### PersonalizeCampaignTagsOutputReference <a name="PersonalizeCampaignTagsOutputReference" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_campaign

personalizeCampaign.PersonalizeCampaignTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PersonalizeCampaignTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>

---



