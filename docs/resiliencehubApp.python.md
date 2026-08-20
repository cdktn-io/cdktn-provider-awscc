# `resiliencehubApp` Submodule <a name="`resiliencehubApp` Submodule" id="@cdktn/provider-awscc.resiliencehubApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResiliencehubApp <a name="ResiliencehubApp" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app awscc_resiliencehub_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_app

resiliencehubApp.ResiliencehubApp(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_template_body: str,
  name: str,
  resource_mappings: IResolvable | typing.List[ResiliencehubAppResourceMappings],
  app_assessment_schedule: str = None,
  description: str = None,
  event_subscriptions: IResolvable | typing.List[ResiliencehubAppEventSubscriptions] = None,
  permission_model: ResiliencehubAppPermissionModel = None,
  resiliency_policy_arn: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.appTemplateBody">app_template_body</a></code> | <code>str</code> | A string containing full ResilienceHub app template body. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the app. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.resourceMappings">resource_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>]</code> | An array of ResourceMapping objects. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.appAssessmentSchedule">app_assessment_schedule</a></code> | <code>str</code> | Assessment execution schedule. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.description">description</a></code> | <code>str</code> | App description. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.eventSubscriptions">event_subscriptions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>]</code> | The list of events you would like to subscribe and get notification for. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.permissionModel">permission_model</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a></code> | Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.resiliencyPolicyArn">resiliency_policy_arn</a></code> | <code>str</code> | Amazon Resource Name (ARN) of the Resiliency Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#tags ResiliencehubApp#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_template_body`<sup>Required</sup> <a name="app_template_body" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.appTemplateBody"></a>

- *Type:* str

A string containing full ResilienceHub app template body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#app_template_body ResiliencehubApp#app_template_body}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.name"></a>

- *Type:* str

Name of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#name ResiliencehubApp#name}

---

##### `resource_mappings`<sup>Required</sup> <a name="resource_mappings" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.resourceMappings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>]

An array of ResourceMapping objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#resource_mappings ResiliencehubApp#resource_mappings}

---

##### `app_assessment_schedule`<sup>Optional</sup> <a name="app_assessment_schedule" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.appAssessmentSchedule"></a>

- *Type:* str

Assessment execution schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#app_assessment_schedule ResiliencehubApp#app_assessment_schedule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.description"></a>

- *Type:* str

App description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#description ResiliencehubApp#description}

---

##### `event_subscriptions`<sup>Optional</sup> <a name="event_subscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.eventSubscriptions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>]

The list of events you would like to subscribe and get notification for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#event_subscriptions ResiliencehubApp#event_subscriptions}

---

##### `permission_model`<sup>Optional</sup> <a name="permission_model" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.permissionModel"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a>

Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#permission_model ResiliencehubApp#permission_model}

---

##### `resiliency_policy_arn`<sup>Optional</sup> <a name="resiliency_policy_arn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.resiliencyPolicyArn"></a>

- *Type:* str

Amazon Resource Name (ARN) of the Resiliency Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#resiliency_policy_arn ResiliencehubApp#resiliency_policy_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#tags ResiliencehubApp#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putEventSubscriptions">put_event_subscriptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putPermissionModel">put_permission_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putResourceMappings">put_resource_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetAppAssessmentSchedule">reset_app_assessment_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetEventSubscriptions">reset_event_subscriptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetPermissionModel">reset_permission_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetResiliencyPolicyArn">reset_resiliency_policy_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_event_subscriptions` <a name="put_event_subscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putEventSubscriptions"></a>

