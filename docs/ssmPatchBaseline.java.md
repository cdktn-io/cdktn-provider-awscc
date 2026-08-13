# `ssmPatchBaseline` Submodule <a name="`ssmPatchBaseline` Submodule" id="@cdktn/provider-awscc.ssmPatchBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmPatchBaseline <a name="SsmPatchBaseline" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline awscc_ssm_patch_baseline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaseline;

SsmPatchBaseline.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .approvalRules(SsmPatchBaselineApprovalRules)
//  .approvedPatches(java.util.List<java.lang.String>)
//  .approvedPatchesComplianceLevel(java.lang.String)
//  .approvedPatchesEnableNonSecurity(java.lang.Boolean|IResolvable)
//  .availableSecurityUpdatesComplianceStatus(java.lang.String)
//  .defaultBaseline(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .globalFilters(SsmPatchBaselineGlobalFilters)
//  .operatingSystem(java.lang.String)
//  .patchGroups(java.util.List<java.lang.String>)
//  .rejectedPatches(java.util.List<java.lang.String>)
//  .rejectedPatchesAction(java.lang.String)
//  .sources(IResolvable|java.util.List<SsmPatchBaselineSources>)
//  .tags(IResolvable|java.util.List<SsmPatchBaselineTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvalRules">approvalRules</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a></code> | A set of rules defining the approval rules for a patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatches">approvedPatches</a></code> | <code>java.util.List<java.lang.String></code> | A list of explicitly approved patches for the baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatchesComplianceLevel">approvedPatchesComplianceLevel</a></code> | <code>java.lang.String</code> | Defines the compliance level for approved patches. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatchesEnableNonSecurity">approvedPatchesEnableNonSecurity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the list of approved patches includes non-security updates that should be applied to the instances. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.availableSecurityUpdatesComplianceStatus">availableSecurityUpdatesComplianceStatus</a></code> | <code>java.lang.String</code> | The compliance status for vendor recommended security updates that are not approved by this patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.defaultBaseline">defaultBaseline</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set the baseline as default baseline. Only registering to default patch baseline is allowed. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.globalFilters">globalFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a></code> | A set of global filters used to include patches in the baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | Defines the operating system the patch baseline applies to. The Default value is WINDOWS. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.patchGroups">patchGroups</a></code> | <code>java.util.List<java.lang.String></code> | PatchGroups is used to associate instances with a specific patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.rejectedPatches">rejectedPatches</a></code> | <code>java.util.List<java.lang.String></code> | A list of explicitly rejected patches for the baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.rejectedPatchesAction">rejectedPatchesAction</a></code> | <code>java.lang.String</code> | The action for Patch Manager to take on patches included in the RejectedPackages list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.sources">sources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>></code> | Information about the patches to use to update the instances, including target operating systems and source repository. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>></code> | Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#name SsmPatchBaseline#name}

---

##### `approvalRules`<sup>Optional</sup> <a name="approvalRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvalRules"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a>

A set of rules defining the approval rules for a patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approval_rules SsmPatchBaseline#approval_rules}

---

##### `approvedPatches`<sup>Optional</sup> <a name="approvedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatches"></a>

- *Type:* java.util.List<java.lang.String>

A list of explicitly approved patches for the baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approved_patches SsmPatchBaseline#approved_patches}

---

##### `approvedPatchesComplianceLevel`<sup>Optional</sup> <a name="approvedPatchesComplianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatchesComplianceLevel"></a>

- *Type:* java.lang.String

Defines the compliance level for approved patches.

This means that if an approved patch is reported as missing, this is the severity of the compliance violation. The default value is UNSPECIFIED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}

---

##### `approvedPatchesEnableNonSecurity`<sup>Optional</sup> <a name="approvedPatchesEnableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.approvedPatchesEnableNonSecurity"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the list of approved patches includes non-security updates that should be applied to the instances.

The default value is 'false'. Applies to Linux instances only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}

---

##### `availableSecurityUpdatesComplianceStatus`<sup>Optional</sup> <a name="availableSecurityUpdatesComplianceStatus" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.availableSecurityUpdatesComplianceStatus"></a>

- *Type:* java.lang.String

The compliance status for vendor recommended security updates that are not approved by this patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#available_security_updates_compliance_status SsmPatchBaseline#available_security_updates_compliance_status}

---

##### `defaultBaseline`<sup>Optional</sup> <a name="defaultBaseline" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.defaultBaseline"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set the baseline as default baseline. Only registering to default patch baseline is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#default_baseline SsmPatchBaseline#default_baseline}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#description SsmPatchBaseline#description}

---

##### `globalFilters`<sup>Optional</sup> <a name="globalFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.globalFilters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a>

