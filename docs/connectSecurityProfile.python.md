# `connectSecurityProfile` Submodule <a name="`connectSecurityProfile` Submodule" id="@cdktn/provider-awscc.connectSecurityProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectSecurityProfile <a name="ConnectSecurityProfile" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile awscc_connect_security_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_arn: str,
  security_profile_name: str,
  allowed_access_control_hierarchy_group_id: str = None,
  allowed_access_control_tags: IResolvable | typing.List[ConnectSecurityProfileAllowedAccessControlTags] = None,
  allowed_flow_modules: IResolvable | typing.List[ConnectSecurityProfileAllowedFlowModules] = None,
  applications: IResolvable | typing.List[ConnectSecurityProfileApplications] = None,
  description: str = None,
  granular_access_control_configuration: ConnectSecurityProfileGranularAccessControlConfiguration = None,
  hierarchy_restricted_resources: typing.List[str] = None,
  permissions: typing.List[str] = None,
  tag_restricted_resources: typing.List[str] = None,
  tags: IResolvable | typing.List[ConnectSecurityProfileTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.securityProfileName">security_profile_name</a></code> | <code>str</code> | The name of the security profile. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.allowedAccessControlHierarchyGroupId">allowed_access_control_hierarchy_group_id</a></code> | <code>str</code> | The identifier of the hierarchy group that a security profile uses to restrict access to resources in Amazon Connect. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.allowedAccessControlTags">allowed_access_control_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags">ConnectSecurityProfileAllowedAccessControlTags</a>]</code> | The list of tags that a security profile uses to restrict access to resources in Amazon Connect. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.allowedFlowModules">allowed_flow_modules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules">ConnectSecurityProfileAllowedFlowModules</a>]</code> | The list of flow-module resources to be linked to a security profile in Amazon Connect. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.applications">applications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications">ConnectSecurityProfileApplications</a>]</code> | A list of third-party applications that the security profile will give access to. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the security profile. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.granularAccessControlConfiguration">granular_access_control_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#granular_access_control_configuration ConnectSecurityProfile#granular_access_control_configuration}. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.hierarchyRestrictedResources">hierarchy_restricted_resources</a></code> | <code>typing.List[str]</code> | The list of resources that a security profile applies hierarchy restrictions to in Amazon Connect. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.permissions">permissions</a></code> | <code>typing.List[str]</code> | Permissions assigned to the security profile. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.tagRestrictedResources">tag_restricted_resources</a></code> | <code>typing.List[str]</code> | The list of resources that a security profile applies tag restrictions to in Amazon Connect. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags">ConnectSecurityProfileTags</a>]</code> | The tags used to organize, track, or control access for this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.instanceArn"></a>

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#instance_arn ConnectSecurityProfile#instance_arn}

---

##### `security_profile_name`<sup>Required</sup> <a name="security_profile_name" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.securityProfileName"></a>

- *Type:* str

The name of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#security_profile_name ConnectSecurityProfile#security_profile_name}

---

##### `allowed_access_control_hierarchy_group_id`<sup>Optional</sup> <a name="allowed_access_control_hierarchy_group_id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.allowedAccessControlHierarchyGroupId"></a>

- *Type:* str

The identifier of the hierarchy group that a security profile uses to restrict access to resources in Amazon Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#allowed_access_control_hierarchy_group_id ConnectSecurityProfile#allowed_access_control_hierarchy_group_id}

---

##### `allowed_access_control_tags`<sup>Optional</sup> <a name="allowed_access_control_tags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.allowedAccessControlTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags">ConnectSecurityProfileAllowedAccessControlTags</a>]

The list of tags that a security profile uses to restrict access to resources in Amazon Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#allowed_access_control_tags ConnectSecurityProfile#allowed_access_control_tags}

---

##### `allowed_flow_modules`<sup>Optional</sup> <a name="allowed_flow_modules" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.allowedFlowModules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules">ConnectSecurityProfileAllowedFlowModules</a>]

The list of flow-module resources to be linked to a security profile in Amazon Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#allowed_flow_modules ConnectSecurityProfile#allowed_flow_modules}

---

##### `applications`<sup>Optional</sup> <a name="applications" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.applications"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications">ConnectSecurityProfileApplications</a>]

A list of third-party applications that the security profile will give access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#applications ConnectSecurityProfile#applications}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.description"></a>

