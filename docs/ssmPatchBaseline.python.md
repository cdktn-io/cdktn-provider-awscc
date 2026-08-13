# `ssmPatchBaseline` Submodule <a name="`ssmPatchBaseline` Submodule" id="@cdktn/provider-awscc.ssmPatchBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmPatchBaseline <a name="SsmPatchBaseline" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline awscc_ssm_patch_baseline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaseline(
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
  approval_rules: SsmPatchBaselineApprovalRules = None,
  approved_patches: typing.List[str] = None,
  approved_patches_compliance_level: str = None,
  approved_patches_enable_non_security: bool | IResolvable = None,
  available_security_updates_compliance_status: str = None,
  default_baseline: bool | IResolvable = None,
  description: str = None,
  global_filters: SsmPatchBaselineGlobalFilters = None,
  operating_system: str = None,
  patch_groups: typing.List[str] = None,
  rejected_patches: typing.List[str] = None,
  rejected_patches_action: str = None,
  sources: IResolvable | typing.List[SsmPatchBaselineSources] = None,
  tags: IResolvable | typing.List[SsmPatchBaselineTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvalRules">approval_rules</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a></code> | A set of rules defining the approval rules for a patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatches">approved_patches</a></code> | <code>typing.List[str]</code> | A list of explicitly approved patches for the baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatchesComplianceLevel">approved_patches_compliance_level</a></code> | <code>str</code> | Defines the compliance level for approved patches. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatchesEnableNonSecurity">approved_patches_enable_non_security</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the list of approved patches includes non-security updates that should be applied to the instances. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.availableSecurityUpdatesComplianceStatus">available_security_updates_compliance_status</a></code> | <code>str</code> | The compliance status for vendor recommended security updates that are not approved by this patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.defaultBaseline">default_baseline</a></code> | <code>bool \| cdktn.IResolvable</code> | Set the baseline as default baseline. Only registering to default patch baseline is allowed. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.globalFilters">global_filters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a></code> | A set of global filters used to include patches in the baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.operatingSystem">operating_system</a></code> | <code>str</code> | Defines the operating system the patch baseline applies to. The Default value is WINDOWS. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.patchGroups">patch_groups</a></code> | <code>typing.List[str]</code> | PatchGroups is used to associate instances with a specific patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.rejectedPatches">rejected_patches</a></code> | <code>typing.List[str]</code> | A list of explicitly rejected patches for the baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.rejectedPatchesAction">rejected_patches_action</a></code> | <code>str</code> | The action for Patch Manager to take on patches included in the RejectedPackages list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.sources">sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>]</code> | Information about the patches to use to update the instances, including target operating systems and source repository. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>]</code> | Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.name"></a>

- *Type:* str

The name of the patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#name SsmPatchBaseline#name}

---

##### `approval_rules`<sup>Optional</sup> <a name="approval_rules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvalRules"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a>

A set of rules defining the approval rules for a patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approval_rules SsmPatchBaseline#approval_rules}

---

##### `approved_patches`<sup>Optional</sup> <a name="approved_patches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatches"></a>

- *Type:* typing.List[str]

A list of explicitly approved patches for the baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approved_patches SsmPatchBaseline#approved_patches}

---

##### `approved_patches_compliance_level`<sup>Optional</sup> <a name="approved_patches_compliance_level" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatchesComplianceLevel"></a>

- *Type:* str

Defines the compliance level for approved patches.

This means that if an approved patch is reported as missing, this is the severity of the compliance violation. The default value is UNSPECIFIED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}

---

##### `approved_patches_enable_non_security`<sup>Optional</sup> <a name="approved_patches_enable_non_security" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatchesEnableNonSecurity"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the list of approved patches includes non-security updates that should be applied to the instances.

The default value is 'false'. Applies to Linux instances only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}

---

##### `available_security_updates_compliance_status`<sup>Optional</sup> <a name="available_security_updates_compliance_status" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.availableSecurityUpdatesComplianceStatus"></a>

- *Type:* str

The compliance status for vendor recommended security updates that are not approved by this patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#available_security_updates_compliance_status SsmPatchBaseline#available_security_updates_compliance_status}

---

##### `default_baseline`<sup>Optional</sup> <a name="default_baseline" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.defaultBaseline"></a>

