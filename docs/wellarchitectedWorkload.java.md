# `wellarchitectedWorkload` Submodule <a name="`wellarchitectedWorkload` Submodule" id="@cdktn/provider-awscc.wellarchitectedWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WellarchitectedWorkload <a name="WellarchitectedWorkload" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload awscc_wellarchitected_workload}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_workload.WellarchitectedWorkload;

WellarchitectedWorkload.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .description(java.lang.String)
    .environment(java.lang.String)
    .lenses(java.util.List<java.lang.String>)
    .workloadName(java.lang.String)
//  .accountIds(java.util.List<java.lang.String>)
//  .architecturalDesign(java.lang.String)
//  .awsRegions(java.util.List<java.lang.String>)
//  .discoveryConfig(WellarchitectedWorkloadDiscoveryConfig)
//  .industry(java.lang.String)
//  .industryType(java.lang.String)
//  .nonAwsRegions(java.util.List<java.lang.String>)
//  .notes(java.lang.String)
//  .reviewOwner(java.lang.String)
//  .tags(IResolvable|java.util.List<WellarchitectedWorkloadTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | The environment for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.lenses">lenses</a></code> | <code>java.util.List<java.lang.String></code> | The list of lenses associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.workloadName">workloadName</a></code> | <code>java.lang.String</code> | The name of the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.accountIds">accountIds</a></code> | <code>java.util.List<java.lang.String></code> | The list of Amazon Web Services account IDs associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.architecturalDesign">architecturalDesign</a></code> | <code>java.lang.String</code> | The URL of the architectural design for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | The list of Amazon Web Services Regions associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.discoveryConfig">discoveryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a></code> | Discovery configuration associated to the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.industry">industry</a></code> | <code>java.lang.String</code> | The industry for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.industryType">industryType</a></code> | <code>java.lang.String</code> | The industry type for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.nonAwsRegions">nonAwsRegions</a></code> | <code>java.util.List<java.lang.String></code> | The list of non-Amazon Web Services Regions associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.notes">notes</a></code> | <code>java.lang.String</code> | The notes associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.reviewOwner">reviewOwner</a></code> | <code>java.lang.String</code> | The review owner of the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>></code> | The tags associated with the workload. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#description WellarchitectedWorkload#description}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

The environment for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#environment WellarchitectedWorkload#environment}

---

##### `lenses`<sup>Required</sup> <a name="lenses" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.lenses"></a>

- *Type:* java.util.List<java.lang.String>

The list of lenses associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#lenses WellarchitectedWorkload#lenses}

---

##### `workloadName`<sup>Required</sup> <a name="workloadName" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.workloadName"></a>

- *Type:* java.lang.String

The name of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#workload_name WellarchitectedWorkload#workload_name}

---

##### `accountIds`<sup>Optional</sup> <a name="accountIds" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.accountIds"></a>

- *Type:* java.util.List<java.lang.String>

The list of Amazon Web Services account IDs associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#account_ids WellarchitectedWorkload#account_ids}

---

##### `architecturalDesign`<sup>Optional</sup> <a name="architecturalDesign" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.architecturalDesign"></a>

- *Type:* java.lang.String

The URL of the architectural design for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#architectural_design WellarchitectedWorkload#architectural_design}

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.awsRegions"></a>

- *Type:* java.util.List<java.lang.String>

The list of Amazon Web Services Regions associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#aws_regions WellarchitectedWorkload#aws_regions}

---

##### `discoveryConfig`<sup>Optional</sup> <a name="discoveryConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.discoveryConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a>

Discovery configuration associated to the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#discovery_config WellarchitectedWorkload#discovery_config}

---

##### `industry`<sup>Optional</sup> <a name="industry" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.industry"></a>

- *Type:* java.lang.String

The industry for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#industry WellarchitectedWorkload#industry}

---

##### `industryType`<sup>Optional</sup> <a name="industryType" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.industryType"></a>

- *Type:* java.lang.String

The industry type for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#industry_type WellarchitectedWorkload#industry_type}

---

##### `nonAwsRegions`<sup>Optional</sup> <a name="nonAwsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.nonAwsRegions"></a>

- *Type:* java.util.List<java.lang.String>

The list of non-Amazon Web Services Regions associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#non_aws_regions WellarchitectedWorkload#non_aws_regions}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.notes"></a>

- *Type:* java.lang.String

The notes associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#notes WellarchitectedWorkload#notes}

---

##### `reviewOwner`<sup>Optional</sup> <a name="reviewOwner" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.reviewOwner"></a>