```python
def put_event_subscriptions(
  value: IResolvable | typing.List[ResiliencehubAppEventSubscriptions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putEventSubscriptions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>]

---

##### `put_permission_model` <a name="put_permission_model" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putPermissionModel"></a>

```python
def put_permission_model(
  cross_account_role_arns: typing.List[str] = None,
  invoker_role_name: str = None,
  type: str = None
) -> None
```

###### `cross_account_role_arns`<sup>Optional</sup> <a name="cross_account_role_arns" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putPermissionModel.parameter.crossAccountRoleArns"></a>

- *Type:* typing.List[str]

Defines a list of role Amazon Resource Names (ARNs) to be used in other accounts.

These ARNs are used for querying purposes while importing resources and assessing your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#cross_account_role_arns ResiliencehubApp#cross_account_role_arns}

---

###### `invoker_role_name`<sup>Optional</sup> <a name="invoker_role_name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putPermissionModel.parameter.invokerRoleName"></a>

- *Type:* str

Existing AWS IAM role name in the primary AWS account that will be assumed by AWS Resilience Hub Service Principle to obtain a read-only access to your application resources while running an assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#invoker_role_name ResiliencehubApp#invoker_role_name}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putPermissionModel.parameter.type"></a>

- *Type:* str

Defines how AWS Resilience Hub scans your resources.

It can scan for the resources by using a pre-existing role in your AWS account, or by using the credentials of the current IAM user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#type ResiliencehubApp#type}

---

##### `put_resource_mappings` <a name="put_resource_mappings" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putResourceMappings"></a>

```python
def put_resource_mappings(
  value: IResolvable | typing.List[ResiliencehubAppResourceMappings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putResourceMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>]

---

##### `reset_app_assessment_schedule` <a name="reset_app_assessment_schedule" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetAppAssessmentSchedule"></a>

```python
def reset_app_assessment_schedule() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_event_subscriptions` <a name="reset_event_subscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetEventSubscriptions"></a>

```python
def reset_event_subscriptions() -> None
```

##### `reset_permission_model` <a name="reset_permission_model" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetPermissionModel"></a>

```python
def reset_permission_model() -> None
```

##### `reset_resiliency_policy_arn` <a name="reset_resiliency_policy_arn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetResiliencyPolicyArn"></a>

```python
def reset_resiliency_policy_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ResiliencehubApp resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isConstruct"></a>

```python
from cdktn_provider_awscc import resiliencehub_app

resiliencehubApp.ResiliencehubApp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformElement"></a>

```python
from cdktn_provider_awscc import resiliencehub_app

resiliencehubApp.ResiliencehubApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformResource"></a>

```python
from cdktn_provider_awscc import resiliencehub_app

resiliencehubApp.ResiliencehubApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import resiliencehub_app

resiliencehubApp.ResiliencehubApp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ResiliencehubApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ResiliencehubApp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ResiliencehubApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ResiliencehubApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appArn">app_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.driftStatus">drift_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.eventSubscriptions">event_subscriptions</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList">ResiliencehubAppEventSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.permissionModel">permission_model</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference">ResiliencehubAppPermissionModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resourceMappings">resource_mappings</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList">ResiliencehubAppResourceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appAssessmentScheduleInput">app_assessment_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appTemplateBodyInput">app_template_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.eventSubscriptionsInput">event_subscriptions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.permissionModelInput">permission_model_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resiliencyPolicyArnInput">resiliency_policy_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resourceMappingsInput">resource_mappings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appAssessmentSchedule">app_assessment_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appTemplateBody">app_template_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resiliencyPolicyArn">resiliency_policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_arn`<sup>Required</sup> <a name="app_arn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appArn"></a>

```python
app_arn: str
```

- *Type:* str

---

##### `drift_status`<sup>Required</sup> <a name="drift_status" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.driftStatus"></a>

```python
drift_status: str
```

- *Type:* str

---

##### `event_subscriptions`<sup>Required</sup> <a name="event_subscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.eventSubscriptions"></a>

```python
event_subscriptions: ResiliencehubAppEventSubscriptionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList">ResiliencehubAppEventSubscriptionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `permission_model`<sup>Required</sup> <a name="permission_model" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.permissionModel"></a>

```python
permission_model: ResiliencehubAppPermissionModelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference">ResiliencehubAppPermissionModelOutputReference</a>

---

##### `resource_mappings`<sup>Required</sup> <a name="resource_mappings" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resourceMappings"></a>

```python
resource_mappings: ResiliencehubAppResourceMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList">ResiliencehubAppResourceMappingsList</a>

---

##### `app_assessment_schedule_input`<sup>Optional</sup> <a name="app_assessment_schedule_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appAssessmentScheduleInput"></a>

```python
app_assessment_schedule_input: str
```

- *Type:* str

---

##### `app_template_body_input`<sup>Optional</sup> <a name="app_template_body_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appTemplateBodyInput"></a>

```python
app_template_body_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `event_subscriptions_input`<sup>Optional</sup> <a name="event_subscriptions_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.eventSubscriptionsInput"></a>

```python
event_subscriptions_input: IResolvable | typing.List[ResiliencehubAppEventSubscriptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `permission_model_input`<sup>Optional</sup> <a name="permission_model_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.permissionModelInput"></a>

```python
permission_model_input: IResolvable | ResiliencehubAppPermissionModel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a>

---

##### `resiliency_policy_arn_input`<sup>Optional</sup> <a name="resiliency_policy_arn_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resiliencyPolicyArnInput"></a>

```python
resiliency_policy_arn_input: str
```

- *Type:* str

---

##### `resource_mappings_input`<sup>Optional</sup> <a name="resource_mappings_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resourceMappingsInput"></a>

```python
resource_mappings_input: IResolvable | typing.List[ResiliencehubAppResourceMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `app_assessment_schedule`<sup>Required</sup> <a name="app_assessment_schedule" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appAssessmentSchedule"></a>

```python
app_assessment_schedule: str
```

- *Type:* str

---

##### `app_template_body`<sup>Required</sup> <a name="app_template_body" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appTemplateBody"></a>

```python
app_template_body: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resiliency_policy_arn`<sup>Required</sup> <a name="resiliency_policy_arn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resiliencyPolicyArn"></a>

```python
resiliency_policy_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ResiliencehubAppConfig <a name="ResiliencehubAppConfig" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_app

resiliencehubApp.ResiliencehubAppConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_template_body: str,
  name: str,
  resource_mappings: IResolvable | typing.List[ResiliencehubAppResourceMappings],
  app_assessment_schedule: str = None,
  description: str = None,
  event_subscriptions: IResolvable | typing.List[ResiliencehubAppEventSubscriptions] = None,
  permission_model: ResiliencehubAppPermissionModel = None,
  resiliency_policy_arn: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.appTemplateBody">app_template_body</a></code> | <code>str</code> | A string containing full ResilienceHub app template body. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.name">name</a></code> | <code>str</code> | Name of the app. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.resourceMappings">resource_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>]</code> | An array of ResourceMapping objects. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.appAssessmentSchedule">app_assessment_schedule</a></code> | <code>str</code> | Assessment execution schedule. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.description">description</a></code> | <code>str</code> | App description. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.eventSubscriptions">event_subscriptions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>]</code> | The list of events you would like to subscribe and get notification for. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.permissionModel">permission_model</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a></code> | Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.resiliencyPolicyArn">resiliency_policy_arn</a></code> | <code>str</code> | Amazon Resource Name (ARN) of the Resiliency Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#tags ResiliencehubApp#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_template_body`<sup>Required</sup> <a name="app_template_body" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.appTemplateBody"></a>

