# `ssmAssociation` Submodule <a name="`ssmAssociation` Submodule" id="@cdktn/provider-awscc.ssmAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmAssociation <a name="SsmAssociation" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association awscc_ssm_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_association.SsmAssociation;

SsmAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .applyOnlyAtCronInterval(java.lang.Boolean|IResolvable)
//  .associationDispatchAssumeRole(java.lang.String)
//  .associationName(java.lang.String)
//  .automationTargetParameterName(java.lang.String)
//  .calendarNames(java.util.List<java.lang.String>)
//  .complianceSeverity(java.lang.String)
//  .documentVersion(java.lang.String)
//  .instanceId(java.lang.String)
//  .maxConcurrency(java.lang.String)
//  .maxErrors(java.lang.String)
//  .outputLocation(SsmAssociationOutputLocation)
//  .parameters(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .scheduleExpression(java.lang.String)
//  .scheduleOffset(java.lang.Number)
//  .syncCompliance(java.lang.String)
//  .tags(IResolvable|java.util.List<SsmAssociationTags>)
//  .targets(IResolvable|java.util.List<SsmAssociationTargets>)
//  .waitForSuccessTimeoutSeconds(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the SSM document. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.applyOnlyAtCronInterval">applyOnlyAtCronInterval</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.associationDispatchAssumeRole">associationDispatchAssumeRole</a></code> | <code>java.lang.String</code> | A role used by association to take actions on your behalf. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.associationName">associationName</a></code> | <code>java.lang.String</code> | The name of the association. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.automationTargetParameterName">automationTargetParameterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.calendarNames">calendarNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#calendar_names SsmAssociation#calendar_names}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.complianceSeverity">complianceSeverity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#compliance_severity SsmAssociation#compliance_severity}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.documentVersion">documentVersion</a></code> | <code>java.lang.String</code> | The version of the SSM document to associate with the target. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The ID of the instance that the SSM document is associated with. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.maxConcurrency">maxConcurrency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#max_concurrency SsmAssociation#max_concurrency}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.maxErrors">maxErrors</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#max_errors SsmAssociation#max_errors}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.outputLocation">outputLocation</a></code> | <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_location SsmAssociation#output_location}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | Parameter values that the SSM document uses at runtime. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | A Cron or Rate expression that specifies when the association is applied to the target. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.scheduleOffset">scheduleOffset</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#schedule_offset SsmAssociation#schedule_offset}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.syncCompliance">syncCompliance</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#sync_compliance SsmAssociation#sync_compliance}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>></code> | A key-value pair to associate with a resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.targets">targets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>></code> | The targets that the SSM document sends commands to. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.waitForSuccessTimeoutSeconds">waitForSuccessTimeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#wait_for_success_timeout_seconds SsmAssociation#wait_for_success_timeout_seconds}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the SSM document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#name SsmAssociation#name}

---

##### `applyOnlyAtCronInterval`<sup>Optional</sup> <a name="applyOnlyAtCronInterval" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.applyOnlyAtCronInterval"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}.

---

##### `associationDispatchAssumeRole`<sup>Optional</sup> <a name="associationDispatchAssumeRole" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.associationDispatchAssumeRole"></a>

- *Type:* java.lang.String

A role used by association to take actions on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#association_dispatch_assume_role SsmAssociation#association_dispatch_assume_role}

---

##### `associationName`<sup>Optional</sup> <a name="associationName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.associationName"></a>

- *Type:* java.lang.String

The name of the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#association_name SsmAssociation#association_name}

---

##### `automationTargetParameterName`<sup>Optional</sup> <a name="automationTargetParameterName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.automationTargetParameterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}.

---

##### `calendarNames`<sup>Optional</sup> <a name="calendarNames" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.calendarNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#calendar_names SsmAssociation#calendar_names}.

---

##### `complianceSeverity`<sup>Optional</sup> <a name="complianceSeverity" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.complianceSeverity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#compliance_severity SsmAssociation#compliance_severity}.