- *Type:* java.lang.String

The review owner of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#review_owner WellarchitectedWorkload#review_owner}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>>

The tags associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#tags WellarchitectedWorkload#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putDiscoveryConfig">putDiscoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetAccountIds">resetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetArchitecturalDesign">resetArchitecturalDesign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetAwsRegions">resetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetDiscoveryConfig">resetDiscoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetIndustry">resetIndustry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetIndustryType">resetIndustryType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetNonAwsRegions">resetNonAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetReviewOwner">resetReviewOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDiscoveryConfig` <a name="putDiscoveryConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putDiscoveryConfig"></a>

```java
public void putDiscoveryConfig(WellarchitectedWorkloadDiscoveryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putDiscoveryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<WellarchitectedWorkloadTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>>

---

##### `resetAccountIds` <a name="resetAccountIds" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetAccountIds"></a>

```java
public void resetAccountIds()
```

##### `resetArchitecturalDesign` <a name="resetArchitecturalDesign" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetArchitecturalDesign"></a>

```java
public void resetArchitecturalDesign()
```

##### `resetAwsRegions` <a name="resetAwsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetAwsRegions"></a>

```java
public void resetAwsRegions()
```

##### `resetDiscoveryConfig` <a name="resetDiscoveryConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetDiscoveryConfig"></a>

```java
public void resetDiscoveryConfig()
```

##### `resetIndustry` <a name="resetIndustry" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetIndustry"></a>

```java
public void resetIndustry()
```

##### `resetIndustryType` <a name="resetIndustryType" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetIndustryType"></a>

```java
public void resetIndustryType()
```

##### `resetNonAwsRegions` <a name="resetNonAwsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetNonAwsRegions"></a>

```java
public void resetNonAwsRegions()
```

##### `resetNotes` <a name="resetNotes" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetNotes"></a>

```java
public void resetNotes()
```

##### `resetReviewOwner` <a name="resetReviewOwner" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetReviewOwner"></a>

```java
public void resetReviewOwner()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WellarchitectedWorkload resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isConstruct"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_workload.WellarchitectedWorkload;

WellarchitectedWorkload.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_workload.WellarchitectedWorkload;

WellarchitectedWorkload.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_workload.WellarchitectedWorkload;

WellarchitectedWorkload.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_workload.WellarchitectedWorkload;

WellarchitectedWorkload.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WellarchitectedWorkload.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WellarchitectedWorkload resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WellarchitectedWorkload to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WellarchitectedWorkload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WellarchitectedWorkload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.discoveryConfig">discoveryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference">WellarchitectedWorkloadDiscoveryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.improvementStatus">improvementStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList">WellarchitectedWorkloadTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadArn">workloadArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadId">workloadId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.accountIdsInput">accountIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.architecturalDesignInput">architecturalDesignInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.awsRegionsInput">awsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.discoveryConfigInput">discoveryConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryInput">industryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryTypeInput">industryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lensesInput">lensesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.nonAwsRegionsInput">nonAwsRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.notesInput">notesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.reviewOwnerInput">reviewOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadNameInput">workloadNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.accountIds">accountIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.architecturalDesign">architecturalDesign</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industry">industry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryType">industryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lenses">lenses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.nonAwsRegions">nonAwsRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.notes">notes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.reviewOwner">reviewOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadName">workloadName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `discoveryConfig`<sup>Required</sup> <a name="discoveryConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.discoveryConfig"></a>

```java
public WellarchitectedWorkloadDiscoveryConfigOutputReference getDiscoveryConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference">WellarchitectedWorkloadDiscoveryConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `improvementStatus`<sup>Required</sup> <a name="improvementStatus" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.improvementStatus"></a>

```java
public java.lang.String getImprovementStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tags"></a>

```java
public WellarchitectedWorkloadTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList">WellarchitectedWorkloadTagsList</a>

---

##### `workloadArn`<sup>Required</sup> <a name="workloadArn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadArn"></a>

```java
public java.lang.String getWorkloadArn();
```

- *Type:* java.lang.String

---

##### `workloadId`<sup>Required</sup> <a name="workloadId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadId"></a>

```java
public java.lang.String getWorkloadId();
```

- *Type:* java.lang.String

---

##### `accountIdsInput`<sup>Optional</sup> <a name="accountIdsInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.accountIdsInput"></a>

```java
public java.util.List<java.lang.String> getAccountIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `architecturalDesignInput`<sup>Optional</sup> <a name="architecturalDesignInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.architecturalDesignInput"></a>