```python
app_template_body: str
```

- *Type:* str

A string containing full ResilienceHub app template body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#app_template_body ResiliencehubApp#app_template_body}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#name ResiliencehubApp#name}

---

##### `resource_mappings`<sup>Required</sup> <a name="resource_mappings" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.resourceMappings"></a>

```python
resource_mappings: IResolvable | typing.List[ResiliencehubAppResourceMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>]

An array of ResourceMapping objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#resource_mappings ResiliencehubApp#resource_mappings}

---

##### `app_assessment_schedule`<sup>Optional</sup> <a name="app_assessment_schedule" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.appAssessmentSchedule"></a>

```python
app_assessment_schedule: str
```

- *Type:* str

Assessment execution schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#app_assessment_schedule ResiliencehubApp#app_assessment_schedule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.description"></a>

```python
description: str
```

- *Type:* str

App description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#description ResiliencehubApp#description}

---

##### `event_subscriptions`<sup>Optional</sup> <a name="event_subscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.eventSubscriptions"></a>

```python
event_subscriptions: IResolvable | typing.List[ResiliencehubAppEventSubscriptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>]

The list of events you would like to subscribe and get notification for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#event_subscriptions ResiliencehubApp#event_subscriptions}

---

##### `permission_model`<sup>Optional</sup> <a name="permission_model" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.permissionModel"></a>

