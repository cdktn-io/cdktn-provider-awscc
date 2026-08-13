# `fmsPolicy` Submodule <a name="`fmsPolicy` Submodule" id="@cdktn/provider-awscc.fmsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FmsPolicy <a name="FmsPolicy" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy awscc_fms_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  exclude_resource_tags: bool | IResolvable,
  policy_name: str,
  remediation_enabled: bool | IResolvable,
  security_service_policy_data: FmsPolicySecurityServicePolicyData,
  delete_all_policy_resources: bool | IResolvable = None,
  exclude_map: FmsPolicyExcludeMap = None,
  include_map: FmsPolicyIncludeMap = None,
  policy_description: str = None,
  resources_clean_up: bool | IResolvable = None,
  resource_set_ids: typing.List[str] = None,
  resource_tag_logical_operator: str = None,
  resource_tags: IResolvable | typing.List[FmsPolicyResourceTags] = None,
  resource_type: str = None,
  resource_type_list: typing.List[str] = None,
  tags: IResolvable | typing.List[FmsPolicyTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.excludeResourceTags">exclude_resource_tags</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#exclude_resource_tags FmsPolicy#exclude_resource_tags}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.policyName">policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#policy_name FmsPolicy#policy_name}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.remediationEnabled">remediation_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#remediation_enabled FmsPolicy#remediation_enabled}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.securityServicePolicyData">security_service_policy_data</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a></code> | Firewall security service policy data. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.deleteAllPolicyResources">delete_all_policy_resources</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#delete_all_policy_resources FmsPolicy#delete_all_policy_resources}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.excludeMap">exclude_map</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a></code> | An FMS includeMap or excludeMap. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.includeMap">include_map</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a></code> | An FMS includeMap or excludeMap. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.policyDescription">policy_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#policy_description FmsPolicy#policy_description}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.resourcesCleanUp">resources_clean_up</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#resources_clean_up FmsPolicy#resources_clean_up}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.resourceSetIds">resource_set_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#resource_set_ids FmsPolicy#resource_set_ids}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.resourceTagLogicalOperator">resource_tag_logical_operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#resource_tag_logical_operator FmsPolicy#resource_tag_logical_operator}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.resourceTags">resource_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTags">FmsPolicyResourceTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#resource_tags FmsPolicy#resource_tags}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | An AWS resource type. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.resourceTypeList">resource_type_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#resource_type_list FmsPolicy#resource_type_list}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTags">FmsPolicyTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#tags FmsPolicy#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `exclude_resource_tags`<sup>Required</sup> <a name="exclude_resource_tags" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.excludeResourceTags"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#exclude_resource_tags FmsPolicy#exclude_resource_tags}.

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.policyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#policy_name FmsPolicy#policy_name}.

---

##### `remediation_enabled`<sup>Required</sup> <a name="remediation_enabled" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.remediationEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#remediation_enabled FmsPolicy#remediation_enabled}.

---

##### `security_service_policy_data`<sup>Required</sup> <a name="security_service_policy_data" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.securityServicePolicyData"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a>

Firewall security service policy data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#security_service_policy_data FmsPolicy#security_service_policy_data}

---

##### `delete_all_policy_resources`<sup>Optional</sup> <a name="delete_all_policy_resources" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.deleteAllPolicyResources"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#delete_all_policy_resources FmsPolicy#delete_all_policy_resources}.

---

##### `exclude_map`<sup>Optional</sup> <a name="exclude_map" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.excludeMap"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a>

An FMS includeMap or excludeMap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#exclude_map FmsPolicy#exclude_map}

---

##### `include_map`<sup>Optional</sup> <a name="include_map" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.includeMap"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a>

An FMS includeMap or excludeMap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#include_map FmsPolicy#include_map}

---

##### `policy_description`<sup>Optional</sup> <a name="policy_description" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.policyDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#policy_description FmsPolicy#policy_description}.

---

##### `resources_clean_up`<sup>Optional</sup> <a name="resources_clean_up" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.resourcesCleanUp"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#resources_clean_up FmsPolicy#resources_clean_up}.

---

##### `resource_set_ids`<sup>Optional</sup> <a name="resource_set_ids" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.resourceSetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#resource_set_ids FmsPolicy#resource_set_ids}.

---

##### `resource_tag_logical_operator`<sup>Optional</sup> <a name="resource_tag_logical_operator" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.resourceTagLogicalOperator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#resource_tag_logical_operator FmsPolicy#resource_tag_logical_operator}.

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.resourceTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTags">FmsPolicyResourceTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#resource_tags FmsPolicy#resource_tags}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.resourceType"></a>

- *Type:* str

An AWS resource type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#resource_type FmsPolicy#resource_type}

---

##### `resource_type_list`<sup>Optional</sup> <a name="resource_type_list" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.resourceTypeList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#resource_type_list FmsPolicy#resource_type_list}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTags">FmsPolicyTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#tags FmsPolicy#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.putExcludeMap">put_exclude_map</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.putIncludeMap">put_include_map</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.putResourceTags">put_resource_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.putSecurityServicePolicyData">put_security_service_policy_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetDeleteAllPolicyResources">reset_delete_all_policy_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetExcludeMap">reset_exclude_map</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetIncludeMap">reset_include_map</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetPolicyDescription">reset_policy_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetResourcesCleanUp">reset_resources_clean_up</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetResourceSetIds">reset_resource_set_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetResourceTagLogicalOperator">reset_resource_tag_logical_operator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetResourceTags">reset_resource_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetResourceTypeList">reset_resource_type_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_exclude_map` <a name="put_exclude_map" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.putExcludeMap"></a>

```python
def put_exclude_map(
  account: typing.List[str] = None,
  orgunit: typing.List[str] = None
) -> None
```

###### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.putExcludeMap.parameter.account"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#account FmsPolicy#account}.

---

###### `orgunit`<sup>Optional</sup> <a name="orgunit" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.putExcludeMap.parameter.orgunit"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#orgunit FmsPolicy#orgunit}.

---

##### `put_include_map` <a name="put_include_map" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.putIncludeMap"></a>

```python
def put_include_map(
  account: typing.List[str] = None,
  orgunit: typing.List[str] = None
) -> None
```

###### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.putIncludeMap.parameter.account"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#account FmsPolicy#account}.

---

###### `orgunit`<sup>Optional</sup> <a name="orgunit" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.putIncludeMap.parameter.orgunit"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#orgunit FmsPolicy#orgunit}.

---

##### `put_resource_tags` <a name="put_resource_tags" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.putResourceTags"></a>

```python
def put_resource_tags(
  value: IResolvable | typing.List[FmsPolicyResourceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.putResourceTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTags">FmsPolicyResourceTags</a>]

---

##### `put_security_service_policy_data` <a name="put_security_service_policy_data" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.putSecurityServicePolicyData"></a>

```python
def put_security_service_policy_data(
  type: str,
  managed_service_data: str = None,
  policy_option: FmsPolicySecurityServicePolicyDataPolicyOption = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.putSecurityServicePolicyData.parameter.type"></a>

- *Type:* str

Firewall policy type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#type FmsPolicy#type}

---

###### `managed_service_data`<sup>Optional</sup> <a name="managed_service_data" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.putSecurityServicePolicyData.parameter.managedServiceData"></a>

- *Type:* str

Firewall managed service data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#managed_service_data FmsPolicy#managed_service_data}

---

###### `policy_option`<sup>Optional</sup> <a name="policy_option" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.putSecurityServicePolicyData.parameter.policyOption"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption">FmsPolicySecurityServicePolicyDataPolicyOption</a>

Firewall policy option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#policy_option FmsPolicy#policy_option}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[FmsPolicyTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTags">FmsPolicyTags</a>]

---

##### `reset_delete_all_policy_resources` <a name="reset_delete_all_policy_resources" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetDeleteAllPolicyResources"></a>

```python
def reset_delete_all_policy_resources() -> None
```

##### `reset_exclude_map` <a name="reset_exclude_map" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetExcludeMap"></a>

```python
def reset_exclude_map() -> None
```

##### `reset_include_map` <a name="reset_include_map" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetIncludeMap"></a>

```python
def reset_include_map() -> None
```

##### `reset_policy_description` <a name="reset_policy_description" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetPolicyDescription"></a>

```python
def reset_policy_description() -> None
```

##### `reset_resources_clean_up` <a name="reset_resources_clean_up" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetResourcesCleanUp"></a>

```python
def reset_resources_clean_up() -> None
```

##### `reset_resource_set_ids` <a name="reset_resource_set_ids" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetResourceSetIds"></a>

```python
def reset_resource_set_ids() -> None
```

##### `reset_resource_tag_logical_operator` <a name="reset_resource_tag_logical_operator" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetResourceTagLogicalOperator"></a>

```python
def reset_resource_tag_logical_operator() -> None
```

##### `reset_resource_tags` <a name="reset_resource_tags" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetResourceTags"></a>

```python
def reset_resource_tags() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_resource_type_list` <a name="reset_resource_type_list" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetResourceTypeList"></a>

```python
def reset_resource_type_list() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a FmsPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.isTerraformResource"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a FmsPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FmsPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FmsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FmsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.excludeMap">exclude_map</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference">FmsPolicyExcludeMapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.includeMap">include_map</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference">FmsPolicyIncludeMapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourceTags">resource_tags</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList">FmsPolicyResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.securityServicePolicyData">security_service_policy_data</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference">FmsPolicySecurityServicePolicyDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList">FmsPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.deleteAllPolicyResourcesInput">delete_all_policy_resources_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.excludeMapInput">exclude_map_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.excludeResourceTagsInput">exclude_resource_tags_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.includeMapInput">include_map_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.policyDescriptionInput">policy_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.remediationEnabledInput">remediation_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourcesCleanUpInput">resources_clean_up_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourceSetIdsInput">resource_set_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourceTagLogicalOperatorInput">resource_tag_logical_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourceTagsInput">resource_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTags">FmsPolicyResourceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourceTypeListInput">resource_type_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.securityServicePolicyDataInput">security_service_policy_data_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTags">FmsPolicyTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.deleteAllPolicyResources">delete_all_policy_resources</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.excludeResourceTags">exclude_resource_tags</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.policyDescription">policy_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.remediationEnabled">remediation_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourcesCleanUp">resources_clean_up</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourceSetIds">resource_set_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourceTagLogicalOperator">resource_tag_logical_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourceTypeList">resource_type_list</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `exclude_map`<sup>Required</sup> <a name="exclude_map" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.excludeMap"></a>

```python
exclude_map: FmsPolicyExcludeMapOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference">FmsPolicyExcludeMapOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_map`<sup>Required</sup> <a name="include_map" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.includeMap"></a>

```python
include_map: FmsPolicyIncludeMapOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference">FmsPolicyIncludeMapOutputReference</a>

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourceTags"></a>

```python
resource_tags: FmsPolicyResourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList">FmsPolicyResourceTagsList</a>

---

##### `security_service_policy_data`<sup>Required</sup> <a name="security_service_policy_data" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.securityServicePolicyData"></a>

```python
security_service_policy_data: FmsPolicySecurityServicePolicyDataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference">FmsPolicySecurityServicePolicyDataOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.tags"></a>

```python
tags: FmsPolicyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList">FmsPolicyTagsList</a>

---

##### `delete_all_policy_resources_input`<sup>Optional</sup> <a name="delete_all_policy_resources_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.deleteAllPolicyResourcesInput"></a>

```python
delete_all_policy_resources_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `exclude_map_input`<sup>Optional</sup> <a name="exclude_map_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.excludeMapInput"></a>

```python
exclude_map_input: IResolvable | FmsPolicyExcludeMap
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a>

---

##### `exclude_resource_tags_input`<sup>Optional</sup> <a name="exclude_resource_tags_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.excludeResourceTagsInput"></a>

```python
exclude_resource_tags_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `include_map_input`<sup>Optional</sup> <a name="include_map_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.includeMapInput"></a>

```python
include_map_input: IResolvable | FmsPolicyIncludeMap
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a>

---

##### `policy_description_input`<sup>Optional</sup> <a name="policy_description_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.policyDescriptionInput"></a>

```python
policy_description_input: str
```

- *Type:* str

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `remediation_enabled_input`<sup>Optional</sup> <a name="remediation_enabled_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.remediationEnabledInput"></a>

```python
remediation_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resources_clean_up_input`<sup>Optional</sup> <a name="resources_clean_up_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourcesCleanUpInput"></a>

```python
resources_clean_up_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resource_set_ids_input`<sup>Optional</sup> <a name="resource_set_ids_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourceSetIdsInput"></a>

```python
resource_set_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_tag_logical_operator_input`<sup>Optional</sup> <a name="resource_tag_logical_operator_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourceTagLogicalOperatorInput"></a>

```python
resource_tag_logical_operator_input: str
```

- *Type:* str

---

##### `resource_tags_input`<sup>Optional</sup> <a name="resource_tags_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourceTagsInput"></a>

```python
resource_tags_input: IResolvable | typing.List[FmsPolicyResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTags">FmsPolicyResourceTags</a>]

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `resource_type_list_input`<sup>Optional</sup> <a name="resource_type_list_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourceTypeListInput"></a>

```python
resource_type_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_service_policy_data_input`<sup>Optional</sup> <a name="security_service_policy_data_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.securityServicePolicyDataInput"></a>

```python
security_service_policy_data_input: IResolvable | FmsPolicySecurityServicePolicyData
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[FmsPolicyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTags">FmsPolicyTags</a>]

---

##### `delete_all_policy_resources`<sup>Required</sup> <a name="delete_all_policy_resources" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.deleteAllPolicyResources"></a>

```python
delete_all_policy_resources: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `exclude_resource_tags`<sup>Required</sup> <a name="exclude_resource_tags" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.excludeResourceTags"></a>

```python
exclude_resource_tags: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `policy_description`<sup>Required</sup> <a name="policy_description" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.policyDescription"></a>

```python
policy_description: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `remediation_enabled`<sup>Required</sup> <a name="remediation_enabled" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.remediationEnabled"></a>

```python
remediation_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resources_clean_up`<sup>Required</sup> <a name="resources_clean_up" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourcesCleanUp"></a>

```python
resources_clean_up: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resource_set_ids`<sup>Required</sup> <a name="resource_set_ids" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourceSetIds"></a>

```python
resource_set_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_tag_logical_operator`<sup>Required</sup> <a name="resource_tag_logical_operator" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourceTagLogicalOperator"></a>

```python
resource_tag_logical_operator: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `resource_type_list`<sup>Required</sup> <a name="resource_type_list" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.resourceTypeList"></a>

```python
resource_type_list: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FmsPolicyConfig <a name="FmsPolicyConfig" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  exclude_resource_tags: bool | IResolvable,
  policy_name: str,
  remediation_enabled: bool | IResolvable,
  security_service_policy_data: FmsPolicySecurityServicePolicyData,
  delete_all_policy_resources: bool | IResolvable = None,
  exclude_map: FmsPolicyExcludeMap = None,
  include_map: FmsPolicyIncludeMap = None,
  policy_description: str = None,
  resources_clean_up: bool | IResolvable = None,
  resource_set_ids: typing.List[str] = None,
  resource_tag_logical_operator: str = None,
  resource_tags: IResolvable | typing.List[FmsPolicyResourceTags] = None,
  resource_type: str = None,
  resource_type_list: typing.List[str] = None,
  tags: IResolvable | typing.List[FmsPolicyTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.excludeResourceTags">exclude_resource_tags</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#exclude_resource_tags FmsPolicy#exclude_resource_tags}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.policyName">policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#policy_name FmsPolicy#policy_name}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.remediationEnabled">remediation_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#remediation_enabled FmsPolicy#remediation_enabled}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.securityServicePolicyData">security_service_policy_data</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a></code> | Firewall security service policy data. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.deleteAllPolicyResources">delete_all_policy_resources</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#delete_all_policy_resources FmsPolicy#delete_all_policy_resources}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.excludeMap">exclude_map</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a></code> | An FMS includeMap or excludeMap. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.includeMap">include_map</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a></code> | An FMS includeMap or excludeMap. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.policyDescription">policy_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#policy_description FmsPolicy#policy_description}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.resourcesCleanUp">resources_clean_up</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#resources_clean_up FmsPolicy#resources_clean_up}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.resourceSetIds">resource_set_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#resource_set_ids FmsPolicy#resource_set_ids}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.resourceTagLogicalOperator">resource_tag_logical_operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#resource_tag_logical_operator FmsPolicy#resource_tag_logical_operator}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.resourceTags">resource_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTags">FmsPolicyResourceTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#resource_tags FmsPolicy#resource_tags}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.resourceType">resource_type</a></code> | <code>str</code> | An AWS resource type. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.resourceTypeList">resource_type_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#resource_type_list FmsPolicy#resource_type_list}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTags">FmsPolicyTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#tags FmsPolicy#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `exclude_resource_tags`<sup>Required</sup> <a name="exclude_resource_tags" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.excludeResourceTags"></a>

```python
exclude_resource_tags: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#exclude_resource_tags FmsPolicy#exclude_resource_tags}.

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#policy_name FmsPolicy#policy_name}.

---

##### `remediation_enabled`<sup>Required</sup> <a name="remediation_enabled" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.remediationEnabled"></a>

```python
remediation_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#remediation_enabled FmsPolicy#remediation_enabled}.

---

##### `security_service_policy_data`<sup>Required</sup> <a name="security_service_policy_data" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.securityServicePolicyData"></a>

```python
security_service_policy_data: FmsPolicySecurityServicePolicyData
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a>

Firewall security service policy data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#security_service_policy_data FmsPolicy#security_service_policy_data}

---

##### `delete_all_policy_resources`<sup>Optional</sup> <a name="delete_all_policy_resources" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.deleteAllPolicyResources"></a>

```python
delete_all_policy_resources: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#delete_all_policy_resources FmsPolicy#delete_all_policy_resources}.

---

##### `exclude_map`<sup>Optional</sup> <a name="exclude_map" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.excludeMap"></a>

```python
exclude_map: FmsPolicyExcludeMap
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a>

An FMS includeMap or excludeMap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#exclude_map FmsPolicy#exclude_map}

---

##### `include_map`<sup>Optional</sup> <a name="include_map" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.includeMap"></a>

```python
include_map: FmsPolicyIncludeMap
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a>

An FMS includeMap or excludeMap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#include_map FmsPolicy#include_map}

---

##### `policy_description`<sup>Optional</sup> <a name="policy_description" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.policyDescription"></a>

```python
policy_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#policy_description FmsPolicy#policy_description}.

---

##### `resources_clean_up`<sup>Optional</sup> <a name="resources_clean_up" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.resourcesCleanUp"></a>

```python
resources_clean_up: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#resources_clean_up FmsPolicy#resources_clean_up}.

---

##### `resource_set_ids`<sup>Optional</sup> <a name="resource_set_ids" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.resourceSetIds"></a>

```python
resource_set_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#resource_set_ids FmsPolicy#resource_set_ids}.

---

##### `resource_tag_logical_operator`<sup>Optional</sup> <a name="resource_tag_logical_operator" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.resourceTagLogicalOperator"></a>

```python
resource_tag_logical_operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#resource_tag_logical_operator FmsPolicy#resource_tag_logical_operator}.

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.resourceTags"></a>

```python
resource_tags: IResolvable | typing.List[FmsPolicyResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTags">FmsPolicyResourceTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#resource_tags FmsPolicy#resource_tags}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

An AWS resource type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#resource_type FmsPolicy#resource_type}

---

##### `resource_type_list`<sup>Optional</sup> <a name="resource_type_list" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.resourceTypeList"></a>

```python
resource_type_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#resource_type_list FmsPolicy#resource_type_list}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[FmsPolicyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTags">FmsPolicyTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#tags FmsPolicy#tags}.

---

### FmsPolicyExcludeMap <a name="FmsPolicyExcludeMap" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMap.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicyExcludeMap(
  account: typing.List[str] = None,
  orgunit: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMap.property.account">account</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#account FmsPolicy#account}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMap.property.orgunit">orgunit</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#orgunit FmsPolicy#orgunit}. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMap.property.account"></a>

```python
account: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#account FmsPolicy#account}.

---

##### `orgunit`<sup>Optional</sup> <a name="orgunit" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMap.property.orgunit"></a>

```python
orgunit: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#orgunit FmsPolicy#orgunit}.

---

### FmsPolicyIncludeMap <a name="FmsPolicyIncludeMap" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMap.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicyIncludeMap(
  account: typing.List[str] = None,
  orgunit: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMap.property.account">account</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#account FmsPolicy#account}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMap.property.orgunit">orgunit</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#orgunit FmsPolicy#orgunit}. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMap.property.account"></a>

```python
account: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#account FmsPolicy#account}.

---

##### `orgunit`<sup>Optional</sup> <a name="orgunit" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMap.property.orgunit"></a>

```python
orgunit: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#orgunit FmsPolicy#orgunit}.

---

### FmsPolicyResourceTags <a name="FmsPolicyResourceTags" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTags.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicyResourceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#key FmsPolicy#key}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#value FmsPolicy#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#key FmsPolicy#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#value FmsPolicy#value}.

---

### FmsPolicySecurityServicePolicyData <a name="FmsPolicySecurityServicePolicyData" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyData.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyData(
  type: str,
  managed_service_data: str = None,
  policy_option: FmsPolicySecurityServicePolicyDataPolicyOption = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyData.property.type">type</a></code> | <code>str</code> | Firewall policy type. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyData.property.managedServiceData">managed_service_data</a></code> | <code>str</code> | Firewall managed service data. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyData.property.policyOption">policy_option</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption">FmsPolicySecurityServicePolicyDataPolicyOption</a></code> | Firewall policy option. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyData.property.type"></a>

```python
type: str
```

- *Type:* str

Firewall policy type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#type FmsPolicy#type}

---

##### `managed_service_data`<sup>Optional</sup> <a name="managed_service_data" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyData.property.managedServiceData"></a>

```python
managed_service_data: str
```

- *Type:* str

Firewall managed service data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#managed_service_data FmsPolicy#managed_service_data}

---

##### `policy_option`<sup>Optional</sup> <a name="policy_option" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyData.property.policyOption"></a>

```python
policy_option: FmsPolicySecurityServicePolicyDataPolicyOption
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption">FmsPolicySecurityServicePolicyDataPolicyOption</a>

Firewall policy option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#policy_option FmsPolicy#policy_option}

---

### FmsPolicySecurityServicePolicyDataPolicyOption <a name="FmsPolicySecurityServicePolicyDataPolicyOption" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption(
  network_acl_common_policy: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy = None,
  network_firewall_policy: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy = None,
  third_party_firewall_policy: FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption.property.networkAclCommonPolicy">network_acl_common_policy</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy</a></code> | Network ACL common policy. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption.property.networkFirewallPolicy">network_firewall_policy</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy</a></code> | Network firewall policy. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption.property.thirdPartyFirewallPolicy">third_party_firewall_policy</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy</a></code> | Third party firewall policy. |

---

##### `network_acl_common_policy`<sup>Optional</sup> <a name="network_acl_common_policy" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption.property.networkAclCommonPolicy"></a>

```python
network_acl_common_policy: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy</a>

Network ACL common policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#network_acl_common_policy FmsPolicy#network_acl_common_policy}

---

##### `network_firewall_policy`<sup>Optional</sup> <a name="network_firewall_policy" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption.property.networkFirewallPolicy"></a>

```python
network_firewall_policy: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy</a>

Network firewall policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#network_firewall_policy FmsPolicy#network_firewall_policy}

---

##### `third_party_firewall_policy`<sup>Optional</sup> <a name="third_party_firewall_policy" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption.property.thirdPartyFirewallPolicy"></a>

```python
third_party_firewall_policy: FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy</a>

Third party firewall policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#third_party_firewall_policy FmsPolicy#third_party_firewall_policy}

---

### FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy <a name="FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy(
  network_acl_entry_set: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy.property.networkAclEntrySet">network_acl_entry_set</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet</a></code> | Network ACL entry set. |

---

##### `network_acl_entry_set`<sup>Optional</sup> <a name="network_acl_entry_set" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy.property.networkAclEntrySet"></a>

```python
network_acl_entry_set: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet</a>

Network ACL entry set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#network_acl_entry_set FmsPolicy#network_acl_entry_set}

---

### FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet <a name="FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet(
  first_entries: IResolvable | typing.List[FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries] = None,
  force_remediate_for_first_entries: bool | IResolvable = None,
  force_remediate_for_last_entries: bool | IResolvable = None,
  last_entries: IResolvable | typing.List[FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet.property.firstEntries">first_entries</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries</a>]</code> | NetworkAcl entry list. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet.property.forceRemediateForFirstEntries">force_remediate_for_first_entries</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#force_remediate_for_first_entries FmsPolicy#force_remediate_for_first_entries}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet.property.forceRemediateForLastEntries">force_remediate_for_last_entries</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#force_remediate_for_last_entries FmsPolicy#force_remediate_for_last_entries}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet.property.lastEntries">last_entries</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries</a>]</code> | NetworkAcl entry list. |

---

##### `first_entries`<sup>Optional</sup> <a name="first_entries" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet.property.firstEntries"></a>

```python
first_entries: IResolvable | typing.List[FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries</a>]

NetworkAcl entry list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#first_entries FmsPolicy#first_entries}

---

##### `force_remediate_for_first_entries`<sup>Optional</sup> <a name="force_remediate_for_first_entries" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet.property.forceRemediateForFirstEntries"></a>

```python
force_remediate_for_first_entries: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#force_remediate_for_first_entries FmsPolicy#force_remediate_for_first_entries}.

---

##### `force_remediate_for_last_entries`<sup>Optional</sup> <a name="force_remediate_for_last_entries" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet.property.forceRemediateForLastEntries"></a>

```python
force_remediate_for_last_entries: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#force_remediate_for_last_entries FmsPolicy#force_remediate_for_last_entries}.

---

##### `last_entries`<sup>Optional</sup> <a name="last_entries" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet.property.lastEntries"></a>

```python
last_entries: IResolvable | typing.List[FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries</a>]

NetworkAcl entry list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#last_entries FmsPolicy#last_entries}

---

### FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries <a name="FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries(
  cidr_block: str = None,
  egress: bool | IResolvable = None,
  icmp_type_code: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode = None,
  ipv6_cidr_block: str = None,
  port_range: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange = None,
  protocol: str = None,
  rule_action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries.property.cidrBlock">cidr_block</a></code> | <code>str</code> | CIDR block. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries.property.egress">egress</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the entry is an egress entry. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries.property.icmpTypeCode">icmp_type_code</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode</a></code> | ICMP type and code. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | IPv6 CIDR block. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries.property.portRange">port_range</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange</a></code> | Port range. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries.property.protocol">protocol</a></code> | <code>str</code> | Protocol. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries.property.ruleAction">rule_action</a></code> | <code>str</code> | Rule Action. |

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#cidr_block FmsPolicy#cidr_block}

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries.property.egress"></a>

```python
egress: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the entry is an egress entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#egress FmsPolicy#egress}

---

##### `icmp_type_code`<sup>Optional</sup> <a name="icmp_type_code" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries.property.icmpTypeCode"></a>

```python
icmp_type_code: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode</a>

ICMP type and code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#icmp_type_code FmsPolicy#icmp_type_code}

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#ipv_6_cidr_block FmsPolicy#ipv_6_cidr_block}

---

##### `port_range`<sup>Optional</sup> <a name="port_range" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries.property.portRange"></a>

```python
port_range: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange</a>

Port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#port_range FmsPolicy#port_range}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#protocol FmsPolicy#protocol}

---

##### `rule_action`<sup>Optional</sup> <a name="rule_action" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries.property.ruleAction"></a>

```python
rule_action: str
```

- *Type:* str

Rule Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#rule_action FmsPolicy#rule_action}

---

### FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode <a name="FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode(
  code: typing.Union[int, float] = None,
  type: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode.property.code">code</a></code> | <code>typing.Union[int, float]</code> | Code. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode.property.type">type</a></code> | <code>typing.Union[int, float]</code> | Type. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#code FmsPolicy#code}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#type FmsPolicy#type}

---

### FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange <a name="FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange(
  from: typing.Union[int, float] = None,
  to: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange.property.from">from</a></code> | <code>typing.Union[int, float]</code> | From Port. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange.property.to">to</a></code> | <code>typing.Union[int, float]</code> | To Port. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange.property.from"></a>

```python
from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

From Port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#from FmsPolicy#from}

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange.property.to"></a>

```python
to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

To Port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#to FmsPolicy#to}

---

### FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries <a name="FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries(
  cidr_block: str = None,
  egress: bool | IResolvable = None,
  icmp_type_code: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode = None,
  ipv6_cidr_block: str = None,
  port_range: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange = None,
  protocol: str = None,
  rule_action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries.property.cidrBlock">cidr_block</a></code> | <code>str</code> | CIDR block. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries.property.egress">egress</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the entry is an egress entry. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries.property.icmpTypeCode">icmp_type_code</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode</a></code> | ICMP type and code. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | IPv6 CIDR block. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries.property.portRange">port_range</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange</a></code> | Port range. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries.property.protocol">protocol</a></code> | <code>str</code> | Protocol. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries.property.ruleAction">rule_action</a></code> | <code>str</code> | Rule Action. |

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#cidr_block FmsPolicy#cidr_block}

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries.property.egress"></a>

```python
egress: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the entry is an egress entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#egress FmsPolicy#egress}

---

##### `icmp_type_code`<sup>Optional</sup> <a name="icmp_type_code" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries.property.icmpTypeCode"></a>

```python
icmp_type_code: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode</a>

ICMP type and code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#icmp_type_code FmsPolicy#icmp_type_code}

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#ipv_6_cidr_block FmsPolicy#ipv_6_cidr_block}

---

##### `port_range`<sup>Optional</sup> <a name="port_range" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries.property.portRange"></a>

```python
port_range: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange</a>

Port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#port_range FmsPolicy#port_range}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#protocol FmsPolicy#protocol}

---

##### `rule_action`<sup>Optional</sup> <a name="rule_action" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries.property.ruleAction"></a>

```python
rule_action: str
```

- *Type:* str

Rule Action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#rule_action FmsPolicy#rule_action}

---

### FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode <a name="FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode(
  code: typing.Union[int, float] = None,
  type: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode.property.code">code</a></code> | <code>typing.Union[int, float]</code> | Code. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode.property.type">type</a></code> | <code>typing.Union[int, float]</code> | Type. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#code FmsPolicy#code}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#type FmsPolicy#type}

---

### FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange <a name="FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange(
  from: typing.Union[int, float] = None,
  to: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange.property.from">from</a></code> | <code>typing.Union[int, float]</code> | From Port. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange.property.to">to</a></code> | <code>typing.Union[int, float]</code> | To Port. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange.property.from"></a>

```python
from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

From Port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#from FmsPolicy#from}

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange.property.to"></a>

```python
to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

To Port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#to FmsPolicy#to}

---

### FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy <a name="FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy(
  firewall_deployment_model: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy.property.firewallDeploymentModel">firewall_deployment_model</a></code> | <code>str</code> | Firewall deployment mode. |

---

##### `firewall_deployment_model`<sup>Optional</sup> <a name="firewall_deployment_model" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy.property.firewallDeploymentModel"></a>

```python
firewall_deployment_model: str
```

- *Type:* str

Firewall deployment mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#firewall_deployment_model FmsPolicy#firewall_deployment_model}

---

### FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy <a name="FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy(
  firewall_deployment_model: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy.property.firewallDeploymentModel">firewall_deployment_model</a></code> | <code>str</code> | Firewall deployment mode. |

---

##### `firewall_deployment_model`<sup>Optional</sup> <a name="firewall_deployment_model" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy.property.firewallDeploymentModel"></a>

```python
firewall_deployment_model: str
```

- *Type:* str

Firewall deployment mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#firewall_deployment_model FmsPolicy#firewall_deployment_model}

---

### FmsPolicyTags <a name="FmsPolicyTags" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTags.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicyTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#key FmsPolicy#key}. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#value FmsPolicy#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#key FmsPolicy#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#value FmsPolicy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### FmsPolicyExcludeMapOutputReference <a name="FmsPolicyExcludeMapOutputReference" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicyExcludeMapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.resetAccount">reset_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.resetOrgunit">reset_orgunit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account` <a name="reset_account" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.resetAccount"></a>

```python
def reset_account() -> None
```

##### `reset_orgunit` <a name="reset_orgunit" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.resetOrgunit"></a>

```python
def reset_orgunit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.accountInput">account_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.orgunitInput">orgunit_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.account">account</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.orgunit">orgunit</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.accountInput"></a>

```python
account_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `orgunit_input`<sup>Optional</sup> <a name="orgunit_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.orgunitInput"></a>

```python
orgunit_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.account"></a>

```python
account: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `orgunit`<sup>Required</sup> <a name="orgunit" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.orgunit"></a>

```python
orgunit: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FmsPolicyExcludeMap
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a>

---


### FmsPolicyIncludeMapOutputReference <a name="FmsPolicyIncludeMapOutputReference" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicyIncludeMapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.resetAccount">reset_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.resetOrgunit">reset_orgunit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account` <a name="reset_account" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.resetAccount"></a>

```python
def reset_account() -> None
```

##### `reset_orgunit` <a name="reset_orgunit" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.resetOrgunit"></a>

```python
def reset_orgunit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.accountInput">account_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.orgunitInput">orgunit_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.account">account</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.orgunit">orgunit</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.accountInput"></a>

```python
account_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `orgunit_input`<sup>Optional</sup> <a name="orgunit_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.orgunitInput"></a>

```python
orgunit_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.account"></a>

```python
account: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `orgunit`<sup>Required</sup> <a name="orgunit" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.orgunit"></a>

```python
orgunit: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FmsPolicyIncludeMap
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a>

---


### FmsPolicyResourceTagsList <a name="FmsPolicyResourceTagsList" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicyResourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FmsPolicyResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTags">FmsPolicyResourceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FmsPolicyResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTags">FmsPolicyResourceTags</a>]

---


### FmsPolicyResourceTagsOutputReference <a name="FmsPolicyResourceTagsOutputReference" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicyResourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTags">FmsPolicyResourceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FmsPolicyResourceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyResourceTags">FmsPolicyResourceTags</a>

---


### FmsPolicySecurityServicePolicyDataOutputReference <a name="FmsPolicySecurityServicePolicyDataOutputReference" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.putPolicyOption">put_policy_option</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resetManagedServiceData">reset_managed_service_data</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resetPolicyOption">reset_policy_option</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_policy_option` <a name="put_policy_option" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.putPolicyOption"></a>

```python
def put_policy_option(
  network_acl_common_policy: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy = None,
  network_firewall_policy: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy = None,
  third_party_firewall_policy: FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy = None
) -> None
```

###### `network_acl_common_policy`<sup>Optional</sup> <a name="network_acl_common_policy" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.putPolicyOption.parameter.networkAclCommonPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy</a>

Network ACL common policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#network_acl_common_policy FmsPolicy#network_acl_common_policy}

---

###### `network_firewall_policy`<sup>Optional</sup> <a name="network_firewall_policy" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.putPolicyOption.parameter.networkFirewallPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy</a>

Network firewall policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#network_firewall_policy FmsPolicy#network_firewall_policy}

---

###### `third_party_firewall_policy`<sup>Optional</sup> <a name="third_party_firewall_policy" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.putPolicyOption.parameter.thirdPartyFirewallPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy</a>

Third party firewall policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#third_party_firewall_policy FmsPolicy#third_party_firewall_policy}

---

##### `reset_managed_service_data` <a name="reset_managed_service_data" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resetManagedServiceData"></a>

```python
def reset_managed_service_data() -> None
```

##### `reset_policy_option` <a name="reset_policy_option" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resetPolicyOption"></a>

```python
def reset_policy_option() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.policyOption">policy_option</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.managedServiceDataInput">managed_service_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.policyOptionInput">policy_option_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption">FmsPolicySecurityServicePolicyDataPolicyOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.managedServiceData">managed_service_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_option`<sup>Required</sup> <a name="policy_option" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.policyOption"></a>

```python
policy_option: FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference</a>

---

##### `managed_service_data_input`<sup>Optional</sup> <a name="managed_service_data_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.managedServiceDataInput"></a>

```python
managed_service_data_input: str
```

- *Type:* str

---

##### `policy_option_input`<sup>Optional</sup> <a name="policy_option_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.policyOptionInput"></a>

```python
policy_option_input: IResolvable | FmsPolicySecurityServicePolicyDataPolicyOption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption">FmsPolicySecurityServicePolicyDataPolicyOption</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `managed_service_data`<sup>Required</sup> <a name="managed_service_data" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.managedServiceData"></a>

```python
managed_service_data: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FmsPolicySecurityServicePolicyData
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a>

---


### FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference <a name="FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.resetCode">reset_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_code` <a name="reset_code" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.resetCode"></a>

```python
def reset_code() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.property.codeInput">code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.property.typeInput">type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.property.type">type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.property.codeInput"></a>

```python
code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.property.typeInput"></a>

```python
type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode</a>

---


### FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList <a name="FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries</a>]

---


### FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference <a name="FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.putIcmpTypeCode">put_icmp_type_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.putPortRange">put_port_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.resetCidrBlock">reset_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.resetEgress">reset_egress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.resetIcmpTypeCode">reset_icmp_type_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.resetIpv6CidrBlock">reset_ipv6_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.resetPortRange">reset_port_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.resetRuleAction">reset_rule_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_icmp_type_code` <a name="put_icmp_type_code" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.putIcmpTypeCode"></a>

```python
def put_icmp_type_code(
  code: typing.Union[int, float] = None,
  type: typing.Union[int, float] = None
) -> None
```

###### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.putIcmpTypeCode.parameter.code"></a>

- *Type:* typing.Union[int, float]

Code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#code FmsPolicy#code}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.putIcmpTypeCode.parameter.type"></a>

- *Type:* typing.Union[int, float]

Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#type FmsPolicy#type}

---

##### `put_port_range` <a name="put_port_range" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.putPortRange"></a>

```python
def put_port_range(
  from: typing.Union[int, float] = None,
  to: typing.Union[int, float] = None
) -> None
```

###### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.putPortRange.parameter.from"></a>

- *Type:* typing.Union[int, float]

From Port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#from FmsPolicy#from}

---

###### `to`<sup>Optional</sup> <a name="to" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.putPortRange.parameter.to"></a>

- *Type:* typing.Union[int, float]

To Port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#to FmsPolicy#to}

---

##### `reset_cidr_block` <a name="reset_cidr_block" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.resetCidrBlock"></a>

```python
def reset_cidr_block() -> None
```

##### `reset_egress` <a name="reset_egress" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.resetEgress"></a>

```python
def reset_egress() -> None
```

##### `reset_icmp_type_code` <a name="reset_icmp_type_code" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.resetIcmpTypeCode"></a>

```python
def reset_icmp_type_code() -> None
```

##### `reset_ipv6_cidr_block` <a name="reset_ipv6_cidr_block" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.resetIpv6CidrBlock"></a>

```python
def reset_ipv6_cidr_block() -> None
```

##### `reset_port_range` <a name="reset_port_range" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.resetPortRange"></a>

```python
def reset_port_range() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_rule_action` <a name="reset_rule_action" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.resetRuleAction"></a>

```python
def reset_rule_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.icmpTypeCode">icmp_type_code</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.portRange">port_range</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.cidrBlockInput">cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.egressInput">egress_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.icmpTypeCodeInput">icmp_type_code_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.ipv6CidrBlockInput">ipv6_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.portRangeInput">port_range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.ruleActionInput">rule_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.egress">egress</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.ruleAction">rule_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `icmp_type_code`<sup>Required</sup> <a name="icmp_type_code" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.icmpTypeCode"></a>

```python
icmp_type_code: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCodeOutputReference</a>

---

##### `port_range`<sup>Required</sup> <a name="port_range" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.portRange"></a>

```python
port_range: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference</a>

---

##### `cidr_block_input`<sup>Optional</sup> <a name="cidr_block_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.cidrBlockInput"></a>

```python
cidr_block_input: str
```

- *Type:* str

---

##### `egress_input`<sup>Optional</sup> <a name="egress_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.egressInput"></a>

```python
egress_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `icmp_type_code_input`<sup>Optional</sup> <a name="icmp_type_code_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.icmpTypeCodeInput"></a>

```python
icmp_type_code_input: IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesIcmpTypeCode</a>

---

##### `ipv6_cidr_block_input`<sup>Optional</sup> <a name="ipv6_cidr_block_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.ipv6CidrBlockInput"></a>

```python
ipv6_cidr_block_input: str
```

- *Type:* str

---

##### `port_range_input`<sup>Optional</sup> <a name="port_range_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.portRangeInput"></a>

```python
port_range_input: IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange</a>

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `rule_action_input`<sup>Optional</sup> <a name="rule_action_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.ruleActionInput"></a>

```python
rule_action_input: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.egress"></a>

```python
egress: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ipv6_cidr_block`<sup>Required</sup> <a name="ipv6_cidr_block" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `rule_action`<sup>Required</sup> <a name="rule_action" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.ruleAction"></a>

```python
rule_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries</a>

---


### FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference <a name="FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.resetFrom">reset_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.resetTo">reset_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```

##### `reset_to` <a name="reset_to" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.resetTo"></a>

```python
def reset_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.property.fromInput">from_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.property.toInput">to_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.property.from">from</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.property.to">to</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.property.fromInput"></a>

```python
from_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_input`<sup>Optional</sup> <a name="to_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.property.toInput"></a>

```python
to_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.property.from"></a>

```python
from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.property.to"></a>

```python
to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesPortRange</a>

---


### FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference <a name="FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.resetCode">reset_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_code` <a name="reset_code" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.resetCode"></a>

```python
def reset_code() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.property.codeInput">code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.property.typeInput">type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.property.type">type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.property.codeInput"></a>

```python
code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.property.typeInput"></a>

```python
type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode</a>

---


### FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList <a name="FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries</a>]

---


### FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference <a name="FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.putIcmpTypeCode">put_icmp_type_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.putPortRange">put_port_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.resetCidrBlock">reset_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.resetEgress">reset_egress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.resetIcmpTypeCode">reset_icmp_type_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.resetIpv6CidrBlock">reset_ipv6_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.resetPortRange">reset_port_range</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.resetRuleAction">reset_rule_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_icmp_type_code` <a name="put_icmp_type_code" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.putIcmpTypeCode"></a>

```python
def put_icmp_type_code(
  code: typing.Union[int, float] = None,
  type: typing.Union[int, float] = None
) -> None
```

###### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.putIcmpTypeCode.parameter.code"></a>

- *Type:* typing.Union[int, float]

Code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#code FmsPolicy#code}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.putIcmpTypeCode.parameter.type"></a>

- *Type:* typing.Union[int, float]

Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#type FmsPolicy#type}

---

##### `put_port_range` <a name="put_port_range" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.putPortRange"></a>

```python
def put_port_range(
  from: typing.Union[int, float] = None,
  to: typing.Union[int, float] = None
) -> None
```

###### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.putPortRange.parameter.from"></a>

- *Type:* typing.Union[int, float]

From Port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#from FmsPolicy#from}

---

###### `to`<sup>Optional</sup> <a name="to" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.putPortRange.parameter.to"></a>

- *Type:* typing.Union[int, float]

To Port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#to FmsPolicy#to}

---

##### `reset_cidr_block` <a name="reset_cidr_block" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.resetCidrBlock"></a>

```python
def reset_cidr_block() -> None
```

##### `reset_egress` <a name="reset_egress" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.resetEgress"></a>

```python
def reset_egress() -> None
```

##### `reset_icmp_type_code` <a name="reset_icmp_type_code" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.resetIcmpTypeCode"></a>

```python
def reset_icmp_type_code() -> None
```

##### `reset_ipv6_cidr_block` <a name="reset_ipv6_cidr_block" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.resetIpv6CidrBlock"></a>

```python
def reset_ipv6_cidr_block() -> None
```

##### `reset_port_range` <a name="reset_port_range" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.resetPortRange"></a>

```python
def reset_port_range() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_rule_action` <a name="reset_rule_action" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.resetRuleAction"></a>

```python
def reset_rule_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.icmpTypeCode">icmp_type_code</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.portRange">port_range</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.cidrBlockInput">cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.egressInput">egress_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.icmpTypeCodeInput">icmp_type_code_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.ipv6CidrBlockInput">ipv6_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.portRangeInput">port_range_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.ruleActionInput">rule_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.egress">egress</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.ruleAction">rule_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `icmp_type_code`<sup>Required</sup> <a name="icmp_type_code" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.icmpTypeCode"></a>

```python
icmp_type_code: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCodeOutputReference</a>

---

##### `port_range`<sup>Required</sup> <a name="port_range" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.portRange"></a>

```python
port_range: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference</a>

---

##### `cidr_block_input`<sup>Optional</sup> <a name="cidr_block_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.cidrBlockInput"></a>

```python
cidr_block_input: str
```

- *Type:* str

---

##### `egress_input`<sup>Optional</sup> <a name="egress_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.egressInput"></a>

```python
egress_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `icmp_type_code_input`<sup>Optional</sup> <a name="icmp_type_code_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.icmpTypeCodeInput"></a>

```python
icmp_type_code_input: IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesIcmpTypeCode</a>

---

##### `ipv6_cidr_block_input`<sup>Optional</sup> <a name="ipv6_cidr_block_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.ipv6CidrBlockInput"></a>

```python
ipv6_cidr_block_input: str
```

- *Type:* str

---

##### `port_range_input`<sup>Optional</sup> <a name="port_range_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.portRangeInput"></a>

```python
port_range_input: IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange</a>

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `rule_action_input`<sup>Optional</sup> <a name="rule_action_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.ruleActionInput"></a>

```python
rule_action_input: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.egress"></a>

```python
egress: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ipv6_cidr_block`<sup>Required</sup> <a name="ipv6_cidr_block" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `rule_action`<sup>Required</sup> <a name="rule_action" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.ruleAction"></a>

```python
rule_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries</a>

---


### FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference <a name="FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.resetFrom">reset_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.resetTo">reset_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```

##### `reset_to` <a name="reset_to" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.resetTo"></a>

```python
def reset_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.property.fromInput">from_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.property.toInput">to_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.property.from">from</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.property.to">to</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.property.fromInput"></a>

```python
from_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_input`<sup>Optional</sup> <a name="to_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.property.toInput"></a>

```python
to_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.property.from"></a>

```python
from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.property.to"></a>

```python
to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRangeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesPortRange</a>

---


### FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference <a name="FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.putFirstEntries">put_first_entries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.putLastEntries">put_last_entries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.resetFirstEntries">reset_first_entries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.resetForceRemediateForFirstEntries">reset_force_remediate_for_first_entries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.resetForceRemediateForLastEntries">reset_force_remediate_for_last_entries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.resetLastEntries">reset_last_entries</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_first_entries` <a name="put_first_entries" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.putFirstEntries"></a>

```python
def put_first_entries(
  value: IResolvable | typing.List[FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.putFirstEntries.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries</a>]

---

##### `put_last_entries` <a name="put_last_entries" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.putLastEntries"></a>

```python
def put_last_entries(
  value: IResolvable | typing.List[FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.putLastEntries.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries</a>]

---

##### `reset_first_entries` <a name="reset_first_entries" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.resetFirstEntries"></a>

```python
def reset_first_entries() -> None
```

##### `reset_force_remediate_for_first_entries` <a name="reset_force_remediate_for_first_entries" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.resetForceRemediateForFirstEntries"></a>

```python
def reset_force_remediate_for_first_entries() -> None
```

##### `reset_force_remediate_for_last_entries` <a name="reset_force_remediate_for_last_entries" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.resetForceRemediateForLastEntries"></a>

```python
def reset_force_remediate_for_last_entries() -> None
```

##### `reset_last_entries` <a name="reset_last_entries" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.resetLastEntries"></a>

```python
def reset_last_entries() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.property.firstEntries">first_entries</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.property.lastEntries">last_entries</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.property.firstEntriesInput">first_entries_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.property.forceRemediateForFirstEntriesInput">force_remediate_for_first_entries_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.property.forceRemediateForLastEntriesInput">force_remediate_for_last_entries_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.property.lastEntriesInput">last_entries_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.property.forceRemediateForFirstEntries">force_remediate_for_first_entries</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.property.forceRemediateForLastEntries">force_remediate_for_last_entries</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `first_entries`<sup>Required</sup> <a name="first_entries" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.property.firstEntries"></a>

```python
first_entries: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntriesList</a>

---

##### `last_entries`<sup>Required</sup> <a name="last_entries" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.property.lastEntries"></a>

```python
last_entries: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntriesList</a>

---

##### `first_entries_input`<sup>Optional</sup> <a name="first_entries_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.property.firstEntriesInput"></a>

```python
first_entries_input: IResolvable | typing.List[FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries</a>]

---

##### `force_remediate_for_first_entries_input`<sup>Optional</sup> <a name="force_remediate_for_first_entries_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.property.forceRemediateForFirstEntriesInput"></a>

```python
force_remediate_for_first_entries_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `force_remediate_for_last_entries_input`<sup>Optional</sup> <a name="force_remediate_for_last_entries_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.property.forceRemediateForLastEntriesInput"></a>

```python
force_remediate_for_last_entries_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `last_entries_input`<sup>Optional</sup> <a name="last_entries_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.property.lastEntriesInput"></a>

```python
last_entries_input: IResolvable | typing.List[FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries</a>]

---

##### `force_remediate_for_first_entries`<sup>Required</sup> <a name="force_remediate_for_first_entries" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.property.forceRemediateForFirstEntries"></a>

```python
force_remediate_for_first_entries: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `force_remediate_for_last_entries`<sup>Required</sup> <a name="force_remediate_for_last_entries" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.property.forceRemediateForLastEntries"></a>

```python
force_remediate_for_last_entries: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet</a>

---


### FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference <a name="FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.putNetworkAclEntrySet">put_network_acl_entry_set</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.resetNetworkAclEntrySet">reset_network_acl_entry_set</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_network_acl_entry_set` <a name="put_network_acl_entry_set" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.putNetworkAclEntrySet"></a>

```python
def put_network_acl_entry_set(
  first_entries: IResolvable | typing.List[FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries] = None,
  force_remediate_for_first_entries: bool | IResolvable = None,
  force_remediate_for_last_entries: bool | IResolvable = None,
  last_entries: IResolvable | typing.List[FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries] = None
) -> None
```

###### `first_entries`<sup>Optional</sup> <a name="first_entries" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.putNetworkAclEntrySet.parameter.firstEntries"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntries</a>]

NetworkAcl entry list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#first_entries FmsPolicy#first_entries}

---

###### `force_remediate_for_first_entries`<sup>Optional</sup> <a name="force_remediate_for_first_entries" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.putNetworkAclEntrySet.parameter.forceRemediateForFirstEntries"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#force_remediate_for_first_entries FmsPolicy#force_remediate_for_first_entries}.

---

###### `force_remediate_for_last_entries`<sup>Optional</sup> <a name="force_remediate_for_last_entries" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.putNetworkAclEntrySet.parameter.forceRemediateForLastEntries"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#force_remediate_for_last_entries FmsPolicy#force_remediate_for_last_entries}.

---

###### `last_entries`<sup>Optional</sup> <a name="last_entries" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.putNetworkAclEntrySet.parameter.lastEntries"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntries</a>]

NetworkAcl entry list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#last_entries FmsPolicy#last_entries}

---

##### `reset_network_acl_entry_set` <a name="reset_network_acl_entry_set" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.resetNetworkAclEntrySet"></a>

```python
def reset_network_acl_entry_set() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.property.networkAclEntrySet">network_acl_entry_set</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.property.networkAclEntrySetInput">network_acl_entry_set_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_acl_entry_set`<sup>Required</sup> <a name="network_acl_entry_set" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.property.networkAclEntrySet"></a>

```python
network_acl_entry_set: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference</a>

---

##### `network_acl_entry_set_input`<sup>Optional</sup> <a name="network_acl_entry_set_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.property.networkAclEntrySetInput"></a>

```python
network_acl_entry_set_input: IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy</a>

---


### FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference <a name="FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.resetFirewallDeploymentModel">reset_firewall_deployment_model</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_firewall_deployment_model` <a name="reset_firewall_deployment_model" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.resetFirewallDeploymentModel"></a>

```python
def reset_firewall_deployment_model() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.property.firewallDeploymentModelInput">firewall_deployment_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.property.firewallDeploymentModel">firewall_deployment_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `firewall_deployment_model_input`<sup>Optional</sup> <a name="firewall_deployment_model_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.property.firewallDeploymentModelInput"></a>

```python
firewall_deployment_model_input: str
```

- *Type:* str

---

##### `firewall_deployment_model`<sup>Required</sup> <a name="firewall_deployment_model" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.property.firewallDeploymentModel"></a>

```python
firewall_deployment_model: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy</a>

---


### FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference <a name="FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.putNetworkAclCommonPolicy">put_network_acl_common_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.putNetworkFirewallPolicy">put_network_firewall_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.putThirdPartyFirewallPolicy">put_third_party_firewall_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.resetNetworkAclCommonPolicy">reset_network_acl_common_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.resetNetworkFirewallPolicy">reset_network_firewall_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.resetThirdPartyFirewallPolicy">reset_third_party_firewall_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_network_acl_common_policy` <a name="put_network_acl_common_policy" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.putNetworkAclCommonPolicy"></a>

```python
def put_network_acl_common_policy(
  network_acl_entry_set: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet = None
) -> None
```

###### `network_acl_entry_set`<sup>Optional</sup> <a name="network_acl_entry_set" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.putNetworkAclCommonPolicy.parameter.networkAclEntrySet"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet</a>

Network ACL entry set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#network_acl_entry_set FmsPolicy#network_acl_entry_set}

---

##### `put_network_firewall_policy` <a name="put_network_firewall_policy" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.putNetworkFirewallPolicy"></a>

```python
def put_network_firewall_policy(
  firewall_deployment_model: str = None
) -> None
```

###### `firewall_deployment_model`<sup>Optional</sup> <a name="firewall_deployment_model" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.putNetworkFirewallPolicy.parameter.firewallDeploymentModel"></a>

- *Type:* str

Firewall deployment mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#firewall_deployment_model FmsPolicy#firewall_deployment_model}

---

##### `put_third_party_firewall_policy` <a name="put_third_party_firewall_policy" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.putThirdPartyFirewallPolicy"></a>

```python
def put_third_party_firewall_policy(
  firewall_deployment_model: str = None
) -> None
```

###### `firewall_deployment_model`<sup>Optional</sup> <a name="firewall_deployment_model" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.putThirdPartyFirewallPolicy.parameter.firewallDeploymentModel"></a>

- *Type:* str

Firewall deployment mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fms_policy#firewall_deployment_model FmsPolicy#firewall_deployment_model}

---

##### `reset_network_acl_common_policy` <a name="reset_network_acl_common_policy" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.resetNetworkAclCommonPolicy"></a>

```python
def reset_network_acl_common_policy() -> None
```

##### `reset_network_firewall_policy` <a name="reset_network_firewall_policy" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.resetNetworkFirewallPolicy"></a>

```python
def reset_network_firewall_policy() -> None
```

##### `reset_third_party_firewall_policy` <a name="reset_third_party_firewall_policy" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.resetThirdPartyFirewallPolicy"></a>

```python
def reset_third_party_firewall_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.networkAclCommonPolicy">network_acl_common_policy</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.networkFirewallPolicy">network_firewall_policy</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.thirdPartyFirewallPolicy">third_party_firewall_policy</a></code> | <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.networkAclCommonPolicyInput">network_acl_common_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.networkFirewallPolicyInput">network_firewall_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.thirdPartyFirewallPolicyInput">third_party_firewall_policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption">FmsPolicySecurityServicePolicyDataPolicyOption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_acl_common_policy`<sup>Required</sup> <a name="network_acl_common_policy" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.networkAclCommonPolicy"></a>

```python
network_acl_common_policy: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference</a>

---

##### `network_firewall_policy`<sup>Required</sup> <a name="network_firewall_policy" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.networkFirewallPolicy"></a>

```python
network_firewall_policy: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference</a>

---

##### `third_party_firewall_policy`<sup>Required</sup> <a name="third_party_firewall_policy" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.thirdPartyFirewallPolicy"></a>

```python
third_party_firewall_policy: FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference">FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference</a>

---

##### `network_acl_common_policy_input`<sup>Optional</sup> <a name="network_acl_common_policy_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.networkAclCommonPolicyInput"></a>

```python
network_acl_common_policy_input: IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy</a>

---

##### `network_firewall_policy_input`<sup>Optional</sup> <a name="network_firewall_policy_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.networkFirewallPolicyInput"></a>

```python
network_firewall_policy_input: IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy</a>

---

##### `third_party_firewall_policy_input`<sup>Optional</sup> <a name="third_party_firewall_policy_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.thirdPartyFirewallPolicyInput"></a>

```python
third_party_firewall_policy_input: IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FmsPolicySecurityServicePolicyDataPolicyOption
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOption">FmsPolicySecurityServicePolicyDataPolicyOption</a>

---


### FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference <a name="FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.resetFirewallDeploymentModel">reset_firewall_deployment_model</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_firewall_deployment_model` <a name="reset_firewall_deployment_model" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.resetFirewallDeploymentModel"></a>

```python
def reset_firewall_deployment_model() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.property.firewallDeploymentModelInput">firewall_deployment_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.property.firewallDeploymentModel">firewall_deployment_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `firewall_deployment_model_input`<sup>Optional</sup> <a name="firewall_deployment_model_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.property.firewallDeploymentModelInput"></a>

```python
firewall_deployment_model_input: str
```

- *Type:* str

---

##### `firewall_deployment_model`<sup>Required</sup> <a name="firewall_deployment_model" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.property.firewallDeploymentModel"></a>

```python
firewall_deployment_model: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy">FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy</a>

---


### FmsPolicyTagsList <a name="FmsPolicyTagsList" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicyTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FmsPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTags">FmsPolicyTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FmsPolicyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTags">FmsPolicyTags</a>]

---


### FmsPolicyTagsOutputReference <a name="FmsPolicyTagsOutputReference" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import fms_policy

fmsPolicy.FmsPolicyTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTags">FmsPolicyTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.fmsPolicy.FmsPolicyTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FmsPolicyTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.fmsPolicy.FmsPolicyTags">FmsPolicyTags</a>

---