```java
public java.lang.String getArchitecturalDesignInput();
```

- *Type:* java.lang.String

---

##### `awsRegionsInput`<sup>Optional</sup> <a name="awsRegionsInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.awsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `discoveryConfigInput`<sup>Optional</sup> <a name="discoveryConfigInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.discoveryConfigInput"></a>

```java
public IResolvable|WellarchitectedWorkloadDiscoveryConfig getDiscoveryConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a>

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `industryInput`<sup>Optional</sup> <a name="industryInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryInput"></a>

```java
public java.lang.String getIndustryInput();
```

- *Type:* java.lang.String

---

##### `industryTypeInput`<sup>Optional</sup> <a name="industryTypeInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryTypeInput"></a>

```java
public java.lang.String getIndustryTypeInput();
```

- *Type:* java.lang.String

---

##### `lensesInput`<sup>Optional</sup> <a name="lensesInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lensesInput"></a>

```java
public java.util.List<java.lang.String> getLensesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nonAwsRegionsInput`<sup>Optional</sup> <a name="nonAwsRegionsInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.nonAwsRegionsInput"></a>

```java
public java.util.List<java.lang.String> getNonAwsRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.notesInput"></a>

```java
public java.lang.String getNotesInput();
```

- *Type:* java.lang.String

---

##### `reviewOwnerInput`<sup>Optional</sup> <a name="reviewOwnerInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.reviewOwnerInput"></a>

```java
public java.lang.String getReviewOwnerInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tagsInput"></a>

```java
public IResolvable|java.util.List<WellarchitectedWorkloadTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>>

---

##### `workloadNameInput`<sup>Optional</sup> <a name="workloadNameInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadNameInput"></a>

```java
public java.lang.String getWorkloadNameInput();
```

- *Type:* java.lang.String

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.accountIds"></a>

```java
public java.util.List<java.lang.String> getAccountIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `architecturalDesign`<sup>Required</sup> <a name="architecturalDesign" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.architecturalDesign"></a>

```java
public java.lang.String getArchitecturalDesign();
```

- *Type:* java.lang.String

---

##### `awsRegions`<sup>Required</sup> <a name="awsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `industry`<sup>Required</sup> <a name="industry" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industry"></a>

```java
public java.lang.String getIndustry();
```

- *Type:* java.lang.String

---

##### `industryType`<sup>Required</sup> <a name="industryType" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryType"></a>

```java
public java.lang.String getIndustryType();
```

- *Type:* java.lang.String

---

##### `lenses`<sup>Required</sup> <a name="lenses" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lenses"></a>

```java
public java.util.List<java.lang.String> getLenses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nonAwsRegions`<sup>Required</sup> <a name="nonAwsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.nonAwsRegions"></a>

```java
public java.util.List<java.lang.String> getNonAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

---

##### `reviewOwner`<sup>Required</sup> <a name="reviewOwner" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.reviewOwner"></a>

```java
public java.lang.String getReviewOwner();
```

- *Type:* java.lang.String

---

##### `workloadName`<sup>Required</sup> <a name="workloadName" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadName"></a>