- *Type:* bool | cdktn.IResolvable

Set the baseline as default baseline. Only registering to default patch baseline is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#default_baseline SsmPatchBaseline#default_baseline}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.description"></a>

- *Type:* str

The description of the patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#description SsmPatchBaseline#description}

---

##### `global_filters`<sup>Optional</sup> <a name="global_filters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.globalFilters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a>

A set of global filters used to include patches in the baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#global_filters SsmPatchBaseline#global_filters}

---

##### `operating_system`<sup>Optional</sup> <a name="operating_system" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.operatingSystem"></a>

- *Type:* str

Defines the operating system the patch baseline applies to. The Default value is WINDOWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#operating_system SsmPatchBaseline#operating_system}

---

##### `patch_groups`<sup>Optional</sup> <a name="patch_groups" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.patchGroups"></a>

- *Type:* typing.List[str]

PatchGroups is used to associate instances with a specific patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#patch_groups SsmPatchBaseline#patch_groups}

---

##### `rejected_patches`<sup>Optional</sup> <a name="rejected_patches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.rejectedPatches"></a>

- *Type:* typing.List[str]

A list of explicitly rejected patches for the baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#rejected_patches SsmPatchBaseline#rejected_patches}

---

##### `rejected_patches_action`<sup>Optional</sup> <a name="rejected_patches_action" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.rejectedPatchesAction"></a>

- *Type:* str

The action for Patch Manager to take on patches included in the RejectedPackages list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#rejected_patches_action SsmPatchBaseline#rejected_patches_action}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.sources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>]

Information about the patches to use to update the instances, including target operating systems and source repository.

Applies to Linux instances only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#sources SsmPatchBaseline#sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>]

Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#tags SsmPatchBaseline#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putApprovalRules">put_approval_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilters">put_global_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putSources">put_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovalRules">reset_approval_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatches">reset_approved_patches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesComplianceLevel">reset_approved_patches_compliance_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesEnableNonSecurity">reset_approved_patches_enable_non_security</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetAvailableSecurityUpdatesComplianceStatus">reset_available_security_updates_compliance_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetDefaultBaseline">reset_default_baseline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetGlobalFilters">reset_global_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetOperatingSystem">reset_operating_system</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetPatchGroups">reset_patch_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatches">reset_rejected_patches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatchesAction">reset_rejected_patches_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetSources">reset_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_approval_rules` <a name="put_approval_rules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putApprovalRules"></a>

```python
def put_approval_rules(
  patch_rules: IResolvable | typing.List[SsmPatchBaselineApprovalRulesPatchRules] = None
) -> None
```

###### `patch_rules`<sup>Optional</sup> <a name="patch_rules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putApprovalRules.parameter.patchRules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#patch_rules SsmPatchBaseline#patch_rules}.

---

##### `put_global_filters` <a name="put_global_filters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilters"></a>

```python
def put_global_filters(
  patch_filters: IResolvable | typing.List[SsmPatchBaselineGlobalFiltersPatchFilters] = None
) -> None
```

###### `patch_filters`<sup>Optional</sup> <a name="patch_filters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilters.parameter.patchFilters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#patch_filters SsmPatchBaseline#patch_filters}.

---

##### `put_sources` <a name="put_sources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putSources"></a>