```python
permission_model: ResiliencehubAppPermissionModel
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a>

Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#permission_model ResiliencehubApp#permission_model}

---

##### `resiliency_policy_arn`<sup>Optional</sup> <a name="resiliency_policy_arn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.resiliencyPolicyArn"></a>

```python
resiliency_policy_arn: str
```

- *Type:* str

Amazon Resource Name (ARN) of the Resiliency Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#resiliency_policy_arn ResiliencehubApp#resiliency_policy_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#tags ResiliencehubApp#tags}.

---

### ResiliencehubAppEventSubscriptions <a name="ResiliencehubAppEventSubscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_app

resiliencehubApp.ResiliencehubAppEventSubscriptions(
  event_type: str = None,
  name: str = None,
  sns_topic_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.eventType">event_type</a></code> | <code>str</code> | The type of event you would like to subscribe and get notification for. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.name">name</a></code> | <code>str</code> | Unique name to identify an event subscription. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic. |

---

##### `event_type`<sup>Optional</sup> <a name="event_type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

The type of event you would like to subscribe and get notification for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#event_type ResiliencehubApp#event_type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name to identify an event subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#name ResiliencehubApp#name}

---

##### `sns_topic_arn`<sup>Optional</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#sns_topic_arn ResiliencehubApp#sns_topic_arn}

---

### ResiliencehubAppPermissionModel <a name="ResiliencehubAppPermissionModel" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_app

resiliencehubApp.ResiliencehubAppPermissionModel(
  cross_account_role_arns: typing.List[str] = None,
  invoker_role_name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.crossAccountRoleArns">cross_account_role_arns</a></code> | <code>typing.List[str]</code> | Defines a list of role Amazon Resource Names (ARNs) to be used in other accounts. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.invokerRoleName">invoker_role_name</a></code> | <code>str</code> | Existing AWS IAM role name in the primary AWS account that will be assumed by AWS Resilience Hub Service Principle to obtain a read-only access to your application resources while running an assessment. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.type">type</a></code> | <code>str</code> | Defines how AWS Resilience Hub scans your resources. |

---

##### `cross_account_role_arns`<sup>Optional</sup> <a name="cross_account_role_arns" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.crossAccountRoleArns"></a>

```python
cross_account_role_arns: typing.List[str]
```

- *Type:* typing.List[str]

Defines a list of role Amazon Resource Names (ARNs) to be used in other accounts.

These ARNs are used for querying purposes while importing resources and assessing your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#cross_account_role_arns ResiliencehubApp#cross_account_role_arns}

---

##### `invoker_role_name`<sup>Optional</sup> <a name="invoker_role_name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.invokerRoleName"></a>

```python
invoker_role_name: str
```

- *Type:* str

Existing AWS IAM role name in the primary AWS account that will be assumed by AWS Resilience Hub Service Principle to obtain a read-only access to your application resources while running an assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#invoker_role_name ResiliencehubApp#invoker_role_name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.type"></a>

```python
type: str
```

- *Type:* str

Defines how AWS Resilience Hub scans your resources.

It can scan for the resources by using a pre-existing role in your AWS account, or by using the credentials of the current IAM user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#type ResiliencehubApp#type}

---

### ResiliencehubAppResourceMappings <a name="ResiliencehubAppResourceMappings" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_app

resiliencehubApp.ResiliencehubAppResourceMappings(
  mapping_type: str,
  physical_resource_id: ResiliencehubAppResourceMappingsPhysicalResourceId,
  eks_source_name: str = None,
  logical_stack_name: str = None,
  resource_name: str = None,
  terraform_source_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.mappingType">mapping_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#mapping_type ResiliencehubApp#mapping_type}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.physicalResourceId">physical_resource_id</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#physical_resource_id ResiliencehubApp#physical_resource_id}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.eksSourceName">eks_source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#eks_source_name ResiliencehubApp#eks_source_name}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.logicalStackName">logical_stack_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#logical_stack_name ResiliencehubApp#logical_stack_name}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.resourceName">resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#resource_name ResiliencehubApp#resource_name}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.terraformSourceName">terraform_source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#terraform_source_name ResiliencehubApp#terraform_source_name}. |

---

##### `mapping_type`<sup>Required</sup> <a name="mapping_type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.mappingType"></a>

```python
mapping_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#mapping_type ResiliencehubApp#mapping_type}.

---

##### `physical_resource_id`<sup>Required</sup> <a name="physical_resource_id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.physicalResourceId"></a>

```python
physical_resource_id: ResiliencehubAppResourceMappingsPhysicalResourceId
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#physical_resource_id ResiliencehubApp#physical_resource_id}.

---

##### `eks_source_name`<sup>Optional</sup> <a name="eks_source_name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.eksSourceName"></a>

```python
eks_source_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#eks_source_name ResiliencehubApp#eks_source_name}.

---