```java
public java.lang.String getWorkloadName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WellarchitectedWorkloadConfig <a name="WellarchitectedWorkloadConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_workload.WellarchitectedWorkloadConfig;

WellarchitectedWorkloadConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .description(java.lang.String)
    .environment(java.lang.String)
    .lenses(java.util.List<java.lang.String>)
    .workloadName(java.lang.String)
//  .accountIds(java.util.List<java.lang.String>)
//  .architecturalDesign(java.lang.String)
//  .awsRegions(java.util.List<java.lang.String>)
//  .discoveryConfig(WellarchitectedWorkloadDiscoveryConfig)
//  .industry(java.lang.String)
//  .industryType(java.lang.String)
//  .nonAwsRegions(java.util.List<java.lang.String>)
//  .notes(java.lang.String)
//  .reviewOwner(java.lang.String)
//  .tags(IResolvable|java.util.List<WellarchitectedWorkloadTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | The environment for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.lenses">lenses</a></code> | <code>java.util.List<java.lang.String></code> | The list of lenses associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.workloadName">workloadName</a></code> | <code>java.lang.String</code> | The name of the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.accountIds">accountIds</a></code> | <code>java.util.List<java.lang.String></code> | The list of Amazon Web Services account IDs associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.architecturalDesign">architecturalDesign</a></code> | <code>java.lang.String</code> | The URL of the architectural design for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.awsRegions">awsRegions</a></code> | <code>java.util.List<java.lang.String></code> | The list of Amazon Web Services Regions associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.discoveryConfig">discoveryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a></code> | Discovery configuration associated to the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.industry">industry</a></code> | <code>java.lang.String</code> | The industry for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.industryType">industryType</a></code> | <code>java.lang.String</code> | The industry type for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.nonAwsRegions">nonAwsRegions</a></code> | <code>java.util.List<java.lang.String></code> | The list of non-Amazon Web Services Regions associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.notes">notes</a></code> | <code>java.lang.String</code> | The notes associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.reviewOwner">reviewOwner</a></code> | <code>java.lang.String</code> | The review owner of the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>></code> | The tags associated with the workload. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#description WellarchitectedWorkload#description}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The environment for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#environment WellarchitectedWorkload#environment}

---

##### `lenses`<sup>Required</sup> <a name="lenses" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.lenses"></a>

```java
public java.util.List<java.lang.String> getLenses();
```

- *Type:* java.util.List<java.lang.String>

The list of lenses associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#lenses WellarchitectedWorkload#lenses}

---

##### `workloadName`<sup>Required</sup> <a name="workloadName" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.workloadName"></a>

```java
public java.lang.String getWorkloadName();
```

- *Type:* java.lang.String

The name of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#workload_name WellarchitectedWorkload#workload_name}

---

##### `accountIds`<sup>Optional</sup> <a name="accountIds" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.accountIds"></a>

```java
public java.util.List<java.lang.String> getAccountIds();
```

- *Type:* java.util.List<java.lang.String>

The list of Amazon Web Services account IDs associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#account_ids WellarchitectedWorkload#account_ids}

---

##### `architecturalDesign`<sup>Optional</sup> <a name="architecturalDesign" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.architecturalDesign"></a>

```java
public java.lang.String getArchitecturalDesign();
```

- *Type:* java.lang.String

The URL of the architectural design for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#architectural_design WellarchitectedWorkload#architectural_design}

---

##### `awsRegions`<sup>Optional</sup> <a name="awsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.awsRegions"></a>

```java
public java.util.List<java.lang.String> getAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

The list of Amazon Web Services Regions associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#aws_regions WellarchitectedWorkload#aws_regions}

---

##### `discoveryConfig`<sup>Optional</sup> <a name="discoveryConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.discoveryConfig"></a>

```java
public WellarchitectedWorkloadDiscoveryConfig getDiscoveryConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a>

Discovery configuration associated to the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#discovery_config WellarchitectedWorkload#discovery_config}

---

##### `industry`<sup>Optional</sup> <a name="industry" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.industry"></a>

```java
public java.lang.String getIndustry();
```

- *Type:* java.lang.String

The industry for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#industry WellarchitectedWorkload#industry}

---

##### `industryType`<sup>Optional</sup> <a name="industryType" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.industryType"></a>

```java
public java.lang.String getIndustryType();
```

- *Type:* java.lang.String

The industry type for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#industry_type WellarchitectedWorkload#industry_type}

---

##### `nonAwsRegions`<sup>Optional</sup> <a name="nonAwsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.nonAwsRegions"></a>

```java
public java.util.List<java.lang.String> getNonAwsRegions();
```

- *Type:* java.util.List<java.lang.String>

The list of non-Amazon Web Services Regions associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#non_aws_regions WellarchitectedWorkload#non_aws_regions}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.notes"></a>

```java
public java.lang.String getNotes();
```

- *Type:* java.lang.String

The notes associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#notes WellarchitectedWorkload#notes}

---

##### `reviewOwner`<sup>Optional</sup> <a name="reviewOwner" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.reviewOwner"></a>

```java
public java.lang.String getReviewOwner();
```

- *Type:* java.lang.String

The review owner of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#review_owner WellarchitectedWorkload#review_owner}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.tags"></a>

```java
public IResolvable|java.util.List<WellarchitectedWorkloadTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>>

The tags associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#tags WellarchitectedWorkload#tags}

---

### WellarchitectedWorkloadDiscoveryConfig <a name="WellarchitectedWorkloadDiscoveryConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_workload.WellarchitectedWorkloadDiscoveryConfig;

