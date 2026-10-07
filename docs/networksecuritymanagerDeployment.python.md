# `networksecuritymanagerDeployment` Submodule <a name="`networksecuritymanagerDeployment` Submodule" id="@cdktn/provider-awscc.networksecuritymanagerDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerDeployment <a name="NetworksecuritymanagerDeployment" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment awscc_networksecuritymanager_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_deployment

networksecuritymanagerDeployment.NetworksecuritymanagerDeployment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  deployment_name: str,
  associated_policy_list: IResolvable | typing.List[NetworksecuritymanagerDeploymentAssociatedPolicyListStruct] = None,
  associated_scope_list: IResolvable | typing.List[NetworksecuritymanagerDeploymentAssociatedScopeListStruct] = None,
  deployment_configuration: NetworksecuritymanagerDeploymentDeploymentConfiguration = None,
  deployment_description: str = None,
  tags: IResolvable | typing.List[NetworksecuritymanagerDeploymentTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.deploymentName">deployment_name</a></code> | <code>str</code> | The name of the deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.associatedPolicyList">associated_policy_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>]</code> | List of policies associated with this deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.associatedScopeList">associated_scope_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>]</code> | List of scopes associated with this deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.deploymentConfiguration">deployment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a></code> | Configuration settings for the deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.deploymentDescription">deployment_description</a></code> | <code>str</code> | A description of the deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>]</code> | The tags associated with the deployment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deployment_name`<sup>Required</sup> <a name="deployment_name" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.deploymentName"></a>

- *Type:* str

The name of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_name NetworksecuritymanagerDeployment#deployment_name}

---

##### `associated_policy_list`<sup>Optional</sup> <a name="associated_policy_list" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.associatedPolicyList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>]

List of policies associated with this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#associated_policy_list NetworksecuritymanagerDeployment#associated_policy_list}

---

##### `associated_scope_list`<sup>Optional</sup> <a name="associated_scope_list" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.associatedScopeList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>]

List of scopes associated with this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#associated_scope_list NetworksecuritymanagerDeployment#associated_scope_list}

---

##### `deployment_configuration`<sup>Optional</sup> <a name="deployment_configuration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.deploymentConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a>

Configuration settings for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_configuration NetworksecuritymanagerDeployment#deployment_configuration}

---

##### `deployment_description`<sup>Optional</sup> <a name="deployment_description" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.deploymentDescription"></a>

- *Type:* str

A description of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_description NetworksecuritymanagerDeployment#deployment_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>]

The tags associated with the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#tags NetworksecuritymanagerDeployment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedPolicyList">put_associated_policy_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedScopeList">put_associated_scope_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putDeploymentConfiguration">put_deployment_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetAssociatedPolicyList">reset_associated_policy_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetAssociatedScopeList">reset_associated_scope_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetDeploymentConfiguration">reset_deployment_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetDeploymentDescription">reset_deployment_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_associated_policy_list` <a name="put_associated_policy_list" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedPolicyList"></a>