---

##### `documentVersion`<sup>Optional</sup> <a name="documentVersion" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.documentVersion"></a>

- *Type:* java.lang.String

The version of the SSM document to associate with the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#document_version SsmAssociation#document_version}

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

The ID of the instance that the SSM document is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#instance_id SsmAssociation#instance_id}

---

##### `maxConcurrency`<sup>Optional</sup> <a name="maxConcurrency" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.maxConcurrency"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#max_concurrency SsmAssociation#max_concurrency}.

---

##### `maxErrors`<sup>Optional</sup> <a name="maxErrors" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.maxErrors"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#max_errors SsmAssociation#max_errors}.

---

##### `outputLocation`<sup>Optional</sup> <a name="outputLocation" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.outputLocation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_location SsmAssociation#output_location}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.parameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

Parameter values that the SSM document uses at runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#parameters SsmAssociation#parameters}

---

##### `scheduleExpression`<sup>Optional</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.scheduleExpression"></a>

- *Type:* java.lang.String

A Cron or Rate expression that specifies when the association is applied to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#schedule_expression SsmAssociation#schedule_expression}

---

##### `scheduleOffset`<sup>Optional</sup> <a name="scheduleOffset" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.scheduleOffset"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#schedule_offset SsmAssociation#schedule_offset}.

---

##### `syncCompliance`<sup>Optional</sup> <a name="syncCompliance" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.syncCompliance"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#sync_compliance SsmAssociation#sync_compliance}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#tags SsmAssociation#tags}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.targets"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>>

The targets that the SSM document sends commands to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#targets SsmAssociation#targets}

---

##### `waitForSuccessTimeoutSeconds`<sup>Optional</sup> <a name="waitForSuccessTimeoutSeconds" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.waitForSuccessTimeoutSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#wait_for_success_timeout_seconds SsmAssociation#wait_for_success_timeout_seconds}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putOutputLocation">putOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetApplyOnlyAtCronInterval">resetApplyOnlyAtCronInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetAssociationDispatchAssumeRole">resetAssociationDispatchAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetAssociationName">resetAssociationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetAutomationTargetParameterName">resetAutomationTargetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetCalendarNames">resetCalendarNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetComplianceSeverity">resetComplianceSeverity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetDocumentVersion">resetDocumentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetMaxConcurrency">resetMaxConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetMaxErrors">resetMaxErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetOutputLocation">resetOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetScheduleExpression">resetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetScheduleOffset">resetScheduleOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetSyncCompliance">resetSyncCompliance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetTargets">resetTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetWaitForSuccessTimeoutSeconds">resetWaitForSuccessTimeoutSeconds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOutputLocation` <a name="putOutputLocation" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putOutputLocation"></a>