WellarchitectedWorkloadDiscoveryConfig.builder()
//  .trustedAdvisorIntegrationStatus(java.lang.String)
//  .workloadResourceDefinition(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.property.trustedAdvisorIntegrationStatus">trustedAdvisorIntegrationStatus</a></code> | <code>java.lang.String</code> | Discovery integration status in respect to Trusted Advisor for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.property.workloadResourceDefinition">workloadResourceDefinition</a></code> | <code>java.util.List<java.lang.String></code> | The mode to use for identifying resources associated with the workload. |

---

##### `trustedAdvisorIntegrationStatus`<sup>Optional</sup> <a name="trustedAdvisorIntegrationStatus" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.property.trustedAdvisorIntegrationStatus"></a>

```java
public java.lang.String getTrustedAdvisorIntegrationStatus();
```

- *Type:* java.lang.String

Discovery integration status in respect to Trusted Advisor for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#trusted_advisor_integration_status WellarchitectedWorkload#trusted_advisor_integration_status}

---

##### `workloadResourceDefinition`<sup>Optional</sup> <a name="workloadResourceDefinition" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.property.workloadResourceDefinition"></a>

```java
public java.util.List<java.lang.String> getWorkloadResourceDefinition();
```

- *Type:* java.util.List<java.lang.String>

The mode to use for identifying resources associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#workload_resource_definition WellarchitectedWorkload#workload_resource_definition}

---

### WellarchitectedWorkloadTags <a name="WellarchitectedWorkloadTags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_workload.WellarchitectedWorkloadTags;

WellarchitectedWorkloadTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#key WellarchitectedWorkload#key}. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#value WellarchitectedWorkload#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#key WellarchitectedWorkload#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wellarchitected_workload#value WellarchitectedWorkload#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WellarchitectedWorkloadDiscoveryConfigOutputReference <a name="WellarchitectedWorkloadDiscoveryConfigOutputReference" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_workload.WellarchitectedWorkloadDiscoveryConfigOutputReference;

new WellarchitectedWorkloadDiscoveryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resetTrustedAdvisorIntegrationStatus">resetTrustedAdvisorIntegrationStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resetWorkloadResourceDefinition">resetWorkloadResourceDefinition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTrustedAdvisorIntegrationStatus` <a name="resetTrustedAdvisorIntegrationStatus" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resetTrustedAdvisorIntegrationStatus"></a>

```java
public void resetTrustedAdvisorIntegrationStatus()
```

##### `resetWorkloadResourceDefinition` <a name="resetWorkloadResourceDefinition" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resetWorkloadResourceDefinition"></a>

```java
public void resetWorkloadResourceDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.trustedAdvisorIntegrationStatusInput">trustedAdvisorIntegrationStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.workloadResourceDefinitionInput">workloadResourceDefinitionInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.trustedAdvisorIntegrationStatus">trustedAdvisorIntegrationStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.workloadResourceDefinition">workloadResourceDefinition</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `trustedAdvisorIntegrationStatusInput`<sup>Optional</sup> <a name="trustedAdvisorIntegrationStatusInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.trustedAdvisorIntegrationStatusInput"></a>

```java
public java.lang.String getTrustedAdvisorIntegrationStatusInput();
```

- *Type:* java.lang.String

---

##### `workloadResourceDefinitionInput`<sup>Optional</sup> <a name="workloadResourceDefinitionInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.workloadResourceDefinitionInput"></a>

```java
public java.util.List<java.lang.String> getWorkloadResourceDefinitionInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trustedAdvisorIntegrationStatus`<sup>Required</sup> <a name="trustedAdvisorIntegrationStatus" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.trustedAdvisorIntegrationStatus"></a>

```java
public java.lang.String getTrustedAdvisorIntegrationStatus();
```

- *Type:* java.lang.String

---

##### `workloadResourceDefinition`<sup>Required</sup> <a name="workloadResourceDefinition" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.workloadResourceDefinition"></a>

```java
public java.util.List<java.lang.String> getWorkloadResourceDefinition();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|WellarchitectedWorkloadDiscoveryConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a>

---


### WellarchitectedWorkloadTagsList <a name="WellarchitectedWorkloadTagsList" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_workload.WellarchitectedWorkloadTagsList;

new WellarchitectedWorkloadTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.get"></a>

```java
public WellarchitectedWorkloadTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<WellarchitectedWorkloadTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>>

---


### WellarchitectedWorkloadTagsOutputReference <a name="WellarchitectedWorkloadTagsOutputReference" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.wellarchitected_workload.WellarchitectedWorkloadTagsOutputReference;

new WellarchitectedWorkloadTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|WellarchitectedWorkloadTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>

---