```python
def put_sources(
  value: IResolvable | typing.List[SsmPatchBaselineSources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SsmPatchBaselineTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>]

---

##### `reset_approval_rules` <a name="reset_approval_rules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovalRules"></a>

```python
def reset_approval_rules() -> None
```

##### `reset_approved_patches` <a name="reset_approved_patches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatches"></a>

```python
def reset_approved_patches() -> None
```

##### `reset_approved_patches_compliance_level` <a name="reset_approved_patches_compliance_level" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesComplianceLevel"></a>

```python
def reset_approved_patches_compliance_level() -> None
```

##### `reset_approved_patches_enable_non_security` <a name="reset_approved_patches_enable_non_security" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesEnableNonSecurity"></a>

```python
def reset_approved_patches_enable_non_security() -> None
```

##### `reset_available_security_updates_compliance_status` <a name="reset_available_security_updates_compliance_status" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetAvailableSecurityUpdatesComplianceStatus"></a>

```python
def reset_available_security_updates_compliance_status() -> None
```

##### `reset_default_baseline` <a name="reset_default_baseline" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetDefaultBaseline"></a>

```python
def reset_default_baseline() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_global_filters` <a name="reset_global_filters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetGlobalFilters"></a>

```python
def reset_global_filters() -> None
```

##### `reset_operating_system` <a name="reset_operating_system" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetOperatingSystem"></a>

```python
def reset_operating_system() -> None
```

##### `reset_patch_groups` <a name="reset_patch_groups" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetPatchGroups"></a>

```python
def reset_patch_groups() -> None
```

##### `reset_rejected_patches` <a name="reset_rejected_patches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatches"></a>

```python
def reset_rejected_patches() -> None
```

##### `reset_rejected_patches_action` <a name="reset_rejected_patches_action" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatchesAction"></a>

```python
def reset_rejected_patches_action() -> None
```

##### `reset_sources` <a name="reset_sources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetSources"></a>

```python
def reset_sources() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SsmPatchBaseline resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isConstruct"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaseline.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaseline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaseline.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaseline.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SsmPatchBaseline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SsmPatchBaseline to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SsmPatchBaseline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsmPatchBaseline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvalRules">approval_rules</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference">SsmPatchBaselineApprovalRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.globalFilters">global_filters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference">SsmPatchBaselineGlobalFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchBaselineId">patch_baseline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList">SsmPatchBaselineSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList">SsmPatchBaselineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvalRulesInput">approval_rules_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevelInput">approved_patches_compliance_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurityInput">approved_patches_enable_non_security_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesInput">approved_patches_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.availableSecurityUpdatesComplianceStatusInput">available_security_updates_compliance_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.defaultBaselineInput">default_baseline_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.globalFiltersInput">global_filters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystemInput">operating_system_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchGroupsInput">patch_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesActionInput">rejected_patches_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesInput">rejected_patches_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.sourcesInput">sources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatches">approved_patches</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevel">approved_patches_compliance_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurity">approved_patches_enable_non_security</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.availableSecurityUpdatesComplianceStatus">available_security_updates_compliance_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.defaultBaseline">default_baseline</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystem">operating_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchGroups">patch_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatches">rejected_patches</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesAction">rejected_patches_action</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `approval_rules`<sup>Required</sup> <a name="approval_rules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvalRules"></a>

```python
approval_rules: SsmPatchBaselineApprovalRulesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference">SsmPatchBaselineApprovalRulesOutputReference</a>

---

##### `global_filters`<sup>Required</sup> <a name="global_filters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.globalFilters"></a>

```python
global_filters: SsmPatchBaselineGlobalFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference">SsmPatchBaselineGlobalFiltersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `patch_baseline_id`<sup>Required</sup> <a name="patch_baseline_id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchBaselineId"></a>

```python
patch_baseline_id: str
```

- *Type:* str

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.sources"></a>

```python
sources: SsmPatchBaselineSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList">SsmPatchBaselineSourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tags"></a>

```python
tags: SsmPatchBaselineTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList">SsmPatchBaselineTagsList</a>

---

##### `approval_rules_input`<sup>Optional</sup> <a name="approval_rules_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvalRulesInput"></a>

```python
approval_rules_input: IResolvable | SsmPatchBaselineApprovalRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a>

---

##### `approved_patches_compliance_level_input`<sup>Optional</sup> <a name="approved_patches_compliance_level_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevelInput"></a>

```python
approved_patches_compliance_level_input: str
```

- *Type:* str

---

##### `approved_patches_enable_non_security_input`<sup>Optional</sup> <a name="approved_patches_enable_non_security_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurityInput"></a>

```python
approved_patches_enable_non_security_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `approved_patches_input`<sup>Optional</sup> <a name="approved_patches_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesInput"></a>

```python
approved_patches_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `available_security_updates_compliance_status_input`<sup>Optional</sup> <a name="available_security_updates_compliance_status_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.availableSecurityUpdatesComplianceStatusInput"></a>

```python
available_security_updates_compliance_status_input: str
```

- *Type:* str

---

##### `default_baseline_input`<sup>Optional</sup> <a name="default_baseline_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.defaultBaselineInput"></a>

```python
default_baseline_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `global_filters_input`<sup>Optional</sup> <a name="global_filters_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.globalFiltersInput"></a>