```python
def put_associated_policy_list(
  value: IResolvable | typing.List[NetworksecuritymanagerDeploymentAssociatedPolicyListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedPolicyList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>]

---

##### `put_associated_scope_list` <a name="put_associated_scope_list" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedScopeList"></a>

```python
def put_associated_scope_list(
  value: IResolvable | typing.List[NetworksecuritymanagerDeploymentAssociatedScopeListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putAssociatedScopeList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>]

---

##### `put_deployment_configuration` <a name="put_deployment_configuration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putDeploymentConfiguration"></a>

```python
def put_deployment_configuration(
  enable_cross_account_visibility: bool | IResolvable = None
) -> None
```

###### `enable_cross_account_visibility`<sup>Optional</sup> <a name="enable_cross_account_visibility" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putDeploymentConfiguration.parameter.enableCrossAccountVisibility"></a>

- *Type:* bool | cdktn.IResolvable

Whether cross-account visibility is enabled for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#enable_cross_account_visibility NetworksecuritymanagerDeployment#enable_cross_account_visibility}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NetworksecuritymanagerDeploymentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>]

---

##### `reset_associated_policy_list` <a name="reset_associated_policy_list" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetAssociatedPolicyList"></a>

```python
def reset_associated_policy_list() -> None
```

##### `reset_associated_scope_list` <a name="reset_associated_scope_list" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetAssociatedScopeList"></a>

```python
def reset_associated_scope_list() -> None
```

##### `reset_deployment_configuration` <a name="reset_deployment_configuration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetDeploymentConfiguration"></a>

```python
def reset_deployment_configuration() -> None
```

##### `reset_deployment_description` <a name="reset_deployment_description" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetDeploymentDescription"></a>

```python
def reset_deployment_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isConstruct"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_deployment

networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_deployment

networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_deployment

networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_deployment

networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworksecuritymanagerDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworksecuritymanagerDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworksecuritymanagerDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedPolicyList">associated_policy_list</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList">NetworksecuritymanagerDeploymentAssociatedPolicyListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedScopeList">associated_scope_list</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList">NetworksecuritymanagerDeploymentAssociatedScopeListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentArn">deployment_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentConfiguration">deployment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference">NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList">NetworksecuritymanagerDeploymentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedPolicyListInput">associated_policy_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedScopeListInput">associated_scope_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentConfigurationInput">deployment_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentDescriptionInput">deployment_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentNameInput">deployment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentDescription">deployment_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentName">deployment_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `associated_policy_list`<sup>Required</sup> <a name="associated_policy_list" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedPolicyList"></a>

```python
associated_policy_list: NetworksecuritymanagerDeploymentAssociatedPolicyListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList">NetworksecuritymanagerDeploymentAssociatedPolicyListStructList</a>

---

##### `associated_scope_list`<sup>Required</sup> <a name="associated_scope_list" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedScopeList"></a>

```python
associated_scope_list: NetworksecuritymanagerDeploymentAssociatedScopeListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList">NetworksecuritymanagerDeploymentAssociatedScopeListStructList</a>

---

##### `deployment_arn`<sup>Required</sup> <a name="deployment_arn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentArn"></a>

```python
deployment_arn: str
```

- *Type:* str

---

##### `deployment_configuration`<sup>Required</sup> <a name="deployment_configuration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentConfiguration"></a>

```python
deployment_configuration: NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference">NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference</a>

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tags"></a>

```python
tags: NetworksecuritymanagerDeploymentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList">NetworksecuritymanagerDeploymentTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `associated_policy_list_input`<sup>Optional</sup> <a name="associated_policy_list_input" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedPolicyListInput"></a>

```python
associated_policy_list_input: IResolvable | typing.List[NetworksecuritymanagerDeploymentAssociatedPolicyListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>]

---

##### `associated_scope_list_input`<sup>Optional</sup> <a name="associated_scope_list_input" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.associatedScopeListInput"></a>

```python
associated_scope_list_input: IResolvable | typing.List[NetworksecuritymanagerDeploymentAssociatedScopeListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>]

---

##### `deployment_configuration_input`<sup>Optional</sup> <a name="deployment_configuration_input" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentConfigurationInput"></a>

```python
deployment_configuration_input: IResolvable | NetworksecuritymanagerDeploymentDeploymentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a>

---

##### `deployment_description_input`<sup>Optional</sup> <a name="deployment_description_input" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentDescriptionInput"></a>

```python
deployment_description_input: str
```

- *Type:* str

---

##### `deployment_name_input`<sup>Optional</sup> <a name="deployment_name_input" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentNameInput"></a>

```python
deployment_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NetworksecuritymanagerDeploymentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>]

---

##### `deployment_description`<sup>Required</sup> <a name="deployment_description" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentDescription"></a>

```python
deployment_description: str
```

- *Type:* str

---

##### `deployment_name`<sup>Required</sup> <a name="deployment_name" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.deploymentName"></a>

```python
deployment_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerDeploymentAssociatedPolicyListStruct <a name="NetworksecuritymanagerDeploymentAssociatedPolicyListStruct" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_deployment

networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct(
  policy_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct.property.policyArn">policy_arn</a></code> | <code>str</code> | ARN of the associated policy. |

---

##### `policy_arn`<sup>Optional</sup> <a name="policy_arn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

ARN of the associated policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#policy_arn NetworksecuritymanagerDeployment#policy_arn}

---

### NetworksecuritymanagerDeploymentAssociatedScopeListStruct <a name="NetworksecuritymanagerDeploymentAssociatedScopeListStruct" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_deployment

networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct(
  scope_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct.property.scopeArn">scope_arn</a></code> | <code>str</code> | ARN of the associated scope. |

---

##### `scope_arn`<sup>Optional</sup> <a name="scope_arn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct.property.scopeArn"></a>

```python
scope_arn: str
```

- *Type:* str

ARN of the associated scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#scope_arn NetworksecuritymanagerDeployment#scope_arn}

---

### NetworksecuritymanagerDeploymentConfig <a name="NetworksecuritymanagerDeploymentConfig" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_deployment

networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  deployment_name: str,
  associated_policy_list: IResolvable | typing.List[NetworksecuritymanagerDeploymentAssociatedPolicyListStruct] = None,
  associated_scope_list: IResolvable | typing.List[NetworksecuritymanagerDeploymentAssociatedScopeListStruct] = None,
  deployment_configuration: NetworksecuritymanagerDeploymentDeploymentConfiguration = None,
  deployment_description: str = None,
  tags: IResolvable | typing.List[NetworksecuritymanagerDeploymentTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentName">deployment_name</a></code> | <code>str</code> | The name of the deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.associatedPolicyList">associated_policy_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>]</code> | List of policies associated with this deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.associatedScopeList">associated_scope_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>]</code> | List of scopes associated with this deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentConfiguration">deployment_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a></code> | Configuration settings for the deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentDescription">deployment_description</a></code> | <code>str</code> | A description of the deployment. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>]</code> | The tags associated with the deployment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `deployment_name`<sup>Required</sup> <a name="deployment_name" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentName"></a>

```python
deployment_name: str
```

- *Type:* str

The name of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_name NetworksecuritymanagerDeployment#deployment_name}

---

##### `associated_policy_list`<sup>Optional</sup> <a name="associated_policy_list" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.associatedPolicyList"></a>

```python
associated_policy_list: IResolvable | typing.List[NetworksecuritymanagerDeploymentAssociatedPolicyListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>]

List of policies associated with this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#associated_policy_list NetworksecuritymanagerDeployment#associated_policy_list}

---

##### `associated_scope_list`<sup>Optional</sup> <a name="associated_scope_list" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.associatedScopeList"></a>

```python
associated_scope_list: IResolvable | typing.List[NetworksecuritymanagerDeploymentAssociatedScopeListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>]

List of scopes associated with this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#associated_scope_list NetworksecuritymanagerDeployment#associated_scope_list}

---

##### `deployment_configuration`<sup>Optional</sup> <a name="deployment_configuration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentConfiguration"></a>

```python
deployment_configuration: NetworksecuritymanagerDeploymentDeploymentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a>

Configuration settings for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_configuration NetworksecuritymanagerDeployment#deployment_configuration}

---

##### `deployment_description`<sup>Optional</sup> <a name="deployment_description" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.deploymentDescription"></a>

```python
deployment_description: str
```

- *Type:* str

A description of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#deployment_description NetworksecuritymanagerDeployment#deployment_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[NetworksecuritymanagerDeploymentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>]

The tags associated with the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#tags NetworksecuritymanagerDeployment#tags}

---

### NetworksecuritymanagerDeploymentDeploymentConfiguration <a name="NetworksecuritymanagerDeploymentDeploymentConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_deployment

networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration(
  enable_cross_account_visibility: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration.property.enableCrossAccountVisibility">enable_cross_account_visibility</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether cross-account visibility is enabled for the deployment. |

---

##### `enable_cross_account_visibility`<sup>Optional</sup> <a name="enable_cross_account_visibility" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration.property.enableCrossAccountVisibility"></a>

```python
enable_cross_account_visibility: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether cross-account visibility is enabled for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#enable_cross_account_visibility NetworksecuritymanagerDeployment#enable_cross_account_visibility}

---

### NetworksecuritymanagerDeploymentTags <a name="NetworksecuritymanagerDeploymentTags" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_deployment

networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#key NetworksecuritymanagerDeployment#key}. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#value NetworksecuritymanagerDeployment#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#key NetworksecuritymanagerDeployment#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_deployment#value NetworksecuritymanagerDeployment#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerDeploymentAssociatedPolicyListStructList <a name="NetworksecuritymanagerDeploymentAssociatedPolicyListStructList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_deployment

networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworksecuritymanagerDeploymentAssociatedPolicyListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>]

---


### NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference <a name="NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_deployment

networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resetPolicyArn">reset_policy_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_policy_arn` <a name="reset_policy_arn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.resetPolicyArn"></a>

```python
def reset_policy_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArnInput">policy_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArn">policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_arn_input`<sup>Optional</sup> <a name="policy_arn_input" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArnInput"></a>

```python
policy_arn_input: str
```

- *Type:* str

---

##### `policy_arn`<sup>Required</sup> <a name="policy_arn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworksecuritymanagerDeploymentAssociatedPolicyListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedPolicyListStruct">NetworksecuritymanagerDeploymentAssociatedPolicyListStruct</a>

---


### NetworksecuritymanagerDeploymentAssociatedScopeListStructList <a name="NetworksecuritymanagerDeploymentAssociatedScopeListStructList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_deployment

networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworksecuritymanagerDeploymentAssociatedScopeListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>]

---


### NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference <a name="NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_deployment

networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resetScopeArn">reset_scope_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_scope_arn` <a name="reset_scope_arn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.resetScopeArn"></a>

```python
def reset_scope_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArnInput">scope_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArn">scope_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scope_arn_input`<sup>Optional</sup> <a name="scope_arn_input" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArnInput"></a>

```python
scope_arn_input: str
```

- *Type:* str

---

##### `scope_arn`<sup>Required</sup> <a name="scope_arn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.scopeArn"></a>

```python
scope_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworksecuritymanagerDeploymentAssociatedScopeListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentAssociatedScopeListStruct">NetworksecuritymanagerDeploymentAssociatedScopeListStruct</a>

---


### NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference <a name="NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_deployment

networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resetEnableCrossAccountVisibility">reset_enable_cross_account_visibility</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_cross_account_visibility` <a name="reset_enable_cross_account_visibility" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.resetEnableCrossAccountVisibility"></a>

```python
def reset_enable_cross_account_visibility() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibilityInput">enable_cross_account_visibility_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibility">enable_cross_account_visibility</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_cross_account_visibility_input`<sup>Optional</sup> <a name="enable_cross_account_visibility_input" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibilityInput"></a>

```python
enable_cross_account_visibility_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_cross_account_visibility`<sup>Required</sup> <a name="enable_cross_account_visibility" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.enableCrossAccountVisibility"></a>

```python
enable_cross_account_visibility: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworksecuritymanagerDeploymentDeploymentConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentDeploymentConfiguration">NetworksecuritymanagerDeploymentDeploymentConfiguration</a>

---


### NetworksecuritymanagerDeploymentTagsList <a name="NetworksecuritymanagerDeploymentTagsList" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_deployment

networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworksecuritymanagerDeploymentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworksecuritymanagerDeploymentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>]

---


### NetworksecuritymanagerDeploymentTagsOutputReference <a name="NetworksecuritymanagerDeploymentTagsOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networksecuritymanager_deployment

networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworksecuritymanagerDeploymentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networksecuritymanagerDeployment.NetworksecuritymanagerDeploymentTags">NetworksecuritymanagerDeploymentTags</a>

---