A set of global filters used to include patches in the baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#global_filters SsmPatchBaseline#global_filters}

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.operatingSystem"></a>

- *Type:* java.lang.String

Defines the operating system the patch baseline applies to. The Default value is WINDOWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#operating_system SsmPatchBaseline#operating_system}

---

##### `patchGroups`<sup>Optional</sup> <a name="patchGroups" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.patchGroups"></a>

- *Type:* java.util.List<java.lang.String>

PatchGroups is used to associate instances with a specific patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#patch_groups SsmPatchBaseline#patch_groups}

---

##### `rejectedPatches`<sup>Optional</sup> <a name="rejectedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.rejectedPatches"></a>

- *Type:* java.util.List<java.lang.String>

A list of explicitly rejected patches for the baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#rejected_patches SsmPatchBaseline#rejected_patches}

---

##### `rejectedPatchesAction`<sup>Optional</sup> <a name="rejectedPatchesAction" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.rejectedPatchesAction"></a>

- *Type:* java.lang.String

The action for Patch Manager to take on patches included in the RejectedPackages list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#rejected_patches_action SsmPatchBaseline#rejected_patches_action}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.sources"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>>

Information about the patches to use to update the instances, including target operating systems and source repository.

Applies to Linux instances only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#sources SsmPatchBaseline#sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>>

Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#tags SsmPatchBaseline#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putApprovalRules">putApprovalRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilters">putGlobalFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovalRules">resetApprovalRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatches">resetApprovedPatches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesComplianceLevel">resetApprovedPatchesComplianceLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesEnableNonSecurity">resetApprovedPatchesEnableNonSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetAvailableSecurityUpdatesComplianceStatus">resetAvailableSecurityUpdatesComplianceStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetDefaultBaseline">resetDefaultBaseline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetGlobalFilters">resetGlobalFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetOperatingSystem">resetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetPatchGroups">resetPatchGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatches">resetRejectedPatches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatchesAction">resetRejectedPatchesAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetSources">resetSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApprovalRules` <a name="putApprovalRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putApprovalRules"></a>