```python
global_filters_input: IResolvable | SsmPatchBaselineGlobalFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operating_system_input`<sup>Optional</sup> <a name="operating_system_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystemInput"></a>

```python
operating_system_input: str
```

- *Type:* str

---

##### `patch_groups_input`<sup>Optional</sup> <a name="patch_groups_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchGroupsInput"></a>

```python
patch_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rejected_patches_action_input`<sup>Optional</sup> <a name="rejected_patches_action_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesActionInput"></a>

```python
rejected_patches_action_input: str
```

- *Type:* str

---

##### `rejected_patches_input`<sup>Optional</sup> <a name="rejected_patches_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesInput"></a>

```python
rejected_patches_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sources_input`<sup>Optional</sup> <a name="sources_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.sourcesInput"></a>

```python
sources_input: IResolvable | typing.List[SsmPatchBaselineSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SsmPatchBaselineTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>]

---

##### `approved_patches`<sup>Required</sup> <a name="approved_patches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatches"></a>

```python
approved_patches: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `approved_patches_compliance_level`<sup>Required</sup> <a name="approved_patches_compliance_level" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevel"></a>

```python
approved_patches_compliance_level: str
```

- *Type:* str

---

##### `approved_patches_enable_non_security`<sup>Required</sup> <a name="approved_patches_enable_non_security" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurity"></a>

```python
approved_patches_enable_non_security: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `available_security_updates_compliance_status`<sup>Required</sup> <a name="available_security_updates_compliance_status" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.availableSecurityUpdatesComplianceStatus"></a>

```python
available_security_updates_compliance_status: str
```

- *Type:* str

---

##### `default_baseline`<sup>Required</sup> <a name="default_baseline" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.defaultBaseline"></a>

```python
default_baseline: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

---

##### `patch_groups`<sup>Required</sup> <a name="patch_groups" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchGroups"></a>

```python
patch_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rejected_patches`<sup>Required</sup> <a name="rejected_patches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatches"></a>

```python
rejected_patches: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rejected_patches_action`<sup>Required</sup> <a name="rejected_patches_action" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesAction"></a>