```java
public void putOutputLocation(SsmAssociationOutputLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putOutputLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SsmAssociationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>>

---

##### `putTargets` <a name="putTargets" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putTargets"></a>

```java
public void putTargets(IResolvable|java.util.List<SsmAssociationTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putTargets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>>

---

##### `resetApplyOnlyAtCronInterval` <a name="resetApplyOnlyAtCronInterval" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetApplyOnlyAtCronInterval"></a>

```java
public void resetApplyOnlyAtCronInterval()
```

##### `resetAssociationDispatchAssumeRole` <a name="resetAssociationDispatchAssumeRole" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetAssociationDispatchAssumeRole"></a>

```java
public void resetAssociationDispatchAssumeRole()
```

##### `resetAssociationName` <a name="resetAssociationName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetAssociationName"></a>

```java
public void resetAssociationName()
```

##### `resetAutomationTargetParameterName` <a name="resetAutomationTargetParameterName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetAutomationTargetParameterName"></a>

```java
public void resetAutomationTargetParameterName()
```

##### `resetCalendarNames` <a name="resetCalendarNames" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetCalendarNames"></a>

```java
public void resetCalendarNames()
```

##### `resetComplianceSeverity` <a name="resetComplianceSeverity" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetComplianceSeverity"></a>

```java
public void resetComplianceSeverity()
```

##### `resetDocumentVersion` <a name="resetDocumentVersion" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetDocumentVersion"></a>

```java
public void resetDocumentVersion()
```

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetInstanceId"></a>

```java
public void resetInstanceId()
```

##### `resetMaxConcurrency` <a name="resetMaxConcurrency" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetMaxConcurrency"></a>

```java
public void resetMaxConcurrency()
```

##### `resetMaxErrors` <a name="resetMaxErrors" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetMaxErrors"></a>

```java
public void resetMaxErrors()
```

##### `resetOutputLocation` <a name="resetOutputLocation" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetOutputLocation"></a>

```java
public void resetOutputLocation()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetScheduleExpression` <a name="resetScheduleExpression" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetScheduleExpression"></a>

```java
public void resetScheduleExpression()
```

##### `resetScheduleOffset` <a name="resetScheduleOffset" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetScheduleOffset"></a>

```java
public void resetScheduleOffset()
```

##### `resetSyncCompliance` <a name="resetSyncCompliance" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetSyncCompliance"></a>

```java
public void resetSyncCompliance()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetTags"></a>

```java
public void resetTags()
```

##### `resetTargets` <a name="resetTargets" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetTargets"></a>

```java
public void resetTargets()
```

##### `resetWaitForSuccessTimeoutSeconds` <a name="resetWaitForSuccessTimeoutSeconds" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetWaitForSuccessTimeoutSeconds"></a>

```java
public void resetWaitForSuccessTimeoutSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsmAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ssm_association.SsmAssociation;

SsmAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ssm_association.SsmAssociation;

SsmAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ssm_association.SsmAssociation;

SsmAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ssm_association.SsmAssociation;

SsmAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SsmAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SsmAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SsmAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SsmAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SsmAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationId">associationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.outputLocation">outputLocation</a></code> | <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference">SsmAssociationOutputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList">SsmAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList">SsmAssociationTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.applyOnlyAtCronIntervalInput">applyOnlyAtCronIntervalInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationDispatchAssumeRoleInput">associationDispatchAssumeRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationNameInput">associationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.automationTargetParameterNameInput">automationTargetParameterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.calendarNamesInput">calendarNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.complianceSeverityInput">complianceSeverityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.documentVersionInput">documentVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxConcurrencyInput">maxConcurrencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxErrorsInput">maxErrorsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.outputLocationInput">outputLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.parametersInput">parametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleOffsetInput">scheduleOffsetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.syncComplianceInput">syncComplianceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.targetsInput">targetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSecondsInput">waitForSuccessTimeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.applyOnlyAtCronInterval">applyOnlyAtCronInterval</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationDispatchAssumeRole">associationDispatchAssumeRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationName">associationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.automationTargetParameterName">automationTargetParameterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.calendarNames">calendarNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.complianceSeverity">complianceSeverity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.documentVersion">documentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxConcurrency">maxConcurrency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxErrors">maxErrors</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleOffset">scheduleOffset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.syncCompliance">syncCompliance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSeconds">waitForSuccessTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationId"></a>

```java
public java.lang.String getAssociationId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `outputLocation`<sup>Required</sup> <a name="outputLocation" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.outputLocation"></a>

```java
public SsmAssociationOutputLocationOutputReference getOutputLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference">SsmAssociationOutputLocationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.tags"></a>

```java
public SsmAssociationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList">SsmAssociationTagsList</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.targets"></a>

```java
public SsmAssociationTargetsList getTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList">SsmAssociationTargetsList</a>

---

##### `applyOnlyAtCronIntervalInput`<sup>Optional</sup> <a name="applyOnlyAtCronIntervalInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.applyOnlyAtCronIntervalInput"></a>

```java
public java.lang.Boolean|IResolvable getApplyOnlyAtCronIntervalInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `associationDispatchAssumeRoleInput`<sup>Optional</sup> <a name="associationDispatchAssumeRoleInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationDispatchAssumeRoleInput"></a>

```java
public java.lang.String getAssociationDispatchAssumeRoleInput();
```

- *Type:* java.lang.String

---

##### `associationNameInput`<sup>Optional</sup> <a name="associationNameInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationNameInput"></a>

```java
public java.lang.String getAssociationNameInput();
```

- *Type:* java.lang.String

---

##### `automationTargetParameterNameInput`<sup>Optional</sup> <a name="automationTargetParameterNameInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.automationTargetParameterNameInput"></a>

```java
public java.lang.String getAutomationTargetParameterNameInput();
```

- *Type:* java.lang.String

---

##### `calendarNamesInput`<sup>Optional</sup> <a name="calendarNamesInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.calendarNamesInput"></a>

```java
public java.util.List<java.lang.String> getCalendarNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `complianceSeverityInput`<sup>Optional</sup> <a name="complianceSeverityInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.complianceSeverityInput"></a>

```java
public java.lang.String getComplianceSeverityInput();
```

- *Type:* java.lang.String

---

##### `documentVersionInput`<sup>Optional</sup> <a name="documentVersionInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.documentVersionInput"></a>

```java
public java.lang.String getDocumentVersionInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `maxConcurrencyInput`<sup>Optional</sup> <a name="maxConcurrencyInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxConcurrencyInput"></a>

```java
public java.lang.String getMaxConcurrencyInput();
```

- *Type:* java.lang.String

---

##### `maxErrorsInput`<sup>Optional</sup> <a name="maxErrorsInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxErrorsInput"></a>

```java
public java.lang.String getMaxErrorsInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outputLocationInput`<sup>Optional</sup> <a name="outputLocationInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.outputLocationInput"></a>

```java
public IResolvable|SsmAssociationOutputLocation getOutputLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.parametersInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleExpressionInput"></a>

```java
public java.lang.String getScheduleExpressionInput();
```

- *Type:* java.lang.String

---

##### `scheduleOffsetInput`<sup>Optional</sup> <a name="scheduleOffsetInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleOffsetInput"></a>

```java
public java.lang.Number getScheduleOffsetInput();
```

- *Type:* java.lang.Number

---

##### `syncComplianceInput`<sup>Optional</sup> <a name="syncComplianceInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.syncComplianceInput"></a>

```java
public java.lang.String getSyncComplianceInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SsmAssociationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>>

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.targetsInput"></a>

```java
public IResolvable|java.util.List<SsmAssociationTargets> getTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>>

---

##### `waitForSuccessTimeoutSecondsInput`<sup>Optional</sup> <a name="waitForSuccessTimeoutSecondsInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSecondsInput"></a>

```java
public java.lang.Number getWaitForSuccessTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `applyOnlyAtCronInterval`<sup>Required</sup> <a name="applyOnlyAtCronInterval" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.applyOnlyAtCronInterval"></a>

```java
public java.lang.Boolean|IResolvable getApplyOnlyAtCronInterval();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `associationDispatchAssumeRole`<sup>Required</sup> <a name="associationDispatchAssumeRole" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationDispatchAssumeRole"></a>

```java
public java.lang.String getAssociationDispatchAssumeRole();
```

- *Type:* java.lang.String

---

##### `associationName`<sup>Required</sup> <a name="associationName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationName"></a>

```java
public java.lang.String getAssociationName();
```

- *Type:* java.lang.String

---

##### `automationTargetParameterName`<sup>Required</sup> <a name="automationTargetParameterName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.automationTargetParameterName"></a>

```java
public java.lang.String getAutomationTargetParameterName();
```

- *Type:* java.lang.String

---

##### `calendarNames`<sup>Required</sup> <a name="calendarNames" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.calendarNames"></a>

```java
public java.util.List<java.lang.String> getCalendarNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `complianceSeverity`<sup>Required</sup> <a name="complianceSeverity" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.complianceSeverity"></a>

```java
public java.lang.String getComplianceSeverity();
```

- *Type:* java.lang.String

---

##### `documentVersion`<sup>Required</sup> <a name="documentVersion" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.documentVersion"></a>

```java
public java.lang.String getDocumentVersion();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxConcurrency"></a>

```java
public java.lang.String getMaxConcurrency();
```

- *Type:* java.lang.String

---

##### `maxErrors`<sup>Required</sup> <a name="maxErrors" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxErrors"></a>

```java
public java.lang.String getMaxErrors();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.parameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

---

##### `scheduleOffset`<sup>Required</sup> <a name="scheduleOffset" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleOffset"></a>

```java
public java.lang.Number getScheduleOffset();
```

- *Type:* java.lang.Number

---

##### `syncCompliance`<sup>Required</sup> <a name="syncCompliance" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.syncCompliance"></a>

```java
public java.lang.String getSyncCompliance();
```

- *Type:* java.lang.String

---

##### `waitForSuccessTimeoutSeconds`<sup>Required</sup> <a name="waitForSuccessTimeoutSeconds" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSeconds"></a>

```java
public java.lang.Number getWaitForSuccessTimeoutSeconds();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SsmAssociationConfig <a name="SsmAssociationConfig" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_association.SsmAssociationConfig;

SsmAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .applyOnlyAtCronInterval(java.lang.Boolean|IResolvable)
//  .associationDispatchAssumeRole(java.lang.String)
//  .associationName(java.lang.String)
//  .automationTargetParameterName(java.lang.String)
//  .calendarNames(java.util.List<java.lang.String>)
//  .complianceSeverity(java.lang.String)
//  .documentVersion(java.lang.String)
//  .instanceId(java.lang.String)
//  .maxConcurrency(java.lang.String)
//  .maxErrors(java.lang.String)
//  .outputLocation(SsmAssociationOutputLocation)
//  .parameters(IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>)
//  .scheduleExpression(java.lang.String)
//  .scheduleOffset(java.lang.Number)
//  .syncCompliance(java.lang.String)
//  .tags(IResolvable|java.util.List<SsmAssociationTags>)
//  .targets(IResolvable|java.util.List<SsmAssociationTargets>)
//  .waitForSuccessTimeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the SSM document. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.applyOnlyAtCronInterval">applyOnlyAtCronInterval</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.associationDispatchAssumeRole">associationDispatchAssumeRole</a></code> | <code>java.lang.String</code> | A role used by association to take actions on your behalf. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.associationName">associationName</a></code> | <code>java.lang.String</code> | The name of the association. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.automationTargetParameterName">automationTargetParameterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.calendarNames">calendarNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#calendar_names SsmAssociation#calendar_names}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.complianceSeverity">complianceSeverity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#compliance_severity SsmAssociation#compliance_severity}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.documentVersion">documentVersion</a></code> | <code>java.lang.String</code> | The version of the SSM document to associate with the target. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The ID of the instance that the SSM document is associated with. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.maxConcurrency">maxConcurrency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#max_concurrency SsmAssociation#max_concurrency}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.maxErrors">maxErrors</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#max_errors SsmAssociation#max_errors}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.outputLocation">outputLocation</a></code> | <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_location SsmAssociation#output_location}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, java.util.List<java.lang.String>></code> | Parameter values that the SSM document uses at runtime. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.scheduleExpression">scheduleExpression</a></code> | <code>java.lang.String</code> | A Cron or Rate expression that specifies when the association is applied to the target. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.scheduleOffset">scheduleOffset</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#schedule_offset SsmAssociation#schedule_offset}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.syncCompliance">syncCompliance</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#sync_compliance SsmAssociation#sync_compliance}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>></code> | A key-value pair to associate with a resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.targets">targets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>></code> | The targets that the SSM document sends commands to. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.waitForSuccessTimeoutSeconds">waitForSuccessTimeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#wait_for_success_timeout_seconds SsmAssociation#wait_for_success_timeout_seconds}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the SSM document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#name SsmAssociation#name}

---

##### `applyOnlyAtCronInterval`<sup>Optional</sup> <a name="applyOnlyAtCronInterval" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.applyOnlyAtCronInterval"></a>

```java
public java.lang.Boolean|IResolvable getApplyOnlyAtCronInterval();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}.

---

##### `associationDispatchAssumeRole`<sup>Optional</sup> <a name="associationDispatchAssumeRole" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.associationDispatchAssumeRole"></a>

```java
public java.lang.String getAssociationDispatchAssumeRole();
```

- *Type:* java.lang.String

A role used by association to take actions on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#association_dispatch_assume_role SsmAssociation#association_dispatch_assume_role}

---

##### `associationName`<sup>Optional</sup> <a name="associationName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.associationName"></a>

```java
public java.lang.String getAssociationName();
```

- *Type:* java.lang.String

The name of the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#association_name SsmAssociation#association_name}

---

##### `automationTargetParameterName`<sup>Optional</sup> <a name="automationTargetParameterName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.automationTargetParameterName"></a>

```java
public java.lang.String getAutomationTargetParameterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}.