- *Type:* str

The description of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#description ConnectSecurityProfile#description}

---

##### `granular_access_control_configuration`<sup>Optional</sup> <a name="granular_access_control_configuration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.granularAccessControlConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#granular_access_control_configuration ConnectSecurityProfile#granular_access_control_configuration}.

---

##### `hierarchy_restricted_resources`<sup>Optional</sup> <a name="hierarchy_restricted_resources" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.hierarchyRestrictedResources"></a>

- *Type:* typing.List[str]

The list of resources that a security profile applies hierarchy restrictions to in Amazon Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#hierarchy_restricted_resources ConnectSecurityProfile#hierarchy_restricted_resources}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.permissions"></a>

- *Type:* typing.List[str]

Permissions assigned to the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#permissions ConnectSecurityProfile#permissions}

---

##### `tag_restricted_resources`<sup>Optional</sup> <a name="tag_restricted_resources" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.tagRestrictedResources"></a>

- *Type:* typing.List[str]

The list of resources that a security profile applies tag restrictions to in Amazon Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#tag_restricted_resources ConnectSecurityProfile#tag_restricted_resources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags">ConnectSecurityProfileTags</a>]

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#tags ConnectSecurityProfile#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putAllowedAccessControlTags">put_allowed_access_control_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putAllowedFlowModules">put_allowed_flow_modules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putApplications">put_applications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putGranularAccessControlConfiguration">put_granular_access_control_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetAllowedAccessControlHierarchyGroupId">reset_allowed_access_control_hierarchy_group_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetAllowedAccessControlTags">reset_allowed_access_control_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetAllowedFlowModules">reset_allowed_flow_modules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetApplications">reset_applications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetGranularAccessControlConfiguration">reset_granular_access_control_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetHierarchyRestrictedResources">reset_hierarchy_restricted_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetTagRestrictedResources">reset_tag_restricted_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_allowed_access_control_tags` <a name="put_allowed_access_control_tags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putAllowedAccessControlTags"></a>