```python
rejected_patches_action: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SsmPatchBaselineApprovalRules <a name="SsmPatchBaselineApprovalRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineApprovalRules(
  patch_rules: IResolvable | typing.List[SsmPatchBaselineApprovalRulesPatchRules] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules.property.patchRules">patch_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#patch_rules SsmPatchBaseline#patch_rules}. |

---

##### `patch_rules`<sup>Optional</sup> <a name="patch_rules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules.property.patchRules"></a>

```python
patch_rules: IResolvable | typing.List[SsmPatchBaselineApprovalRulesPatchRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#patch_rules SsmPatchBaseline#patch_rules}.

---

### SsmPatchBaselineApprovalRulesPatchRules <a name="SsmPatchBaselineApprovalRulesPatchRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules(
  approve_after_days: typing.Union[int, float] = None,
  approve_until_date: str = None,
  compliance_level: str = None,
  enable_non_security: bool | IResolvable = None,
  patch_filter_group: SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.approveAfterDays">approve_after_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approve_after_days SsmPatchBaseline#approve_after_days}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.approveUntilDate">approve_until_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approve_until_date SsmPatchBaseline#approve_until_date}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.complianceLevel">compliance_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#compliance_level SsmPatchBaseline#compliance_level}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.enableNonSecurity">enable_non_security</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#enable_non_security SsmPatchBaseline#enable_non_security}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.patchFilterGroup">patch_filter_group</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a></code> | The patch filter group that defines the criteria for the rule. |

---

##### `approve_after_days`<sup>Optional</sup> <a name="approve_after_days" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.approveAfterDays"></a>

```python
approve_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approve_after_days SsmPatchBaseline#approve_after_days}.

---

##### `approve_until_date`<sup>Optional</sup> <a name="approve_until_date" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.approveUntilDate"></a>

```python
approve_until_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approve_until_date SsmPatchBaseline#approve_until_date}.

---

##### `compliance_level`<sup>Optional</sup> <a name="compliance_level" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.complianceLevel"></a>

```python
compliance_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#compliance_level SsmPatchBaseline#compliance_level}.

---

##### `enable_non_security`<sup>Optional</sup> <a name="enable_non_security" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.enableNonSecurity"></a>

```python
enable_non_security: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#enable_non_security SsmPatchBaseline#enable_non_security}.

---

##### `patch_filter_group`<sup>Optional</sup> <a name="patch_filter_group" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.patchFilterGroup"></a>

```python
patch_filter_group: SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a>

The patch filter group that defines the criteria for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#patch_filter_group SsmPatchBaseline#patch_filter_group}

---

### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup(
  patch_filters: IResolvable | typing.List[SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup.property.patchFilters">patch_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#patch_filters SsmPatchBaseline#patch_filters}. |

---

##### `patch_filters`<sup>Optional</sup> <a name="patch_filters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup.property.patchFilters"></a>

```python
patch_filters: IResolvable | typing.List[SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#patch_filters SsmPatchBaseline#patch_filters}.

---

### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters(
  key: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}.

---

### SsmPatchBaselineConfig <a name="SsmPatchBaselineConfig" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  approval_rules: SsmPatchBaselineApprovalRules = None,
  approved_patches: typing.List[str] = None,
  approved_patches_compliance_level: str = None,
  approved_patches_enable_non_security: bool | IResolvable = None,
  available_security_updates_compliance_status: str = None,
  default_baseline: bool | IResolvable = None,
  description: str = None,
  global_filters: SsmPatchBaselineGlobalFilters = None,
  operating_system: str = None,
  patch_groups: typing.List[str] = None,
  rejected_patches: typing.List[str] = None,
  rejected_patches_action: str = None,
  sources: IResolvable | typing.List[SsmPatchBaselineSources] = None,
  tags: IResolvable | typing.List[SsmPatchBaselineTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.name">name</a></code> | <code>str</code> | The name of the patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvalRules">approval_rules</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a></code> | A set of rules defining the approval rules for a patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatches">approved_patches</a></code> | <code>typing.List[str]</code> | A list of explicitly approved patches for the baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesComplianceLevel">approved_patches_compliance_level</a></code> | <code>str</code> | Defines the compliance level for approved patches. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesEnableNonSecurity">approved_patches_enable_non_security</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the list of approved patches includes non-security updates that should be applied to the instances. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.availableSecurityUpdatesComplianceStatus">available_security_updates_compliance_status</a></code> | <code>str</code> | The compliance status for vendor recommended security updates that are not approved by this patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.defaultBaseline">default_baseline</a></code> | <code>bool \| cdktn.IResolvable</code> | Set the baseline as default baseline. Only registering to default patch baseline is allowed. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.description">description</a></code> | <code>str</code> | The description of the patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.globalFilters">global_filters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a></code> | A set of global filters used to include patches in the baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.operatingSystem">operating_system</a></code> | <code>str</code> | Defines the operating system the patch baseline applies to. The Default value is WINDOWS. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.patchGroups">patch_groups</a></code> | <code>typing.List[str]</code> | PatchGroups is used to associate instances with a specific patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatches">rejected_patches</a></code> | <code>typing.List[str]</code> | A list of explicitly rejected patches for the baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatchesAction">rejected_patches_action</a></code> | <code>str</code> | The action for Patch Manager to take on patches included in the RejectedPackages list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.sources">sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>]</code> | Information about the patches to use to update the instances, including target operating systems and source repository. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>]</code> | Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#name SsmPatchBaseline#name}

---

##### `approval_rules`<sup>Optional</sup> <a name="approval_rules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvalRules"></a>

```python
approval_rules: SsmPatchBaselineApprovalRules
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a>

A set of rules defining the approval rules for a patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approval_rules SsmPatchBaseline#approval_rules}

---

##### `approved_patches`<sup>Optional</sup> <a name="approved_patches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatches"></a>

```python
approved_patches: typing.List[str]
```

- *Type:* typing.List[str]

A list of explicitly approved patches for the baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approved_patches SsmPatchBaseline#approved_patches}

---

##### `approved_patches_compliance_level`<sup>Optional</sup> <a name="approved_patches_compliance_level" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesComplianceLevel"></a>

```python
approved_patches_compliance_level: str
```

- *Type:* str

Defines the compliance level for approved patches.

This means that if an approved patch is reported as missing, this is the severity of the compliance violation. The default value is UNSPECIFIED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}

---

##### `approved_patches_enable_non_security`<sup>Optional</sup> <a name="approved_patches_enable_non_security" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesEnableNonSecurity"></a>

```python
approved_patches_enable_non_security: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the list of approved patches includes non-security updates that should be applied to the instances.