---

##### `calendarNames`<sup>Optional</sup> <a name="calendarNames" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.calendarNames"></a>

```java
public java.util.List<java.lang.String> getCalendarNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#calendar_names SsmAssociation#calendar_names}.

---

##### `complianceSeverity`<sup>Optional</sup> <a name="complianceSeverity" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.complianceSeverity"></a>

```java
public java.lang.String getComplianceSeverity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#compliance_severity SsmAssociation#compliance_severity}.

---

##### `documentVersion`<sup>Optional</sup> <a name="documentVersion" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.documentVersion"></a>

```java
public java.lang.String getDocumentVersion();
```

- *Type:* java.lang.String

The version of the SSM document to associate with the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#document_version SsmAssociation#document_version}

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

The ID of the instance that the SSM document is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#instance_id SsmAssociation#instance_id}

---

##### `maxConcurrency`<sup>Optional</sup> <a name="maxConcurrency" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.maxConcurrency"></a>

```java
public java.lang.String getMaxConcurrency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#max_concurrency SsmAssociation#max_concurrency}.

---

##### `maxErrors`<sup>Optional</sup> <a name="maxErrors" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.maxErrors"></a>

```java
public java.lang.String getMaxErrors();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#max_errors SsmAssociation#max_errors}.

---

##### `outputLocation`<sup>Optional</sup> <a name="outputLocation" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.outputLocation"></a>