##### `logical_stack_name`<sup>Optional</sup> <a name="logical_stack_name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.logicalStackName"></a>

```python
logical_stack_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#logical_stack_name ResiliencehubApp#logical_stack_name}.

---

##### `resource_name`<sup>Optional</sup> <a name="resource_name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#resource_name ResiliencehubApp#resource_name}.

---

##### `terraform_source_name`<sup>Optional</sup> <a name="terraform_source_name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.terraformSourceName"></a>

```python
terraform_source_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#terraform_source_name ResiliencehubApp#terraform_source_name}.

---

### ResiliencehubAppResourceMappingsPhysicalResourceId <a name="ResiliencehubAppResourceMappingsPhysicalResourceId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_app

resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId(
  identifier: str,
  type: str,
  aws_account_id: str = None,
  aws_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#identifier ResiliencehubApp#identifier}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#type ResiliencehubApp#type}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#aws_account_id ResiliencehubApp#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.awsRegion">aws_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#aws_region ResiliencehubApp#aws_region}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#identifier ResiliencehubApp#identifier}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#type ResiliencehubApp#type}.

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#aws_account_id ResiliencehubApp#aws_account_id}.

---

##### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#aws_region ResiliencehubApp#aws_region}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResiliencehubAppEventSubscriptionsList <a name="ResiliencehubAppEventSubscriptionsList" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_app

resiliencehubApp.ResiliencehubAppEventSubscriptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ResiliencehubAppEventSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ResiliencehubAppEventSubscriptions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>]

---


### ResiliencehubAppEventSubscriptionsOutputReference <a name="ResiliencehubAppEventSubscriptionsOutputReference" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_app

resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetEventType">reset_event_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetSnsTopicArn">reset_sns_topic_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_event_type` <a name="reset_event_type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetEventType"></a>

```python
def reset_event_type() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_sns_topic_arn` <a name="reset_sns_topic_arn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetSnsTopicArn"></a>

```python
def reset_sns_topic_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.eventTypeInput">event_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArnInput">sns_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_type_input`<sup>Optional</sup> <a name="event_type_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.eventTypeInput"></a>

```python
event_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sns_topic_arn_input`<sup>Optional</sup> <a name="sns_topic_arn_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArnInput"></a>

```python
sns_topic_arn_input: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ResiliencehubAppEventSubscriptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions">ResiliencehubAppEventSubscriptions</a>

---


### ResiliencehubAppPermissionModelOutputReference <a name="ResiliencehubAppPermissionModelOutputReference" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_app

resiliencehubApp.ResiliencehubAppPermissionModelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetCrossAccountRoleArns">reset_cross_account_role_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetInvokerRoleName">reset_invoker_role_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cross_account_role_arns` <a name="reset_cross_account_role_arns" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetCrossAccountRoleArns"></a>

```python
def reset_cross_account_role_arns() -> None
```

##### `reset_invoker_role_name` <a name="reset_invoker_role_name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetInvokerRoleName"></a>

```python
def reset_invoker_role_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArnsInput">cross_account_role_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.invokerRoleNameInput">invoker_role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArns">cross_account_role_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.invokerRoleName">invoker_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cross_account_role_arns_input`<sup>Optional</sup> <a name="cross_account_role_arns_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArnsInput"></a>

```python
cross_account_role_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `invoker_role_name_input`<sup>Optional</sup> <a name="invoker_role_name_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.invokerRoleNameInput"></a>

```python
invoker_role_name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `cross_account_role_arns`<sup>Required</sup> <a name="cross_account_role_arns" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArns"></a>

```python
cross_account_role_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `invoker_role_name`<sup>Required</sup> <a name="invoker_role_name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.invokerRoleName"></a>

```python
invoker_role_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ResiliencehubAppPermissionModel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a>

---


### ResiliencehubAppResourceMappingsList <a name="ResiliencehubAppResourceMappingsList" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_app

resiliencehubApp.ResiliencehubAppResourceMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ResiliencehubAppResourceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ResiliencehubAppResourceMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>]

---


### ResiliencehubAppResourceMappingsOutputReference <a name="ResiliencehubAppResourceMappingsOutputReference" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_app

resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.putPhysicalResourceId">put_physical_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetEksSourceName">reset_eks_source_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetLogicalStackName">reset_logical_stack_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetResourceName">reset_resource_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetTerraformSourceName">reset_terraform_source_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_physical_resource_id` <a name="put_physical_resource_id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.putPhysicalResourceId"></a>