The default value is 'false'. Applies to Linux instances only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}

---

##### `available_security_updates_compliance_status`<sup>Optional</sup> <a name="available_security_updates_compliance_status" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.availableSecurityUpdatesComplianceStatus"></a>

```python
available_security_updates_compliance_status: str
```

- *Type:* str

The compliance status for vendor recommended security updates that are not approved by this patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#available_security_updates_compliance_status SsmPatchBaseline#available_security_updates_compliance_status}

---

##### `default_baseline`<sup>Optional</sup> <a name="default_baseline" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.defaultBaseline"></a>

```python
default_baseline: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Set the baseline as default baseline. Only registering to default patch baseline is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#default_baseline SsmPatchBaseline#default_baseline}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#description SsmPatchBaseline#description}

---

##### `global_filters`<sup>Optional</sup> <a name="global_filters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.globalFilters"></a>

```python
global_filters: SsmPatchBaselineGlobalFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a>

A set of global filters used to include patches in the baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#global_filters SsmPatchBaseline#global_filters}

---

##### `operating_system`<sup>Optional</sup> <a name="operating_system" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

Defines the operating system the patch baseline applies to. The Default value is WINDOWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#operating_system SsmPatchBaseline#operating_system}

---

##### `patch_groups`<sup>Optional</sup> <a name="patch_groups" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.patchGroups"></a>

```python
patch_groups: typing.List[str]
```

- *Type:* typing.List[str]

PatchGroups is used to associate instances with a specific patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#patch_groups SsmPatchBaseline#patch_groups}

---

##### `rejected_patches`<sup>Optional</sup> <a name="rejected_patches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatches"></a>

```python
rejected_patches: typing.List[str]
```

- *Type:* typing.List[str]

A list of explicitly rejected patches for the baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#rejected_patches SsmPatchBaseline#rejected_patches}

---

##### `rejected_patches_action`<sup>Optional</sup> <a name="rejected_patches_action" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatchesAction"></a>

```python
rejected_patches_action: str
```

- *Type:* str

The action for Patch Manager to take on patches included in the RejectedPackages list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#rejected_patches_action SsmPatchBaseline#rejected_patches_action}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.sources"></a>

```python
sources: IResolvable | typing.List[SsmPatchBaselineSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>]

Information about the patches to use to update the instances, including target operating systems and source repository.

Applies to Linux instances only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#sources SsmPatchBaseline#sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SsmPatchBaselineTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>]

Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#tags SsmPatchBaseline#tags}

---

### SsmPatchBaselineGlobalFilters <a name="SsmPatchBaselineGlobalFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineGlobalFilters(
  patch_filters: IResolvable | typing.List[SsmPatchBaselineGlobalFiltersPatchFilters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters.property.patchFilters">patch_filters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#patch_filters SsmPatchBaseline#patch_filters}. |

---

##### `patch_filters`<sup>Optional</sup> <a name="patch_filters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters.property.patchFilters"></a>

```python
patch_filters: IResolvable | typing.List[SsmPatchBaselineGlobalFiltersPatchFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#patch_filters SsmPatchBaseline#patch_filters}.

---

### SsmPatchBaselineGlobalFiltersPatchFilters <a name="SsmPatchBaselineGlobalFiltersPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters(
  key: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}.

---

### SsmPatchBaselineSources <a name="SsmPatchBaselineSources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineSources(
  configuration: str = None,
  name: str = None,
  products: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.configuration">configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#configuration SsmPatchBaseline#configuration}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#name SsmPatchBaseline#name}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.products">products</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#products SsmPatchBaseline#products}. |

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#configuration SsmPatchBaseline#configuration}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#name SsmPatchBaseline#name}.

---

##### `products`<sup>Optional</sup> <a name="products" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.products"></a>

```python
products: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#products SsmPatchBaseline#products}.

---

### SsmPatchBaselineTags <a name="SsmPatchBaselineTags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#value SsmPatchBaseline#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#value SsmPatchBaseline#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmPatchBaselineApprovalRulesOutputReference <a name="SsmPatchBaselineApprovalRulesOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.putPatchRules">put_patch_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resetPatchRules">reset_patch_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_patch_rules` <a name="put_patch_rules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.putPatchRules"></a>