```java
public SsmAssociationOutputLocation getOutputLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_location SsmAssociation#output_location}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.parameters"></a>

```java
public IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>> getParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, java.util.List<java.lang.String>>

Parameter values that the SSM document uses at runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#parameters SsmAssociation#parameters}

---

##### `scheduleExpression`<sup>Optional</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.scheduleExpression"></a>

```java
public java.lang.String getScheduleExpression();
```

- *Type:* java.lang.String

A Cron or Rate expression that specifies when the association is applied to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#schedule_expression SsmAssociation#schedule_expression}

---

##### `scheduleOffset`<sup>Optional</sup> <a name="scheduleOffset" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.scheduleOffset"></a>

```java
public java.lang.Number getScheduleOffset();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#schedule_offset SsmAssociation#schedule_offset}.

---

##### `syncCompliance`<sup>Optional</sup> <a name="syncCompliance" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.syncCompliance"></a>

```java
public java.lang.String getSyncCompliance();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#sync_compliance SsmAssociation#sync_compliance}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SsmAssociationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#tags SsmAssociation#tags}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.targets"></a>

```java
public IResolvable|java.util.List<SsmAssociationTargets> getTargets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>>

The targets that the SSM document sends commands to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#targets SsmAssociation#targets}

---

##### `waitForSuccessTimeoutSeconds`<sup>Optional</sup> <a name="waitForSuccessTimeoutSeconds" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.waitForSuccessTimeoutSeconds"></a>

```java
public java.lang.Number getWaitForSuccessTimeoutSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#wait_for_success_timeout_seconds SsmAssociation#wait_for_success_timeout_seconds}.