```java
public void putApprovalRules(SsmPatchBaselineApprovalRules value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putApprovalRules.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a>

---

##### `putGlobalFilters` <a name="putGlobalFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilters"></a>

```java
public void putGlobalFilters(SsmPatchBaselineGlobalFilters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a>

---

##### `putSources` <a name="putSources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putSources"></a>

```java
public void putSources(IResolvable|java.util.List<SsmPatchBaselineSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putSources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SsmPatchBaselineTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>>

---

##### `resetApprovalRules` <a name="resetApprovalRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovalRules"></a>

```java
public void resetApprovalRules()
```

##### `resetApprovedPatches` <a name="resetApprovedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatches"></a>

```java
public void resetApprovedPatches()
```

##### `resetApprovedPatchesComplianceLevel` <a name="resetApprovedPatchesComplianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesComplianceLevel"></a>

```java
public void resetApprovedPatchesComplianceLevel()
```

##### `resetApprovedPatchesEnableNonSecurity` <a name="resetApprovedPatchesEnableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesEnableNonSecurity"></a>

```java
public void resetApprovedPatchesEnableNonSecurity()
```

##### `resetAvailableSecurityUpdatesComplianceStatus` <a name="resetAvailableSecurityUpdatesComplianceStatus" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetAvailableSecurityUpdatesComplianceStatus"></a>

```java
public void resetAvailableSecurityUpdatesComplianceStatus()
```

##### `resetDefaultBaseline` <a name="resetDefaultBaseline" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetDefaultBaseline"></a>

```java
public void resetDefaultBaseline()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGlobalFilters` <a name="resetGlobalFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetGlobalFilters"></a>

```java
public void resetGlobalFilters()
```

##### `resetOperatingSystem` <a name="resetOperatingSystem" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetOperatingSystem"></a>

```java
public void resetOperatingSystem()
```

##### `resetPatchGroups` <a name="resetPatchGroups" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetPatchGroups"></a>

```java
public void resetPatchGroups()
```

##### `resetRejectedPatches` <a name="resetRejectedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatches"></a>

```java
public void resetRejectedPatches()
```

##### `resetRejectedPatchesAction` <a name="resetRejectedPatchesAction" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatchesAction"></a>

```java
public void resetRejectedPatchesAction()
```

##### `resetSources` <a name="resetSources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetSources"></a>

```java
public void resetSources()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsmPatchBaseline resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaseline;

SsmPatchBaseline.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaseline;

SsmPatchBaseline.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaseline;

SsmPatchBaseline.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaseline;

SsmPatchBaseline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SsmPatchBaseline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SsmPatchBaseline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SsmPatchBaseline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SsmPatchBaseline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SsmPatchBaseline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvalRules">approvalRules</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference">SsmPatchBaselineApprovalRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.globalFilters">globalFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference">SsmPatchBaselineGlobalFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchBaselineId">patchBaselineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList">SsmPatchBaselineSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList">SsmPatchBaselineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvalRulesInput">approvalRulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevelInput">approvedPatchesComplianceLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurityInput">approvedPatchesEnableNonSecurityInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesInput">approvedPatchesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.availableSecurityUpdatesComplianceStatusInput">availableSecurityUpdatesComplianceStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.defaultBaselineInput">defaultBaselineInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.globalFiltersInput">globalFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystemInput">operatingSystemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchGroupsInput">patchGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesActionInput">rejectedPatchesActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesInput">rejectedPatchesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.sourcesInput">sourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatches">approvedPatches</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevel">approvedPatchesComplianceLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurity">approvedPatchesEnableNonSecurity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.availableSecurityUpdatesComplianceStatus">availableSecurityUpdatesComplianceStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.defaultBaseline">defaultBaseline</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchGroups">patchGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatches">rejectedPatches</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesAction">rejectedPatchesAction</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `approvalRules`<sup>Required</sup> <a name="approvalRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvalRules"></a>

```java
public SsmPatchBaselineApprovalRulesOutputReference getApprovalRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference">SsmPatchBaselineApprovalRulesOutputReference</a>

---

##### `globalFilters`<sup>Required</sup> <a name="globalFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.globalFilters"></a>

```java
public SsmPatchBaselineGlobalFiltersOutputReference getGlobalFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference">SsmPatchBaselineGlobalFiltersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `patchBaselineId`<sup>Required</sup> <a name="patchBaselineId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchBaselineId"></a>

```java
public java.lang.String getPatchBaselineId();
```

- *Type:* java.lang.String

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.sources"></a>

```java
public SsmPatchBaselineSourcesList getSources();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList">SsmPatchBaselineSourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tags"></a>

```java
public SsmPatchBaselineTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList">SsmPatchBaselineTagsList</a>

---

##### `approvalRulesInput`<sup>Optional</sup> <a name="approvalRulesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvalRulesInput"></a>

```java
public IResolvable|SsmPatchBaselineApprovalRules getApprovalRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a>

---

##### `approvedPatchesComplianceLevelInput`<sup>Optional</sup> <a name="approvedPatchesComplianceLevelInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevelInput"></a>

```java
public java.lang.String getApprovedPatchesComplianceLevelInput();
```

- *Type:* java.lang.String

---

##### `approvedPatchesEnableNonSecurityInput`<sup>Optional</sup> <a name="approvedPatchesEnableNonSecurityInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurityInput"></a>

```java
public java.lang.Boolean|IResolvable getApprovedPatchesEnableNonSecurityInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `approvedPatchesInput`<sup>Optional</sup> <a name="approvedPatchesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesInput"></a>

```java
public java.util.List<java.lang.String> getApprovedPatchesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `availableSecurityUpdatesComplianceStatusInput`<sup>Optional</sup> <a name="availableSecurityUpdatesComplianceStatusInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.availableSecurityUpdatesComplianceStatusInput"></a>

```java
public java.lang.String getAvailableSecurityUpdatesComplianceStatusInput();
```

- *Type:* java.lang.String

---

##### `defaultBaselineInput`<sup>Optional</sup> <a name="defaultBaselineInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.defaultBaselineInput"></a>

```java
public java.lang.Boolean|IResolvable getDefaultBaselineInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `globalFiltersInput`<sup>Optional</sup> <a name="globalFiltersInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.globalFiltersInput"></a>

```java
public IResolvable|SsmPatchBaselineGlobalFilters getGlobalFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystemInput"></a>

```java
public java.lang.String getOperatingSystemInput();
```

- *Type:* java.lang.String

---

##### `patchGroupsInput`<sup>Optional</sup> <a name="patchGroupsInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchGroupsInput"></a>

```java
public java.util.List<java.lang.String> getPatchGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rejectedPatchesActionInput`<sup>Optional</sup> <a name="rejectedPatchesActionInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesActionInput"></a>

```java
public java.lang.String getRejectedPatchesActionInput();
```

- *Type:* java.lang.String

---

##### `rejectedPatchesInput`<sup>Optional</sup> <a name="rejectedPatchesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesInput"></a>

```java
public java.util.List<java.lang.String> getRejectedPatchesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.sourcesInput"></a>

```java
public IResolvable|java.util.List<SsmPatchBaselineSources> getSourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SsmPatchBaselineTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>>

---

##### `approvedPatches`<sup>Required</sup> <a name="approvedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatches"></a>

```java
public java.util.List<java.lang.String> getApprovedPatches();
```

- *Type:* java.util.List<java.lang.String>

---

##### `approvedPatchesComplianceLevel`<sup>Required</sup> <a name="approvedPatchesComplianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevel"></a>

```java
public java.lang.String getApprovedPatchesComplianceLevel();
```

- *Type:* java.lang.String

---

##### `approvedPatchesEnableNonSecurity`<sup>Required</sup> <a name="approvedPatchesEnableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurity"></a>

```java
public java.lang.Boolean|IResolvable getApprovedPatchesEnableNonSecurity();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `availableSecurityUpdatesComplianceStatus`<sup>Required</sup> <a name="availableSecurityUpdatesComplianceStatus" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.availableSecurityUpdatesComplianceStatus"></a>

```java
public java.lang.String getAvailableSecurityUpdatesComplianceStatus();
```

- *Type:* java.lang.String

---

##### `defaultBaseline`<sup>Required</sup> <a name="defaultBaseline" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.defaultBaseline"></a>

```java
public java.lang.Boolean|IResolvable getDefaultBaseline();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

---

##### `patchGroups`<sup>Required</sup> <a name="patchGroups" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchGroups"></a>

```java
public java.util.List<java.lang.String> getPatchGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rejectedPatches`<sup>Required</sup> <a name="rejectedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatches"></a>

```java
public java.util.List<java.lang.String> getRejectedPatches();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rejectedPatchesAction`<sup>Required</sup> <a name="rejectedPatchesAction" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesAction"></a>

```java
public java.lang.String getRejectedPatchesAction();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SsmPatchBaselineApprovalRules <a name="SsmPatchBaselineApprovalRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaselineApprovalRules;

SsmPatchBaselineApprovalRules.builder()
//  .patchRules(IResolvable|java.util.List<SsmPatchBaselineApprovalRulesPatchRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules.property.patchRules">patchRules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#patch_rules SsmPatchBaseline#patch_rules}. |

---

##### `patchRules`<sup>Optional</sup> <a name="patchRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules.property.patchRules"></a>

```java
public IResolvable|java.util.List<SsmPatchBaselineApprovalRulesPatchRules> getPatchRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#patch_rules SsmPatchBaseline#patch_rules}.

---

### SsmPatchBaselineApprovalRulesPatchRules <a name="SsmPatchBaselineApprovalRulesPatchRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaselineApprovalRulesPatchRules;

SsmPatchBaselineApprovalRulesPatchRules.builder()
//  .approveAfterDays(java.lang.Number)
//  .approveUntilDate(java.lang.String)
//  .complianceLevel(java.lang.String)
//  .enableNonSecurity(java.lang.Boolean|IResolvable)
//  .patchFilterGroup(SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.approveAfterDays">approveAfterDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approve_after_days SsmPatchBaseline#approve_after_days}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.approveUntilDate">approveUntilDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approve_until_date SsmPatchBaseline#approve_until_date}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.complianceLevel">complianceLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#compliance_level SsmPatchBaseline#compliance_level}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.enableNonSecurity">enableNonSecurity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#enable_non_security SsmPatchBaseline#enable_non_security}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.patchFilterGroup">patchFilterGroup</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a></code> | The patch filter group that defines the criteria for the rule. |

---

##### `approveAfterDays`<sup>Optional</sup> <a name="approveAfterDays" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.approveAfterDays"></a>

```java
public java.lang.Number getApproveAfterDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approve_after_days SsmPatchBaseline#approve_after_days}.

---

##### `approveUntilDate`<sup>Optional</sup> <a name="approveUntilDate" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.approveUntilDate"></a>

```java
public java.lang.String getApproveUntilDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approve_until_date SsmPatchBaseline#approve_until_date}.

---

##### `complianceLevel`<sup>Optional</sup> <a name="complianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.complianceLevel"></a>

```java
public java.lang.String getComplianceLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#compliance_level SsmPatchBaseline#compliance_level}.

---

##### `enableNonSecurity`<sup>Optional</sup> <a name="enableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.enableNonSecurity"></a>

```java
public java.lang.Boolean|IResolvable getEnableNonSecurity();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#enable_non_security SsmPatchBaseline#enable_non_security}.

---

##### `patchFilterGroup`<sup>Optional</sup> <a name="patchFilterGroup" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.patchFilterGroup"></a>

```java
public SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup getPatchFilterGroup();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a>

The patch filter group that defines the criteria for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#patch_filter_group SsmPatchBaseline#patch_filter_group}

---

### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup;

SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup.builder()
//  .patchFilters(IResolvable|java.util.List<SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup.property.patchFilters">patchFilters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#patch_filters SsmPatchBaseline#patch_filters}. |

---

##### `patchFilters`<sup>Optional</sup> <a name="patchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup.property.patchFilters"></a>

```java
public IResolvable|java.util.List<SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters> getPatchFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#patch_filters SsmPatchBaseline#patch_filters}.

---

### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters;

SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.builder()
//  .key(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}.

---

### SsmPatchBaselineConfig <a name="SsmPatchBaselineConfig" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaselineConfig;

SsmPatchBaselineConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .approvalRules(SsmPatchBaselineApprovalRules)
//  .approvedPatches(java.util.List<java.lang.String>)
//  .approvedPatchesComplianceLevel(java.lang.String)
//  .approvedPatchesEnableNonSecurity(java.lang.Boolean|IResolvable)
//  .availableSecurityUpdatesComplianceStatus(java.lang.String)
//  .defaultBaseline(java.lang.Boolean|IResolvable)
//  .description(java.lang.String)
//  .globalFilters(SsmPatchBaselineGlobalFilters)
//  .operatingSystem(java.lang.String)
//  .patchGroups(java.util.List<java.lang.String>)
//  .rejectedPatches(java.util.List<java.lang.String>)
//  .rejectedPatchesAction(java.lang.String)
//  .sources(IResolvable|java.util.List<SsmPatchBaselineSources>)
//  .tags(IResolvable|java.util.List<SsmPatchBaselineTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvalRules">approvalRules</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a></code> | A set of rules defining the approval rules for a patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatches">approvedPatches</a></code> | <code>java.util.List<java.lang.String></code> | A list of explicitly approved patches for the baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesComplianceLevel">approvedPatchesComplianceLevel</a></code> | <code>java.lang.String</code> | Defines the compliance level for approved patches. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesEnableNonSecurity">approvedPatchesEnableNonSecurity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the list of approved patches includes non-security updates that should be applied to the instances. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.availableSecurityUpdatesComplianceStatus">availableSecurityUpdatesComplianceStatus</a></code> | <code>java.lang.String</code> | The compliance status for vendor recommended security updates that are not approved by this patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.defaultBaseline">defaultBaseline</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set the baseline as default baseline. Only registering to default patch baseline is allowed. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.globalFilters">globalFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a></code> | A set of global filters used to include patches in the baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | Defines the operating system the patch baseline applies to. The Default value is WINDOWS. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.patchGroups">patchGroups</a></code> | <code>java.util.List<java.lang.String></code> | PatchGroups is used to associate instances with a specific patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatches">rejectedPatches</a></code> | <code>java.util.List<java.lang.String></code> | A list of explicitly rejected patches for the baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatchesAction">rejectedPatchesAction</a></code> | <code>java.lang.String</code> | The action for Patch Manager to take on patches included in the RejectedPackages list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.sources">sources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>></code> | Information about the patches to use to update the instances, including target operating systems and source repository. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>></code> | Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#name SsmPatchBaseline#name}

---

##### `approvalRules`<sup>Optional</sup> <a name="approvalRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvalRules"></a>

```java
public SsmPatchBaselineApprovalRules getApprovalRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a>

A set of rules defining the approval rules for a patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approval_rules SsmPatchBaseline#approval_rules}

---

##### `approvedPatches`<sup>Optional</sup> <a name="approvedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatches"></a>

```java
public java.util.List<java.lang.String> getApprovedPatches();
```

- *Type:* java.util.List<java.lang.String>

A list of explicitly approved patches for the baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approved_patches SsmPatchBaseline#approved_patches}

---

##### `approvedPatchesComplianceLevel`<sup>Optional</sup> <a name="approvedPatchesComplianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesComplianceLevel"></a>

```java
public java.lang.String getApprovedPatchesComplianceLevel();
```

- *Type:* java.lang.String

Defines the compliance level for approved patches.

This means that if an approved patch is reported as missing, this is the severity of the compliance violation. The default value is UNSPECIFIED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}