```python
def put_patch_rules(
  value: IResolvable | typing.List[SsmPatchBaselineApprovalRulesPatchRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.putPatchRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>]

---

##### `reset_patch_rules` <a name="reset_patch_rules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resetPatchRules"></a>

```python
def reset_patch_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.patchRules">patch_rules</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList">SsmPatchBaselineApprovalRulesPatchRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.patchRulesInput">patch_rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `patch_rules`<sup>Required</sup> <a name="patch_rules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.patchRules"></a>

```python
patch_rules: SsmPatchBaselineApprovalRulesPatchRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList">SsmPatchBaselineApprovalRulesPatchRulesList</a>

---

##### `patch_rules_input`<sup>Optional</sup> <a name="patch_rules_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.patchRulesInput"></a>

```python
patch_rules_input: IResolvable | typing.List[SsmPatchBaselineApprovalRulesPatchRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmPatchBaselineApprovalRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a>

---


### SsmPatchBaselineApprovalRulesPatchRulesList <a name="SsmPatchBaselineApprovalRulesPatchRulesList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmPatchBaselineApprovalRulesPatchRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsmPatchBaselineApprovalRulesPatchRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>]

---


### SsmPatchBaselineApprovalRulesPatchRulesOutputReference <a name="SsmPatchBaselineApprovalRulesPatchRulesOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.putPatchFilterGroup">put_patch_filter_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetApproveAfterDays">reset_approve_after_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetApproveUntilDate">reset_approve_until_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetComplianceLevel">reset_compliance_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetEnableNonSecurity">reset_enable_non_security</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetPatchFilterGroup">reset_patch_filter_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_patch_filter_group` <a name="put_patch_filter_group" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.putPatchFilterGroup"></a>

```python
def put_patch_filter_group(
  patch_filters: IResolvable | typing.List[SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters] = None
) -> None
```

###### `patch_filters`<sup>Optional</sup> <a name="patch_filters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.putPatchFilterGroup.parameter.patchFilters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#patch_filters SsmPatchBaseline#patch_filters}.

---

##### `reset_approve_after_days` <a name="reset_approve_after_days" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetApproveAfterDays"></a>

```python
def reset_approve_after_days() -> None
```

##### `reset_approve_until_date` <a name="reset_approve_until_date" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetApproveUntilDate"></a>

```python
def reset_approve_until_date() -> None
```

##### `reset_compliance_level` <a name="reset_compliance_level" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetComplianceLevel"></a>

```python
def reset_compliance_level() -> None
```

##### `reset_enable_non_security` <a name="reset_enable_non_security" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetEnableNonSecurity"></a>

```python
def reset_enable_non_security() -> None
```

##### `reset_patch_filter_group` <a name="reset_patch_filter_group" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetPatchFilterGroup"></a>

```python
def reset_patch_filter_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.patchFilterGroup">patch_filter_group</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveAfterDaysInput">approve_after_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveUntilDateInput">approve_until_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.complianceLevelInput">compliance_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.enableNonSecurityInput">enable_non_security_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.patchFilterGroupInput">patch_filter_group_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveAfterDays">approve_after_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveUntilDate">approve_until_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.complianceLevel">compliance_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.enableNonSecurity">enable_non_security</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `patch_filter_group`<sup>Required</sup> <a name="patch_filter_group" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.patchFilterGroup"></a>

```python
patch_filter_group: SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference</a>

---

##### `approve_after_days_input`<sup>Optional</sup> <a name="approve_after_days_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveAfterDaysInput"></a>

```python
approve_after_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `approve_until_date_input`<sup>Optional</sup> <a name="approve_until_date_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveUntilDateInput"></a>

```python
approve_until_date_input: str
```

- *Type:* str

---

##### `compliance_level_input`<sup>Optional</sup> <a name="compliance_level_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.complianceLevelInput"></a>

```python
compliance_level_input: str
```

- *Type:* str

---

##### `enable_non_security_input`<sup>Optional</sup> <a name="enable_non_security_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.enableNonSecurityInput"></a>

```python
enable_non_security_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `patch_filter_group_input`<sup>Optional</sup> <a name="patch_filter_group_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.patchFilterGroupInput"></a>

```python
patch_filter_group_input: IResolvable | SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a>

---

##### `approve_after_days`<sup>Required</sup> <a name="approve_after_days" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveAfterDays"></a>

```python
approve_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `approve_until_date`<sup>Required</sup> <a name="approve_until_date" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveUntilDate"></a>

```python
approve_until_date: str
```

- *Type:* str

---

##### `compliance_level`<sup>Required</sup> <a name="compliance_level" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.complianceLevel"></a>

```python
compliance_level: str
```

- *Type:* str

---

##### `enable_non_security`<sup>Required</sup> <a name="enable_non_security" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.enableNonSecurity"></a>

```python
enable_non_security: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmPatchBaselineApprovalRulesPatchRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>

---


### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.putPatchFilters">put_patch_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resetPatchFilters">reset_patch_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_patch_filters` <a name="put_patch_filters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.putPatchFilters"></a>

```python
def put_patch_filters(
  value: IResolvable | typing.List[SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.putPatchFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>]

---

##### `reset_patch_filters` <a name="reset_patch_filters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resetPatchFilters"></a>

```python
def reset_patch_filters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.patchFilters">patch_filters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.patchFiltersInput">patch_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `patch_filters`<sup>Required</sup> <a name="patch_filters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.patchFilters"></a>

```python
patch_filters: SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList</a>

---

##### `patch_filters_input`<sup>Optional</sup> <a name="patch_filters_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.patchFiltersInput"></a>

```python
patch_filters_input: IResolvable | typing.List[SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a>

---


### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>]

---


### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>

---


### SsmPatchBaselineGlobalFiltersOutputReference <a name="SsmPatchBaselineGlobalFiltersOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.putPatchFilters">put_patch_filters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resetPatchFilters">reset_patch_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_patch_filters` <a name="put_patch_filters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.putPatchFilters"></a>

```python
def put_patch_filters(
  value: IResolvable | typing.List[SsmPatchBaselineGlobalFiltersPatchFilters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.putPatchFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>]

---

##### `reset_patch_filters` <a name="reset_patch_filters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resetPatchFilters"></a>

```python
def reset_patch_filters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.patchFilters">patch_filters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList">SsmPatchBaselineGlobalFiltersPatchFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.patchFiltersInput">patch_filters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `patch_filters`<sup>Required</sup> <a name="patch_filters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.patchFilters"></a>

```python
patch_filters: SsmPatchBaselineGlobalFiltersPatchFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList">SsmPatchBaselineGlobalFiltersPatchFiltersList</a>

---

##### `patch_filters_input`<sup>Optional</sup> <a name="patch_filters_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.patchFiltersInput"></a>

```python
patch_filters_input: IResolvable | typing.List[SsmPatchBaselineGlobalFiltersPatchFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmPatchBaselineGlobalFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a>

---


### SsmPatchBaselineGlobalFiltersPatchFiltersList <a name="SsmPatchBaselineGlobalFiltersPatchFiltersList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsmPatchBaselineGlobalFiltersPatchFilters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>]

---


### SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference <a name="SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmPatchBaselineGlobalFiltersPatchFilters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>

---


### SsmPatchBaselineSourcesList <a name="SsmPatchBaselineSourcesList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmPatchBaselineSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsmPatchBaselineSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>]

---


### SsmPatchBaselineSourcesOutputReference <a name="SsmPatchBaselineSourcesOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetProducts">reset_products</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_configuration` <a name="reset_configuration" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_products` <a name="reset_products" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetProducts"></a>

```python
def reset_products() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.configurationInput">configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.productsInput">products_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.configuration">configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.products">products</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.configurationInput"></a>

```python
configuration_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `products_input`<sup>Optional</sup> <a name="products_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.productsInput"></a>

```python
products_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.configuration"></a>

```python
configuration: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `products`<sup>Required</sup> <a name="products" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.products"></a>

```python
products: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmPatchBaselineSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>

---


### SsmPatchBaselineTagsList <a name="SsmPatchBaselineTagsList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SsmPatchBaselineTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SsmPatchBaselineTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>]

---


### SsmPatchBaselineTagsOutputReference <a name="SsmPatchBaselineTagsOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ssm_patch_baseline

ssmPatchBaseline.SsmPatchBaselineTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SsmPatchBaselineTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>

---