---

### SsmAssociationOutputLocation <a name="SsmAssociationOutputLocation" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_association.SsmAssociationOutputLocation;

SsmAssociationOutputLocation.builder()
//  .s3Location(SsmAssociationOutputLocationS3Location)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location">SsmAssociationOutputLocationS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#s3_location SsmAssociation#s3_location}. |

---

##### `s3Location`<sup>Optional</sup> <a name="s3Location" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation.property.s3Location"></a>

```java
public SsmAssociationOutputLocationS3Location getS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location">SsmAssociationOutputLocationS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#s3_location SsmAssociation#s3_location}.

---

### SsmAssociationOutputLocationS3Location <a name="SsmAssociationOutputLocationS3Location" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_association.SsmAssociationOutputLocationS3Location;

SsmAssociationOutputLocationS3Location.builder()
//  .outputS3BucketName(java.lang.String)
//  .outputS3KeyPrefix(java.lang.String)
//  .outputS3Region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location.property.outputS3BucketName">outputS3BucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_s3_bucket_name SsmAssociation#output_s3_bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location.property.outputS3KeyPrefix">outputS3KeyPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_s3_key_prefix SsmAssociation#output_s3_key_prefix}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location.property.outputS3Region">outputS3Region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_s3_region SsmAssociation#output_s3_region}. |

---

##### `outputS3BucketName`<sup>Optional</sup> <a name="outputS3BucketName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location.property.outputS3BucketName"></a>

```java
public java.lang.String getOutputS3BucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_s3_bucket_name SsmAssociation#output_s3_bucket_name}.