---

##### `approvedPatchesEnableNonSecurity`<sup>Optional</sup> <a name="approvedPatchesEnableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesEnableNonSecurity"></a>

```java
public java.lang.Boolean|IResolvable getApprovedPatchesEnableNonSecurity();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the list of approved patches includes non-security updates that should be applied to the instances.

The default value is 'false'. Applies to Linux instances only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}

---

##### `availableSecurityUpdatesComplianceStatus`<sup>Optional</sup> <a name="availableSecurityUpdatesComplianceStatus" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.availableSecurityUpdatesComplianceStatus"></a>

```java
public java.lang.String getAvailableSecurityUpdatesComplianceStatus();
```

- *Type:* java.lang.String

The compliance status for vendor recommended security updates that are not approved by this patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#available_security_updates_compliance_status SsmPatchBaseline#available_security_updates_compliance_status}

---

##### `defaultBaseline`<sup>Optional</sup> <a name="defaultBaseline" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.defaultBaseline"></a>

```java
public java.lang.Boolean|IResolvable getDefaultBaseline();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set the baseline as default baseline. Only registering to default patch baseline is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#default_baseline SsmPatchBaseline#default_baseline}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#description SsmPatchBaseline#description}

---

##### `globalFilters`<sup>Optional</sup> <a name="globalFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.globalFilters"></a>