```python
def put_physical_resource_id(
  identifier: str,
  type: str,
  aws_account_id: str = None,
  aws_region: str = None
) -> None
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.putPhysicalResourceId.parameter.identifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#identifier ResiliencehubApp#identifier}.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.putPhysicalResourceId.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#type ResiliencehubApp#type}.

---

###### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.putPhysicalResourceId.parameter.awsAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#aws_account_id ResiliencehubApp#aws_account_id}.

---

###### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.putPhysicalResourceId.parameter.awsRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehub_app#aws_region ResiliencehubApp#aws_region}.

---

##### `reset_eks_source_name` <a name="reset_eks_source_name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetEksSourceName"></a>

```python
def reset_eks_source_name() -> None
```

##### `reset_logical_stack_name` <a name="reset_logical_stack_name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetLogicalStackName"></a>

```python
def reset_logical_stack_name() -> None
```

##### `reset_resource_name` <a name="reset_resource_name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetResourceName"></a>

```python
def reset_resource_name() -> None
```

##### `reset_terraform_source_name` <a name="reset_terraform_source_name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetTerraformSourceName"></a>

```python
def reset_terraform_source_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.physicalResourceId">physical_resource_id</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference">ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.eksSourceNameInput">eks_source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.logicalStackNameInput">logical_stack_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.mappingTypeInput">mapping_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.physicalResourceIdInput">physical_resource_id_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.resourceNameInput">resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.terraformSourceNameInput">terraform_source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.eksSourceName">eks_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.logicalStackName">logical_stack_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.mappingType">mapping_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.terraformSourceName">terraform_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `physical_resource_id`<sup>Required</sup> <a name="physical_resource_id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.physicalResourceId"></a>

```python
physical_resource_id: ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference">ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference</a>

---

##### `eks_source_name_input`<sup>Optional</sup> <a name="eks_source_name_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.eksSourceNameInput"></a>

```python
eks_source_name_input: str
```

- *Type:* str

---

##### `logical_stack_name_input`<sup>Optional</sup> <a name="logical_stack_name_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.logicalStackNameInput"></a>

```python
logical_stack_name_input: str
```

- *Type:* str

---

##### `mapping_type_input`<sup>Optional</sup> <a name="mapping_type_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.mappingTypeInput"></a>

```python
mapping_type_input: str
```

- *Type:* str

---

##### `physical_resource_id_input`<sup>Optional</sup> <a name="physical_resource_id_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.physicalResourceIdInput"></a>

```python
physical_resource_id_input: IResolvable | ResiliencehubAppResourceMappingsPhysicalResourceId
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a>

---

##### `resource_name_input`<sup>Optional</sup> <a name="resource_name_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.resourceNameInput"></a>

```python
resource_name_input: str
```

- *Type:* str

---

##### `terraform_source_name_input`<sup>Optional</sup> <a name="terraform_source_name_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.terraformSourceNameInput"></a>

```python
terraform_source_name_input: str
```

- *Type:* str

---

##### `eks_source_name`<sup>Required</sup> <a name="eks_source_name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.eksSourceName"></a>

```python
eks_source_name: str
```

- *Type:* str

---

##### `logical_stack_name`<sup>Required</sup> <a name="logical_stack_name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.logicalStackName"></a>

```python
logical_stack_name: str
```

- *Type:* str

---

##### `mapping_type`<sup>Required</sup> <a name="mapping_type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.mappingType"></a>

```python
mapping_type: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `terraform_source_name`<sup>Required</sup> <a name="terraform_source_name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.terraformSourceName"></a>

```python
terraform_source_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ResiliencehubAppResourceMappings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings">ResiliencehubAppResourceMappings</a>

---


### ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference <a name="ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehub_app

resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resetAwsAccountId">reset_aws_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resetAwsRegion">reset_aws_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_account_id` <a name="reset_aws_account_id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resetAwsAccountId"></a>

```python
def reset_aws_account_id() -> None
```

##### `reset_aws_region` <a name="reset_aws_region" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resetAwsRegion"></a>

```python
def reset_aws_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegionInput">aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `aws_region_input`<sup>Optional</sup> <a name="aws_region_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegionInput"></a>

```python
aws_region_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ResiliencehubAppResourceMappingsPhysicalResourceId
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a>

---