---

##### `outputS3KeyPrefix`<sup>Optional</sup> <a name="outputS3KeyPrefix" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location.property.outputS3KeyPrefix"></a>

```java
public java.lang.String getOutputS3KeyPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_s3_key_prefix SsmAssociation#output_s3_key_prefix}.

---

##### `outputS3Region`<sup>Optional</sup> <a name="outputS3Region" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location.property.outputS3Region"></a>

```java
public java.lang.String getOutputS3Region();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_s3_region SsmAssociation#output_s3_region}.

---

### SsmAssociationTags <a name="SsmAssociationTags" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_association.SsmAssociationTags;

SsmAssociationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags.property.key">key</a></code> | <code>java.lang.String</code> | The name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#key SsmAssociation#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#value SsmAssociation#value}

---

### SsmAssociationTargets <a name="SsmAssociationTargets" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_association.SsmAssociationTargets;

SsmAssociationTargets.builder()
//  .key(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#key SsmAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#values SsmAssociation#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#key SsmAssociation#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#values SsmAssociation#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmAssociationOutputLocationOutputReference <a name="SsmAssociationOutputLocationOutputReference" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_association.SsmAssociationOutputLocationOutputReference;

new SsmAssociationOutputLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.putS3Location">putS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.resetS3Location">resetS3Location</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Location` <a name="putS3Location" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.putS3Location"></a>

```java
public void putS3Location(SsmAssociationOutputLocationS3Location value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.putS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location">SsmAssociationOutputLocationS3Location</a>

---

##### `resetS3Location` <a name="resetS3Location" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.resetS3Location"></a>

```java
public void resetS3Location()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference">SsmAssociationOutputLocationS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3LocationInput">s3LocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location">SsmAssociationOutputLocationS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3Location`<sup>Required</sup> <a name="s3Location" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3Location"></a>

```java
public SsmAssociationOutputLocationS3LocationOutputReference getS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference">SsmAssociationOutputLocationS3LocationOutputReference</a>

---

##### `s3LocationInput`<sup>Optional</sup> <a name="s3LocationInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3LocationInput"></a>

```java
public IResolvable|SsmAssociationOutputLocationS3Location getS3LocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location">SsmAssociationOutputLocationS3Location</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmAssociationOutputLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

---


### SsmAssociationOutputLocationS3LocationOutputReference <a name="SsmAssociationOutputLocationS3LocationOutputReference" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_association.SsmAssociationOutputLocationS3LocationOutputReference;

new SsmAssociationOutputLocationS3LocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resetOutputS3BucketName">resetOutputS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resetOutputS3KeyPrefix">resetOutputS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resetOutputS3Region">resetOutputS3Region</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOutputS3BucketName` <a name="resetOutputS3BucketName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resetOutputS3BucketName"></a>

```java
public void resetOutputS3BucketName()
```

##### `resetOutputS3KeyPrefix` <a name="resetOutputS3KeyPrefix" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resetOutputS3KeyPrefix"></a>

```java
public void resetOutputS3KeyPrefix()
```

##### `resetOutputS3Region` <a name="resetOutputS3Region" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resetOutputS3Region"></a>

```java
public void resetOutputS3Region()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3BucketNameInput">outputS3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3KeyPrefixInput">outputS3KeyPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3RegionInput">outputS3RegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3BucketName">outputS3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3KeyPrefix">outputS3KeyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3Region">outputS3Region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location">SsmAssociationOutputLocationS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outputS3BucketNameInput`<sup>Optional</sup> <a name="outputS3BucketNameInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3BucketNameInput"></a>

```java
public java.lang.String getOutputS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `outputS3KeyPrefixInput`<sup>Optional</sup> <a name="outputS3KeyPrefixInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3KeyPrefixInput"></a>

```java
public java.lang.String getOutputS3KeyPrefixInput();
```

- *Type:* java.lang.String

---

##### `outputS3RegionInput`<sup>Optional</sup> <a name="outputS3RegionInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3RegionInput"></a>

```java
public java.lang.String getOutputS3RegionInput();
```

- *Type:* java.lang.String

---

##### `outputS3BucketName`<sup>Required</sup> <a name="outputS3BucketName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3BucketName"></a>

```java
public java.lang.String getOutputS3BucketName();
```

- *Type:* java.lang.String

---

##### `outputS3KeyPrefix`<sup>Required</sup> <a name="outputS3KeyPrefix" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3KeyPrefix"></a>

```java
public java.lang.String getOutputS3KeyPrefix();
```

- *Type:* java.lang.String

---

##### `outputS3Region`<sup>Required</sup> <a name="outputS3Region" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3Region"></a>

```java
public java.lang.String getOutputS3Region();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmAssociationOutputLocationS3Location getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location">SsmAssociationOutputLocationS3Location</a>

---


### SsmAssociationTagsList <a name="SsmAssociationTagsList" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_association.SsmAssociationTagsList;

new SsmAssociationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.get"></a>

```java
public SsmAssociationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmAssociationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>>

---


### SsmAssociationTagsOutputReference <a name="SsmAssociationTagsOutputReference" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_association.SsmAssociationTagsOutputReference;

new SsmAssociationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmAssociationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>

---


### SsmAssociationTargetsList <a name="SsmAssociationTargetsList" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_association.SsmAssociationTargetsList;

new SsmAssociationTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.get"></a>

```java
public SsmAssociationTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmAssociationTargets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>>

---


### SsmAssociationTargetsOutputReference <a name="SsmAssociationTargetsOutputReference" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssm_association.SsmAssociationTargetsOutputReference;

new SsmAssociationTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmAssociationTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>

---