```java
public SsmPatchBaselineGlobalFilters getGlobalFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a>

A set of global filters used to include patches in the baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#global_filters SsmPatchBaseline#global_filters}

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

Defines the operating system the patch baseline applies to. The Default value is WINDOWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#operating_system SsmPatchBaseline#operating_system}

---

##### `patchGroups`<sup>Optional</sup> <a name="patchGroups" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.patchGroups"></a>

```java
public java.util.List<java.lang.String> getPatchGroups();
```

- *Type:* java.util.List<java.lang.String>

PatchGroups is used to associate instances with a specific patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#patch_groups SsmPatchBaseline#patch_groups}

---

##### `rejectedPatches`<sup>Optional</sup> <a name="rejectedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatches"></a>

```java
public java.util.List<java.lang.String> getRejectedPatches();
```

- *Type:* java.util.List<java.lang.String>

A list of explicitly rejected patches for the baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#rejected_patches SsmPatchBaseline#rejected_patches}

---

##### `rejectedPatchesAction`<sup>Optional</sup> <a name="rejectedPatchesAction" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatchesAction"></a>

```java
public java.lang.String getRejectedPatchesAction();
```

- *Type:* java.lang.String

The action for Patch Manager to take on patches included in the RejectedPackages list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#rejected_patches_action SsmPatchBaseline#rejected_patches_action}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.sources"></a>

```java
public IResolvable|java.util.List<SsmPatchBaselineSources> getSources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>>