```python
def put_allowed_access_control_tags(
  value: IResolvable | typing.List[ConnectSecurityProfileAllowedAccessControlTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putAllowedAccessControlTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags">ConnectSecurityProfileAllowedAccessControlTags</a>]

---

##### `put_allowed_flow_modules` <a name="put_allowed_flow_modules" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putAllowedFlowModules"></a>

```python
def put_allowed_flow_modules(
  value: IResolvable | typing.List[ConnectSecurityProfileAllowedFlowModules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putAllowedFlowModules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules">ConnectSecurityProfileAllowedFlowModules</a>]

---

##### `put_applications` <a name="put_applications" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putApplications"></a>

```python
def put_applications(
  value: IResolvable | typing.List[ConnectSecurityProfileApplications]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putApplications.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications">ConnectSecurityProfileApplications</a>]

---

##### `put_granular_access_control_configuration` <a name="put_granular_access_control_configuration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putGranularAccessControlConfiguration"></a>

```python
def put_granular_access_control_configuration(
  data_table_access_control_configuration: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration = None
) -> None
```

###### `data_table_access_control_configuration`<sup>Optional</sup> <a name="data_table_access_control_configuration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putGranularAccessControlConfiguration.parameter.dataTableAccessControlConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration</a>

Defines the access control configuration for data tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#data_table_access_control_configuration ConnectSecurityProfile#data_table_access_control_configuration}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ConnectSecurityProfileTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags">ConnectSecurityProfileTags</a>]

---

##### `reset_allowed_access_control_hierarchy_group_id` <a name="reset_allowed_access_control_hierarchy_group_id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetAllowedAccessControlHierarchyGroupId"></a>

```python
def reset_allowed_access_control_hierarchy_group_id() -> None
```

##### `reset_allowed_access_control_tags` <a name="reset_allowed_access_control_tags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetAllowedAccessControlTags"></a>

```python
def reset_allowed_access_control_tags() -> None
```

##### `reset_allowed_flow_modules` <a name="reset_allowed_flow_modules" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetAllowedFlowModules"></a>

```python
def reset_allowed_flow_modules() -> None
```

##### `reset_applications` <a name="reset_applications" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetApplications"></a>

```python
def reset_applications() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_granular_access_control_configuration` <a name="reset_granular_access_control_configuration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetGranularAccessControlConfiguration"></a>

```python
def reset_granular_access_control_configuration() -> None
```

##### `reset_hierarchy_restricted_resources` <a name="reset_hierarchy_restricted_resources" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetHierarchyRestrictedResources"></a>

```python
def reset_hierarchy_restricted_resources() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_tag_restricted_resources` <a name="reset_tag_restricted_resources" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetTagRestrictedResources"></a>

```python
def reset_tag_restricted_resources() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConnectSecurityProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isConstruct"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isTerraformElement"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isTerraformResource"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConnectSecurityProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConnectSecurityProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConnectSecurityProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectSecurityProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlTags">allowed_access_control_tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList">ConnectSecurityProfileAllowedAccessControlTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedFlowModules">allowed_flow_modules</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList">ConnectSecurityProfileAllowedFlowModulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.applications">applications</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList">ConnectSecurityProfileApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.granularAccessControlConfiguration">granular_access_control_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference">ConnectSecurityProfileGranularAccessControlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.lastModifiedRegion">last_modified_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.lastModifiedTime">last_modified_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.securityProfileArn">security_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList">ConnectSecurityProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlHierarchyGroupIdInput">allowed_access_control_hierarchy_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlTagsInput">allowed_access_control_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags">ConnectSecurityProfileAllowedAccessControlTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedFlowModulesInput">allowed_flow_modules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules">ConnectSecurityProfileAllowedFlowModules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.applicationsInput">applications_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications">ConnectSecurityProfileApplications</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.granularAccessControlConfigurationInput">granular_access_control_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.hierarchyRestrictedResourcesInput">hierarchy_restricted_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.permissionsInput">permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.securityProfileNameInput">security_profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tagRestrictedResourcesInput">tag_restricted_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags">ConnectSecurityProfileTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlHierarchyGroupId">allowed_access_control_hierarchy_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.hierarchyRestrictedResources">hierarchy_restricted_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.securityProfileName">security_profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tagRestrictedResources">tag_restricted_resources</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allowed_access_control_tags`<sup>Required</sup> <a name="allowed_access_control_tags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlTags"></a>

```python
allowed_access_control_tags: ConnectSecurityProfileAllowedAccessControlTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList">ConnectSecurityProfileAllowedAccessControlTagsList</a>

---

##### `allowed_flow_modules`<sup>Required</sup> <a name="allowed_flow_modules" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedFlowModules"></a>

```python
allowed_flow_modules: ConnectSecurityProfileAllowedFlowModulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList">ConnectSecurityProfileAllowedFlowModulesList</a>

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.applications"></a>

```python
applications: ConnectSecurityProfileApplicationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList">ConnectSecurityProfileApplicationsList</a>

---

##### `granular_access_control_configuration`<sup>Required</sup> <a name="granular_access_control_configuration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.granularAccessControlConfiguration"></a>

```python
granular_access_control_configuration: ConnectSecurityProfileGranularAccessControlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference">ConnectSecurityProfileGranularAccessControlConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_region`<sup>Required</sup> <a name="last_modified_region" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.lastModifiedRegion"></a>

```python
last_modified_region: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.lastModifiedTime"></a>

```python
last_modified_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_profile_arn`<sup>Required</sup> <a name="security_profile_arn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.securityProfileArn"></a>

```python
security_profile_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tags"></a>

```python
tags: ConnectSecurityProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList">ConnectSecurityProfileTagsList</a>

---

##### `allowed_access_control_hierarchy_group_id_input`<sup>Optional</sup> <a name="allowed_access_control_hierarchy_group_id_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlHierarchyGroupIdInput"></a>

```python
allowed_access_control_hierarchy_group_id_input: str
```

- *Type:* str

---

##### `allowed_access_control_tags_input`<sup>Optional</sup> <a name="allowed_access_control_tags_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlTagsInput"></a>

```python
allowed_access_control_tags_input: IResolvable | typing.List[ConnectSecurityProfileAllowedAccessControlTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags">ConnectSecurityProfileAllowedAccessControlTags</a>]

---

##### `allowed_flow_modules_input`<sup>Optional</sup> <a name="allowed_flow_modules_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedFlowModulesInput"></a>

```python
allowed_flow_modules_input: IResolvable | typing.List[ConnectSecurityProfileAllowedFlowModules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules">ConnectSecurityProfileAllowedFlowModules</a>]

---

##### `applications_input`<sup>Optional</sup> <a name="applications_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.applicationsInput"></a>

```python
applications_input: IResolvable | typing.List[ConnectSecurityProfileApplications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications">ConnectSecurityProfileApplications</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `granular_access_control_configuration_input`<sup>Optional</sup> <a name="granular_access_control_configuration_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.granularAccessControlConfigurationInput"></a>

```python
granular_access_control_configuration_input: IResolvable | ConnectSecurityProfileGranularAccessControlConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfiguration</a>

---

##### `hierarchy_restricted_resources_input`<sup>Optional</sup> <a name="hierarchy_restricted_resources_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.hierarchyRestrictedResourcesInput"></a>

```python
hierarchy_restricted_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.permissionsInput"></a>

```python
permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_profile_name_input`<sup>Optional</sup> <a name="security_profile_name_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.securityProfileNameInput"></a>

```python
security_profile_name_input: str
```

- *Type:* str

---

##### `tag_restricted_resources_input`<sup>Optional</sup> <a name="tag_restricted_resources_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tagRestrictedResourcesInput"></a>

```python
tag_restricted_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ConnectSecurityProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags">ConnectSecurityProfileTags</a>]

---

##### `allowed_access_control_hierarchy_group_id`<sup>Required</sup> <a name="allowed_access_control_hierarchy_group_id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.allowedAccessControlHierarchyGroupId"></a>

```python
allowed_access_control_hierarchy_group_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `hierarchy_restricted_resources`<sup>Required</sup> <a name="hierarchy_restricted_resources" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.hierarchyRestrictedResources"></a>

```python
hierarchy_restricted_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_profile_name`<sup>Required</sup> <a name="security_profile_name" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.securityProfileName"></a>

```python
security_profile_name: str
```

- *Type:* str

---

##### `tag_restricted_resources`<sup>Required</sup> <a name="tag_restricted_resources" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tagRestrictedResources"></a>

```python
tag_restricted_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectSecurityProfileAllowedAccessControlTags <a name="ConnectSecurityProfileAllowedAccessControlTags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#key ConnectSecurityProfile#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#value ConnectSecurityProfile#value}

---

### ConnectSecurityProfileAllowedFlowModules <a name="ConnectSecurityProfileAllowedFlowModules" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules(
  flow_module_id: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules.property.flowModuleId">flow_module_id</a></code> | <code>str</code> | The identifier of the application that you want to give access to. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules.property.type">type</a></code> | <code>str</code> | The type of the first-party application. |

---

##### `flow_module_id`<sup>Optional</sup> <a name="flow_module_id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules.property.flowModuleId"></a>

```python
flow_module_id: str
```

- *Type:* str

The identifier of the application that you want to give access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#flow_module_id ConnectSecurityProfile#flow_module_id}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the first-party application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#type ConnectSecurityProfile#type}

---

### ConnectSecurityProfileApplications <a name="ConnectSecurityProfileApplications" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfileApplications(
  application_permissions: typing.List[str] = None,
  namespace: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications.property.applicationPermissions">application_permissions</a></code> | <code>typing.List[str]</code> | The permissions that the agent is granted on the application. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications.property.namespace">namespace</a></code> | <code>str</code> | Namespace of the application that you want to give access to. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications.property.type">type</a></code> | <code>str</code> | The type of the application. |

---

##### `application_permissions`<sup>Optional</sup> <a name="application_permissions" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications.property.applicationPermissions"></a>

```python
application_permissions: typing.List[str]
```

- *Type:* typing.List[str]

The permissions that the agent is granted on the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#application_permissions ConnectSecurityProfile#application_permissions}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace of the application that you want to give access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#namespace ConnectSecurityProfile#namespace}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#type ConnectSecurityProfile#type}

---

### ConnectSecurityProfileConfig <a name="ConnectSecurityProfileConfig" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_arn: str,
  security_profile_name: str,
  allowed_access_control_hierarchy_group_id: str = None,
  allowed_access_control_tags: IResolvable | typing.List[ConnectSecurityProfileAllowedAccessControlTags] = None,
  allowed_flow_modules: IResolvable | typing.List[ConnectSecurityProfileAllowedFlowModules] = None,
  applications: IResolvable | typing.List[ConnectSecurityProfileApplications] = None,
  description: str = None,
  granular_access_control_configuration: ConnectSecurityProfileGranularAccessControlConfiguration = None,
  hierarchy_restricted_resources: typing.List[str] = None,
  permissions: typing.List[str] = None,
  tag_restricted_resources: typing.List[str] = None,
  tags: IResolvable | typing.List[ConnectSecurityProfileTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.instanceArn">instance_arn</a></code> | <code>str</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.securityProfileName">security_profile_name</a></code> | <code>str</code> | The name of the security profile. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.allowedAccessControlHierarchyGroupId">allowed_access_control_hierarchy_group_id</a></code> | <code>str</code> | The identifier of the hierarchy group that a security profile uses to restrict access to resources in Amazon Connect. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.allowedAccessControlTags">allowed_access_control_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags">ConnectSecurityProfileAllowedAccessControlTags</a>]</code> | The list of tags that a security profile uses to restrict access to resources in Amazon Connect. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.allowedFlowModules">allowed_flow_modules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules">ConnectSecurityProfileAllowedFlowModules</a>]</code> | The list of flow-module resources to be linked to a security profile in Amazon Connect. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.applications">applications</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications">ConnectSecurityProfileApplications</a>]</code> | A list of third-party applications that the security profile will give access to. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.description">description</a></code> | <code>str</code> | The description of the security profile. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.granularAccessControlConfiguration">granular_access_control_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#granular_access_control_configuration ConnectSecurityProfile#granular_access_control_configuration}. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.hierarchyRestrictedResources">hierarchy_restricted_resources</a></code> | <code>typing.List[str]</code> | The list of resources that a security profile applies hierarchy restrictions to in Amazon Connect. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | Permissions assigned to the security profile. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.tagRestrictedResources">tag_restricted_resources</a></code> | <code>typing.List[str]</code> | The list of resources that a security profile applies tag restrictions to in Amazon Connect. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags">ConnectSecurityProfileTags</a>]</code> | The tags used to organize, track, or control access for this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#instance_arn ConnectSecurityProfile#instance_arn}

---

##### `security_profile_name`<sup>Required</sup> <a name="security_profile_name" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.securityProfileName"></a>

```python
security_profile_name: str
```

- *Type:* str

The name of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#security_profile_name ConnectSecurityProfile#security_profile_name}

---

##### `allowed_access_control_hierarchy_group_id`<sup>Optional</sup> <a name="allowed_access_control_hierarchy_group_id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.allowedAccessControlHierarchyGroupId"></a>

```python
allowed_access_control_hierarchy_group_id: str
```

- *Type:* str

The identifier of the hierarchy group that a security profile uses to restrict access to resources in Amazon Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#allowed_access_control_hierarchy_group_id ConnectSecurityProfile#allowed_access_control_hierarchy_group_id}

---

##### `allowed_access_control_tags`<sup>Optional</sup> <a name="allowed_access_control_tags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.allowedAccessControlTags"></a>

```python
allowed_access_control_tags: IResolvable | typing.List[ConnectSecurityProfileAllowedAccessControlTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags">ConnectSecurityProfileAllowedAccessControlTags</a>]

The list of tags that a security profile uses to restrict access to resources in Amazon Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#allowed_access_control_tags ConnectSecurityProfile#allowed_access_control_tags}

---

##### `allowed_flow_modules`<sup>Optional</sup> <a name="allowed_flow_modules" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.allowedFlowModules"></a>

```python
allowed_flow_modules: IResolvable | typing.List[ConnectSecurityProfileAllowedFlowModules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules">ConnectSecurityProfileAllowedFlowModules</a>]

The list of flow-module resources to be linked to a security profile in Amazon Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#allowed_flow_modules ConnectSecurityProfile#allowed_flow_modules}

---

##### `applications`<sup>Optional</sup> <a name="applications" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.applications"></a>

```python
applications: IResolvable | typing.List[ConnectSecurityProfileApplications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications">ConnectSecurityProfileApplications</a>]

A list of third-party applications that the security profile will give access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#applications ConnectSecurityProfile#applications}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#description ConnectSecurityProfile#description}

---

##### `granular_access_control_configuration`<sup>Optional</sup> <a name="granular_access_control_configuration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.granularAccessControlConfiguration"></a>

```python
granular_access_control_configuration: ConnectSecurityProfileGranularAccessControlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#granular_access_control_configuration ConnectSecurityProfile#granular_access_control_configuration}.

---

##### `hierarchy_restricted_resources`<sup>Optional</sup> <a name="hierarchy_restricted_resources" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.hierarchyRestrictedResources"></a>

```python
hierarchy_restricted_resources: typing.List[str]
```

- *Type:* typing.List[str]

The list of resources that a security profile applies hierarchy restrictions to in Amazon Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#hierarchy_restricted_resources ConnectSecurityProfile#hierarchy_restricted_resources}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

Permissions assigned to the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#permissions ConnectSecurityProfile#permissions}

---

##### `tag_restricted_resources`<sup>Optional</sup> <a name="tag_restricted_resources" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.tagRestrictedResources"></a>

```python
tag_restricted_resources: typing.List[str]
```

- *Type:* typing.List[str]

The list of resources that a security profile applies tag restrictions to in Amazon Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#tag_restricted_resources ConnectSecurityProfile#tag_restricted_resources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ConnectSecurityProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags">ConnectSecurityProfileTags</a>]

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#tags ConnectSecurityProfile#tags}

---

### ConnectSecurityProfileGranularAccessControlConfiguration <a name="ConnectSecurityProfileGranularAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration(
  data_table_access_control_configuration: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration.property.dataTableAccessControlConfiguration">data_table_access_control_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration</a></code> | Defines the access control configuration for data tables. |

---

##### `data_table_access_control_configuration`<sup>Optional</sup> <a name="data_table_access_control_configuration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration.property.dataTableAccessControlConfiguration"></a>

```python
data_table_access_control_configuration: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration</a>

Defines the access control configuration for data tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#data_table_access_control_configuration ConnectSecurityProfile#data_table_access_control_configuration}

---

### ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration <a name="ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration(
  primary_attribute_access_control_configuration: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration.property.primaryAttributeAccessControlConfiguration">primary_attribute_access_control_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration</a></code> | Contains the configuration for record-based access control. |

---

##### `primary_attribute_access_control_configuration`<sup>Optional</sup> <a name="primary_attribute_access_control_configuration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration.property.primaryAttributeAccessControlConfiguration"></a>

```python
primary_attribute_access_control_configuration: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration</a>

Contains the configuration for record-based access control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#primary_attribute_access_control_configuration ConnectSecurityProfile#primary_attribute_access_control_configuration}

---

### ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration <a name="ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration(
  primary_attribute_values: IResolvable | typing.List[ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration.property.primaryAttributeValues">primary_attribute_values</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a>]</code> | An array of PrimaryAttributeValue objects. |

---

##### `primary_attribute_values`<sup>Optional</sup> <a name="primary_attribute_values" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration.property.primaryAttributeValues"></a>

```python
primary_attribute_values: IResolvable | typing.List[ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a>]

An array of PrimaryAttributeValue objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#primary_attribute_values ConnectSecurityProfile#primary_attribute_values}

---

### ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues <a name="ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues(
  access_type: str = None,
  attribute_name: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.property.accessType">access_type</a></code> | <code>str</code> | Specifies the type of access granted. Currently, only "ALLOW" is supported. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.property.attributeName">attribute_name</a></code> | <code>str</code> | The name of the primary attribute. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.property.values">values</a></code> | <code>typing.List[str]</code> | An array of allowed primary values for the specified primary attribute. |

---

##### `access_type`<sup>Optional</sup> <a name="access_type" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

Specifies the type of access granted. Currently, only "ALLOW" is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#access_type ConnectSecurityProfile#access_type}

---

##### `attribute_name`<sup>Optional</sup> <a name="attribute_name" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

The name of the primary attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#attribute_name ConnectSecurityProfile#attribute_name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

An array of allowed primary values for the specified primary attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#values ConnectSecurityProfile#values}

---

### ConnectSecurityProfileTags <a name="ConnectSecurityProfileTags" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfileTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#key ConnectSecurityProfile#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#value ConnectSecurityProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectSecurityProfileAllowedAccessControlTagsList <a name="ConnectSecurityProfileAllowedAccessControlTagsList" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectSecurityProfileAllowedAccessControlTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags">ConnectSecurityProfileAllowedAccessControlTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectSecurityProfileAllowedAccessControlTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags">ConnectSecurityProfileAllowedAccessControlTags</a>]

---


### ConnectSecurityProfileAllowedAccessControlTagsOutputReference <a name="ConnectSecurityProfileAllowedAccessControlTagsOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags">ConnectSecurityProfileAllowedAccessControlTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectSecurityProfileAllowedAccessControlTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedAccessControlTags">ConnectSecurityProfileAllowedAccessControlTags</a>

---


### ConnectSecurityProfileAllowedFlowModulesList <a name="ConnectSecurityProfileAllowedFlowModulesList" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectSecurityProfileAllowedFlowModulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules">ConnectSecurityProfileAllowedFlowModules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectSecurityProfileAllowedFlowModules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules">ConnectSecurityProfileAllowedFlowModules</a>]

---


### ConnectSecurityProfileAllowedFlowModulesOutputReference <a name="ConnectSecurityProfileAllowedFlowModulesOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.resetFlowModuleId">reset_flow_module_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_flow_module_id` <a name="reset_flow_module_id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.resetFlowModuleId"></a>

```python
def reset_flow_module_id() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.flowModuleIdInput">flow_module_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.flowModuleId">flow_module_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules">ConnectSecurityProfileAllowedFlowModules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flow_module_id_input`<sup>Optional</sup> <a name="flow_module_id_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.flowModuleIdInput"></a>

```python
flow_module_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `flow_module_id`<sup>Required</sup> <a name="flow_module_id" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.flowModuleId"></a>

```python
flow_module_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectSecurityProfileAllowedFlowModules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileAllowedFlowModules">ConnectSecurityProfileAllowedFlowModules</a>

---


### ConnectSecurityProfileApplicationsList <a name="ConnectSecurityProfileApplicationsList" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfileApplicationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectSecurityProfileApplicationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications">ConnectSecurityProfileApplications</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectSecurityProfileApplications]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications">ConnectSecurityProfileApplications</a>]

---


### ConnectSecurityProfileApplicationsOutputReference <a name="ConnectSecurityProfileApplicationsOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resetApplicationPermissions">reset_application_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_application_permissions` <a name="reset_application_permissions" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resetApplicationPermissions"></a>

```python
def reset_application_permissions() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.applicationPermissionsInput">application_permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.applicationPermissions">application_permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications">ConnectSecurityProfileApplications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_permissions_input`<sup>Optional</sup> <a name="application_permissions_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.applicationPermissionsInput"></a>

```python
application_permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `application_permissions`<sup>Required</sup> <a name="application_permissions" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.applicationPermissions"></a>

```python
application_permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplicationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectSecurityProfileApplications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileApplications">ConnectSecurityProfileApplications</a>

---


### ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference <a name="ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.putPrimaryAttributeAccessControlConfiguration">put_primary_attribute_access_control_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.resetPrimaryAttributeAccessControlConfiguration">reset_primary_attribute_access_control_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_primary_attribute_access_control_configuration` <a name="put_primary_attribute_access_control_configuration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.putPrimaryAttributeAccessControlConfiguration"></a>

```python
def put_primary_attribute_access_control_configuration(
  primary_attribute_values: IResolvable | typing.List[ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues] = None
) -> None
```

###### `primary_attribute_values`<sup>Optional</sup> <a name="primary_attribute_values" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.putPrimaryAttributeAccessControlConfiguration.parameter.primaryAttributeValues"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a>]

An array of PrimaryAttributeValue objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#primary_attribute_values ConnectSecurityProfile#primary_attribute_values}

---

##### `reset_primary_attribute_access_control_configuration` <a name="reset_primary_attribute_access_control_configuration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.resetPrimaryAttributeAccessControlConfiguration"></a>

```python
def reset_primary_attribute_access_control_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.primaryAttributeAccessControlConfiguration">primary_attribute_access_control_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.primaryAttributeAccessControlConfigurationInput">primary_attribute_access_control_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_attribute_access_control_configuration`<sup>Required</sup> <a name="primary_attribute_access_control_configuration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.primaryAttributeAccessControlConfiguration"></a>

```python
primary_attribute_access_control_configuration: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference</a>

---

##### `primary_attribute_access_control_configuration_input`<sup>Optional</sup> <a name="primary_attribute_access_control_configuration_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.primaryAttributeAccessControlConfigurationInput"></a>

```python
primary_attribute_access_control_configuration_input: IResolvable | ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration</a>

---


### ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference <a name="ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.putPrimaryAttributeValues">put_primary_attribute_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.resetPrimaryAttributeValues">reset_primary_attribute_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_primary_attribute_values` <a name="put_primary_attribute_values" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.putPrimaryAttributeValues"></a>

```python
def put_primary_attribute_values(
  value: IResolvable | typing.List[ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.putPrimaryAttributeValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a>]

---

##### `reset_primary_attribute_values` <a name="reset_primary_attribute_values" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.resetPrimaryAttributeValues"></a>

```python
def reset_primary_attribute_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.primaryAttributeValues">primary_attribute_values</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.primaryAttributeValuesInput">primary_attribute_values_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_attribute_values`<sup>Required</sup> <a name="primary_attribute_values" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.primaryAttributeValues"></a>

```python
primary_attribute_values: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList</a>

---

##### `primary_attribute_values_input`<sup>Optional</sup> <a name="primary_attribute_values_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.primaryAttributeValuesInput"></a>

```python
primary_attribute_values_input: IResolvable | typing.List[ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration</a>

---


### ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList <a name="ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a>]

---


### ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference <a name="ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resetAccessType">reset_access_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resetAttributeName">reset_attribute_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_type` <a name="reset_access_type" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resetAccessType"></a>

```python
def reset_access_type() -> None
```

##### `reset_attribute_name` <a name="reset_attribute_name" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resetAttributeName"></a>

```python
def reset_attribute_name() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.accessTypeInput">access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.attributeNameInput">attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_type_input`<sup>Optional</sup> <a name="access_type_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.accessTypeInput"></a>

```python
access_type_input: str
```

- *Type:* str

---

##### `attribute_name_input`<sup>Optional</sup> <a name="attribute_name_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.attributeNameInput"></a>

```python
attribute_name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues</a>

---


### ConnectSecurityProfileGranularAccessControlConfigurationOutputReference <a name="ConnectSecurityProfileGranularAccessControlConfigurationOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.putDataTableAccessControlConfiguration">put_data_table_access_control_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.resetDataTableAccessControlConfiguration">reset_data_table_access_control_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_table_access_control_configuration` <a name="put_data_table_access_control_configuration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.putDataTableAccessControlConfiguration"></a>

```python
def put_data_table_access_control_configuration(
  primary_attribute_access_control_configuration: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration = None
) -> None
```

###### `primary_attribute_access_control_configuration`<sup>Optional</sup> <a name="primary_attribute_access_control_configuration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.putDataTableAccessControlConfiguration.parameter.primaryAttributeAccessControlConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration</a>

Contains the configuration for record-based access control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_security_profile#primary_attribute_access_control_configuration ConnectSecurityProfile#primary_attribute_access_control_configuration}

---

##### `reset_data_table_access_control_configuration` <a name="reset_data_table_access_control_configuration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.resetDataTableAccessControlConfiguration"></a>

```python
def reset_data_table_access_control_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.dataTableAccessControlConfiguration">data_table_access_control_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.dataTableAccessControlConfigurationInput">data_table_access_control_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_table_access_control_configuration`<sup>Required</sup> <a name="data_table_access_control_configuration" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.dataTableAccessControlConfiguration"></a>

```python
data_table_access_control_configuration: ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference</a>

---

##### `data_table_access_control_configuration_input`<sup>Optional</sup> <a name="data_table_access_control_configuration_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.dataTableAccessControlConfigurationInput"></a>

```python
data_table_access_control_configuration_input: IResolvable | ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectSecurityProfileGranularAccessControlConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileGranularAccessControlConfiguration">ConnectSecurityProfileGranularAccessControlConfiguration</a>

---


### ConnectSecurityProfileTagsList <a name="ConnectSecurityProfileTagsList" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfileTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectSecurityProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags">ConnectSecurityProfileTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectSecurityProfileTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags">ConnectSecurityProfileTags</a>]

---


### ConnectSecurityProfileTagsOutputReference <a name="ConnectSecurityProfileTagsOutputReference" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_security_profile

connectSecurityProfile.ConnectSecurityProfileTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags">ConnectSecurityProfileTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectSecurityProfileTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectSecurityProfile.ConnectSecurityProfileTags">ConnectSecurityProfileTags</a>

---