Information about the patches to use to update the instances, including target operating systems and source repository.

Applies to Linux instances only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#sources SsmPatchBaseline#sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SsmPatchBaselineTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>>

Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#tags SsmPatchBaseline#tags}

---

### SsmPatchBaselineGlobalFilters <a name="SsmPatchBaselineGlobalFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaselineGlobalFilters;

SsmPatchBaselineGlobalFilters.builder()
//  .patchFilters(IResolvable|java.util.List<SsmPatchBaselineGlobalFiltersPatchFilters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters.property.patchFilters">patchFilters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#patch_filters SsmPatchBaseline#patch_filters}. |

---

##### `patchFilters`<sup>Optional</sup> <a name="patchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters.property.patchFilters"></a>

```java
public IResolvable|java.util.List<SsmPatchBaselineGlobalFiltersPatchFilters> getPatchFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#patch_filters SsmPatchBaseline#patch_filters}.

---

### SsmPatchBaselineGlobalFiltersPatchFilters <a name="SsmPatchBaselineGlobalFiltersPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaselineGlobalFiltersPatchFilters;

SsmPatchBaselineGlobalFiltersPatchFilters.builder()
//  .key(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}.

---

### SsmPatchBaselineSources <a name="SsmPatchBaselineSources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaselineSources;

SsmPatchBaselineSources.builder()
//  .configuration(java.lang.String)
//  .name(java.lang.String)
//  .products(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.configuration">configuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#configuration SsmPatchBaseline#configuration}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#name SsmPatchBaseline#name}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.products">products</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#products SsmPatchBaseline#products}. |

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#configuration SsmPatchBaseline#configuration}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#name SsmPatchBaseline#name}.

---

##### `products`<sup>Optional</sup> <a name="products" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.products"></a>

```java
public java.util.List<java.lang.String> getProducts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#products SsmPatchBaseline#products}.

---

### SsmPatchBaselineTags <a name="SsmPatchBaselineTags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaselineTags;

SsmPatchBaselineTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#value SsmPatchBaseline#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssm_patch_baseline#value SsmPatchBaseline#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmPatchBaselineApprovalRulesOutputReference <a name="SsmPatchBaselineApprovalRulesOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaselineApprovalRulesOutputReference;

new SsmPatchBaselineApprovalRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.putPatchRules">putPatchRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resetPatchRules">resetPatchRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPatchRules` <a name="putPatchRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.putPatchRules"></a>

```java
public void putPatchRules(IResolvable|java.util.List<SsmPatchBaselineApprovalRulesPatchRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.putPatchRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>>

---

##### `resetPatchRules` <a name="resetPatchRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resetPatchRules"></a>

```java
public void resetPatchRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.patchRules">patchRules</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList">SsmPatchBaselineApprovalRulesPatchRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.patchRulesInput">patchRulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `patchRules`<sup>Required</sup> <a name="patchRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.patchRules"></a>

```java
public SsmPatchBaselineApprovalRulesPatchRulesList getPatchRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList">SsmPatchBaselineApprovalRulesPatchRulesList</a>

---

##### `patchRulesInput`<sup>Optional</sup> <a name="patchRulesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.patchRulesInput"></a>

```java
public IResolvable|java.util.List<SsmPatchBaselineApprovalRulesPatchRules> getPatchRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmPatchBaselineApprovalRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a>

---


### SsmPatchBaselineApprovalRulesPatchRulesList <a name="SsmPatchBaselineApprovalRulesPatchRulesList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaselineApprovalRulesPatchRulesList;

new SsmPatchBaselineApprovalRulesPatchRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.get"></a>

```java
public SsmPatchBaselineApprovalRulesPatchRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmPatchBaselineApprovalRulesPatchRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>>

---


### SsmPatchBaselineApprovalRulesPatchRulesOutputReference <a name="SsmPatchBaselineApprovalRulesPatchRulesOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference;

new SsmPatchBaselineApprovalRulesPatchRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.putPatchFilterGroup">putPatchFilterGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetApproveAfterDays">resetApproveAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetApproveUntilDate">resetApproveUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetComplianceLevel">resetComplianceLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetEnableNonSecurity">resetEnableNonSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetPatchFilterGroup">resetPatchFilterGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPatchFilterGroup` <a name="putPatchFilterGroup" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.putPatchFilterGroup"></a>

```java
public void putPatchFilterGroup(SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.putPatchFilterGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a>

---

##### `resetApproveAfterDays` <a name="resetApproveAfterDays" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetApproveAfterDays"></a>

```java
public void resetApproveAfterDays()
```

##### `resetApproveUntilDate` <a name="resetApproveUntilDate" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetApproveUntilDate"></a>

```java
public void resetApproveUntilDate()
```

##### `resetComplianceLevel` <a name="resetComplianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetComplianceLevel"></a>

```java
public void resetComplianceLevel()
```

##### `resetEnableNonSecurity` <a name="resetEnableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetEnableNonSecurity"></a>

```java
public void resetEnableNonSecurity()
```

##### `resetPatchFilterGroup` <a name="resetPatchFilterGroup" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetPatchFilterGroup"></a>

```java
public void resetPatchFilterGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.patchFilterGroup">patchFilterGroup</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveAfterDaysInput">approveAfterDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveUntilDateInput">approveUntilDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.complianceLevelInput">complianceLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.enableNonSecurityInput">enableNonSecurityInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.patchFilterGroupInput">patchFilterGroupInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveAfterDays">approveAfterDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveUntilDate">approveUntilDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.complianceLevel">complianceLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.enableNonSecurity">enableNonSecurity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `patchFilterGroup`<sup>Required</sup> <a name="patchFilterGroup" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.patchFilterGroup"></a>

```java
public SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference getPatchFilterGroup();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference</a>

---

##### `approveAfterDaysInput`<sup>Optional</sup> <a name="approveAfterDaysInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveAfterDaysInput"></a>

```java
public java.lang.Number getApproveAfterDaysInput();
```

- *Type:* java.lang.Number

---

##### `approveUntilDateInput`<sup>Optional</sup> <a name="approveUntilDateInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveUntilDateInput"></a>

```java
public java.lang.String getApproveUntilDateInput();
```

- *Type:* java.lang.String

---

##### `complianceLevelInput`<sup>Optional</sup> <a name="complianceLevelInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.complianceLevelInput"></a>

```java
public java.lang.String getComplianceLevelInput();
```

- *Type:* java.lang.String

---

##### `enableNonSecurityInput`<sup>Optional</sup> <a name="enableNonSecurityInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.enableNonSecurityInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableNonSecurityInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `patchFilterGroupInput`<sup>Optional</sup> <a name="patchFilterGroupInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.patchFilterGroupInput"></a>

```java
public IResolvable|SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup getPatchFilterGroupInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a>

---

##### `approveAfterDays`<sup>Required</sup> <a name="approveAfterDays" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveAfterDays"></a>

```java
public java.lang.Number getApproveAfterDays();
```

- *Type:* java.lang.Number

---

##### `approveUntilDate`<sup>Required</sup> <a name="approveUntilDate" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveUntilDate"></a>

```java
public java.lang.String getApproveUntilDate();
```

- *Type:* java.lang.String

---

##### `complianceLevel`<sup>Required</sup> <a name="complianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.complianceLevel"></a>

```java
public java.lang.String getComplianceLevel();
```

- *Type:* java.lang.String

---

##### `enableNonSecurity`<sup>Required</sup> <a name="enableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.enableNonSecurity"></a>

```java
public java.lang.Boolean|IResolvable getEnableNonSecurity();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmPatchBaselineApprovalRulesPatchRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>

---


### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference;

new SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.putPatchFilters">putPatchFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resetPatchFilters">resetPatchFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPatchFilters` <a name="putPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.putPatchFilters"></a>

```java
public void putPatchFilters(IResolvable|java.util.List<SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.putPatchFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>>

---

##### `resetPatchFilters` <a name="resetPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resetPatchFilters"></a>

```java
public void resetPatchFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.patchFilters">patchFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.patchFiltersInput">patchFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `patchFilters`<sup>Required</sup> <a name="patchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.patchFilters"></a>

```java
public SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList getPatchFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList</a>

---

##### `patchFiltersInput`<sup>Optional</sup> <a name="patchFiltersInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.patchFiltersInput"></a>

```java
public IResolvable|java.util.List<SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters> getPatchFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a>

---


### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList;

new SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.get"></a>

```java
public SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>>

---


### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference;

new SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>

---


### SsmPatchBaselineGlobalFiltersOutputReference <a name="SsmPatchBaselineGlobalFiltersOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaselineGlobalFiltersOutputReference;

new SsmPatchBaselineGlobalFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.putPatchFilters">putPatchFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resetPatchFilters">resetPatchFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPatchFilters` <a name="putPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.putPatchFilters"></a>

```java
public void putPatchFilters(IResolvable|java.util.List<SsmPatchBaselineGlobalFiltersPatchFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.putPatchFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>>

---

##### `resetPatchFilters` <a name="resetPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resetPatchFilters"></a>

```java
public void resetPatchFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.patchFilters">patchFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList">SsmPatchBaselineGlobalFiltersPatchFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.patchFiltersInput">patchFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `patchFilters`<sup>Required</sup> <a name="patchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.patchFilters"></a>

```java
public SsmPatchBaselineGlobalFiltersPatchFiltersList getPatchFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList">SsmPatchBaselineGlobalFiltersPatchFiltersList</a>

---

##### `patchFiltersInput`<sup>Optional</sup> <a name="patchFiltersInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.patchFiltersInput"></a>

```java
public IResolvable|java.util.List<SsmPatchBaselineGlobalFiltersPatchFilters> getPatchFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmPatchBaselineGlobalFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a>

---


### SsmPatchBaselineGlobalFiltersPatchFiltersList <a name="SsmPatchBaselineGlobalFiltersPatchFiltersList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaselineGlobalFiltersPatchFiltersList;

new SsmPatchBaselineGlobalFiltersPatchFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.get"></a>

```java
public SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmPatchBaselineGlobalFiltersPatchFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>>

---


### SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference <a name="SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference;

new SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmPatchBaselineGlobalFiltersPatchFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>

---


### SsmPatchBaselineSourcesList <a name="SsmPatchBaselineSourcesList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaselineSourcesList;

new SsmPatchBaselineSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.get"></a>

```java
public SsmPatchBaselineSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmPatchBaselineSources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>>

---


### SsmPatchBaselineSourcesOutputReference <a name="SsmPatchBaselineSourcesOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaselineSourcesOutputReference;

new SsmPatchBaselineSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetProducts">resetProducts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetProducts` <a name="resetProducts" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetProducts"></a>

```java
public void resetProducts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.configurationInput">configurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.productsInput">productsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.configuration">configuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.products">products</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.configurationInput"></a>

```java
public java.lang.String getConfigurationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `productsInput`<sup>Optional</sup> <a name="productsInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.productsInput"></a>

```java
public java.util.List<java.lang.String> getProductsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `products`<sup>Required</sup> <a name="products" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.products"></a>

```java
public java.util.List<java.lang.String> getProducts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmPatchBaselineSources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>

---


### SsmPatchBaselineTagsList <a name="SsmPatchBaselineTagsList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaselineTagsList;

new SsmPatchBaselineTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.get"></a>

```java
public SsmPatchBaselineTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmPatchBaselineTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>>

---


### SsmPatchBaselineTagsOutputReference <a name="SsmPatchBaselineTagsOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_patch_baseline.SsmPatchBaselineTagsOutputReference;

new SsmPatchBaselineTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmPatchBaselineTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>

---



