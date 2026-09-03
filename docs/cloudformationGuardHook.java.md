# `cloudformationGuardHook` Submodule <a name="`cloudformationGuardHook` Submodule" id="@cdktn/provider-awscc.cloudformationGuardHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationGuardHook <a name="CloudformationGuardHook" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook awscc_cloudformation_guard_hook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_guard_hook.CloudformationGuardHook;

CloudformationGuardHook.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .alias(java.lang.String)
    .executionRole(java.lang.String)
    .ruleLocation(CloudformationGuardHookRuleLocation)
    .targetOperations(java.util.List<java.lang.String>)
//  .failureMode(java.lang.String)
//  .hookStatus(java.lang.String)
//  .logBucket(java.lang.String)
//  .options(CloudformationGuardHookOptions)
//  .stackFilters(CloudformationGuardHookStackFilters)
//  .targetFilters(CloudformationGuardHookTargetFilters)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | The typename alias for the hook. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.executionRole">executionRole</a></code> | <code>java.lang.String</code> | The execution role ARN assumed by hooks to read Guard rules from S3 and write Guard outputs to S3. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.ruleLocation">ruleLocation</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a></code> | S3 Source Location for the Guard files. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.targetOperations">targetOperations</a></code> | <code>java.util.List<java.lang.String></code> | Which operations should this Hook run against? Resource changes, stacks or change sets. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.failureMode">failureMode</a></code> | <code>java.lang.String</code> | Attribute to specify CloudFormation behavior on hook failure. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.hookStatus">hookStatus</a></code> | <code>java.lang.String</code> | Attribute to specify which stacks this hook applies to or should get invoked for. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.logBucket">logBucket</a></code> | <code>java.lang.String</code> | S3 Bucket where the guard validate report will be uploaded to. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#options CloudformationGuardHook#options}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.stackFilters">stackFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a></code> | Filters to allow hooks to target specific stack attributes. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.targetFilters">targetFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a></code> | Attribute to specify which targets should invoke the hook. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

The typename alias for the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#alias CloudformationGuardHook#alias}

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.executionRole"></a>

- *Type:* java.lang.String

The execution role ARN assumed by hooks to read Guard rules from S3 and write Guard outputs to S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#execution_role CloudformationGuardHook#execution_role}

---

##### `ruleLocation`<sup>Required</sup> <a name="ruleLocation" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.ruleLocation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a>

S3 Source Location for the Guard files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#rule_location CloudformationGuardHook#rule_location}

---

##### `targetOperations`<sup>Required</sup> <a name="targetOperations" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.targetOperations"></a>

- *Type:* java.util.List<java.lang.String>

Which operations should this Hook run against? Resource changes, stacks or change sets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#target_operations CloudformationGuardHook#target_operations}

---

##### `failureMode`<sup>Optional</sup> <a name="failureMode" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.failureMode"></a>

- *Type:* java.lang.String

Attribute to specify CloudFormation behavior on hook failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#failure_mode CloudformationGuardHook#failure_mode}

---

##### `hookStatus`<sup>Optional</sup> <a name="hookStatus" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.hookStatus"></a>

- *Type:* java.lang.String

Attribute to specify which stacks this hook applies to or should get invoked for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#hook_status CloudformationGuardHook#hook_status}

---

##### `logBucket`<sup>Optional</sup> <a name="logBucket" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.logBucket"></a>

- *Type:* java.lang.String

S3 Bucket where the guard validate report will be uploaded to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#log_bucket CloudformationGuardHook#log_bucket}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.options"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#options CloudformationGuardHook#options}.

---

##### `stackFilters`<sup>Optional</sup> <a name="stackFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.stackFilters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a>

Filters to allow hooks to target specific stack attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#stack_filters CloudformationGuardHook#stack_filters}

---

##### `targetFilters`<sup>Optional</sup> <a name="targetFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.targetFilters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a>

Attribute to specify which targets should invoke the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#target_filters CloudformationGuardHook#target_filters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putRuleLocation">putRuleLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putStackFilters">putStackFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putTargetFilters">putTargetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetFailureMode">resetFailureMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetHookStatus">resetHookStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetLogBucket">resetLogBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetStackFilters">resetStackFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetTargetFilters">resetTargetFilters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOptions` <a name="putOptions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putOptions"></a>

```java
public void putOptions(CloudformationGuardHookOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a>

---

##### `putRuleLocation` <a name="putRuleLocation" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putRuleLocation"></a>

```java
public void putRuleLocation(CloudformationGuardHookRuleLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putRuleLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a>

---

##### `putStackFilters` <a name="putStackFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putStackFilters"></a>

```java
public void putStackFilters(CloudformationGuardHookStackFilters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putStackFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a>

---

##### `putTargetFilters` <a name="putTargetFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putTargetFilters"></a>

```java
public void putTargetFilters(CloudformationGuardHookTargetFilters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putTargetFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a>

---

##### `resetFailureMode` <a name="resetFailureMode" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetFailureMode"></a>

```java
public void resetFailureMode()
```

##### `resetHookStatus` <a name="resetHookStatus" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetHookStatus"></a>

```java
public void resetHookStatus()
```

##### `resetLogBucket` <a name="resetLogBucket" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetLogBucket"></a>

```java
public void resetLogBucket()
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetStackFilters` <a name="resetStackFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetStackFilters"></a>

```java
public void resetStackFilters()
```

##### `resetTargetFilters` <a name="resetTargetFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetTargetFilters"></a>

```java
public void resetTargetFilters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationGuardHook resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudformation_guard_hook.CloudformationGuardHook;

CloudformationGuardHook.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudformation_guard_hook.CloudformationGuardHook;

CloudformationGuardHook.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudformation_guard_hook.CloudformationGuardHook;

CloudformationGuardHook.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudformation_guard_hook.CloudformationGuardHook;

CloudformationGuardHook.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudformationGuardHook.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudformationGuardHook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudformationGuardHook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudformationGuardHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationGuardHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookArn">hookArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference">CloudformationGuardHookOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.ruleLocation">ruleLocation</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference">CloudformationGuardHookRuleLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.stackFilters">stackFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference">CloudformationGuardHookStackFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetFilters">targetFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference">CloudformationGuardHookTargetFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.executionRoleInput">executionRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.failureModeInput">failureModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookStatusInput">hookStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.logBucketInput">logBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.optionsInput">optionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.ruleLocationInput">ruleLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.stackFiltersInput">stackFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetFiltersInput">targetFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetOperationsInput">targetOperationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.failureMode">failureMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookStatus">hookStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.logBucket">logBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetOperations">targetOperations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `hookArn`<sup>Required</sup> <a name="hookArn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookArn"></a>

```java
public java.lang.String getHookArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.options"></a>

```java
public CloudformationGuardHookOptionsOutputReference getOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference">CloudformationGuardHookOptionsOutputReference</a>

---

##### `ruleLocation`<sup>Required</sup> <a name="ruleLocation" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.ruleLocation"></a>

```java
public CloudformationGuardHookRuleLocationOutputReference getRuleLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference">CloudformationGuardHookRuleLocationOutputReference</a>

---

##### `stackFilters`<sup>Required</sup> <a name="stackFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.stackFilters"></a>

```java
public CloudformationGuardHookStackFiltersOutputReference getStackFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference">CloudformationGuardHookStackFiltersOutputReference</a>

---

##### `targetFilters`<sup>Required</sup> <a name="targetFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetFilters"></a>

```java
public CloudformationGuardHookTargetFiltersOutputReference getTargetFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference">CloudformationGuardHookTargetFiltersOutputReference</a>

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.executionRoleInput"></a>

```java
public java.lang.String getExecutionRoleInput();
```

- *Type:* java.lang.String

---

##### `failureModeInput`<sup>Optional</sup> <a name="failureModeInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.failureModeInput"></a>

```java
public java.lang.String getFailureModeInput();
```

- *Type:* java.lang.String

---

##### `hookStatusInput`<sup>Optional</sup> <a name="hookStatusInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookStatusInput"></a>

```java
public java.lang.String getHookStatusInput();
```

- *Type:* java.lang.String

---

##### `logBucketInput`<sup>Optional</sup> <a name="logBucketInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.logBucketInput"></a>

```java
public java.lang.String getLogBucketInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.optionsInput"></a>

```java
public IResolvable|CloudformationGuardHookOptions getOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a>

---

##### `ruleLocationInput`<sup>Optional</sup> <a name="ruleLocationInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.ruleLocationInput"></a>

```java
public IResolvable|CloudformationGuardHookRuleLocation getRuleLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a>

---

##### `stackFiltersInput`<sup>Optional</sup> <a name="stackFiltersInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.stackFiltersInput"></a>

```java
public IResolvable|CloudformationGuardHookStackFilters getStackFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a>

---

##### `targetFiltersInput`<sup>Optional</sup> <a name="targetFiltersInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetFiltersInput"></a>

```java
public IResolvable|CloudformationGuardHookTargetFilters getTargetFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a>

---

##### `targetOperationsInput`<sup>Optional</sup> <a name="targetOperationsInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetOperationsInput"></a>

```java
public java.util.List<java.lang.String> getTargetOperationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

---

##### `failureMode`<sup>Required</sup> <a name="failureMode" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.failureMode"></a>

```java
public java.lang.String getFailureMode();
```

- *Type:* java.lang.String

---

##### `hookStatus`<sup>Required</sup> <a name="hookStatus" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookStatus"></a>

```java
public java.lang.String getHookStatus();
```

- *Type:* java.lang.String

---

##### `logBucket`<sup>Required</sup> <a name="logBucket" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.logBucket"></a>

```java
public java.lang.String getLogBucket();
```

- *Type:* java.lang.String

---

##### `targetOperations`<sup>Required</sup> <a name="targetOperations" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetOperations"></a>

```java
public java.util.List<java.lang.String> getTargetOperations();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationGuardHookConfig <a name="CloudformationGuardHookConfig" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_guard_hook.CloudformationGuardHookConfig;

CloudformationGuardHookConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .alias(java.lang.String)
    .executionRole(java.lang.String)
    .ruleLocation(CloudformationGuardHookRuleLocation)
    .targetOperations(java.util.List<java.lang.String>)
//  .failureMode(java.lang.String)
//  .hookStatus(java.lang.String)
//  .logBucket(java.lang.String)
//  .options(CloudformationGuardHookOptions)
//  .stackFilters(CloudformationGuardHookStackFilters)
//  .targetFilters(CloudformationGuardHookTargetFilters)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | The typename alias for the hook. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.executionRole">executionRole</a></code> | <code>java.lang.String</code> | The execution role ARN assumed by hooks to read Guard rules from S3 and write Guard outputs to S3. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.ruleLocation">ruleLocation</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a></code> | S3 Source Location for the Guard files. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.targetOperations">targetOperations</a></code> | <code>java.util.List<java.lang.String></code> | Which operations should this Hook run against? Resource changes, stacks or change sets. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.failureMode">failureMode</a></code> | <code>java.lang.String</code> | Attribute to specify CloudFormation behavior on hook failure. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.hookStatus">hookStatus</a></code> | <code>java.lang.String</code> | Attribute to specify which stacks this hook applies to or should get invoked for. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.logBucket">logBucket</a></code> | <code>java.lang.String</code> | S3 Bucket where the guard validate report will be uploaded to. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#options CloudformationGuardHook#options}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.stackFilters">stackFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a></code> | Filters to allow hooks to target specific stack attributes. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.targetFilters">targetFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a></code> | Attribute to specify which targets should invoke the hook. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

The typename alias for the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#alias CloudformationGuardHook#alias}

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.executionRole"></a>

```java
public java.lang.String getExecutionRole();
```

- *Type:* java.lang.String

The execution role ARN assumed by hooks to read Guard rules from S3 and write Guard outputs to S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#execution_role CloudformationGuardHook#execution_role}

---

##### `ruleLocation`<sup>Required</sup> <a name="ruleLocation" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.ruleLocation"></a>

```java
public CloudformationGuardHookRuleLocation getRuleLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a>

S3 Source Location for the Guard files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#rule_location CloudformationGuardHook#rule_location}

---

##### `targetOperations`<sup>Required</sup> <a name="targetOperations" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.targetOperations"></a>

```java
public java.util.List<java.lang.String> getTargetOperations();
```

- *Type:* java.util.List<java.lang.String>

Which operations should this Hook run against? Resource changes, stacks or change sets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#target_operations CloudformationGuardHook#target_operations}

---

##### `failureMode`<sup>Optional</sup> <a name="failureMode" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.failureMode"></a>

```java
public java.lang.String getFailureMode();
```

- *Type:* java.lang.String

Attribute to specify CloudFormation behavior on hook failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#failure_mode CloudformationGuardHook#failure_mode}

---

##### `hookStatus`<sup>Optional</sup> <a name="hookStatus" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.hookStatus"></a>

```java
public java.lang.String getHookStatus();
```

- *Type:* java.lang.String

Attribute to specify which stacks this hook applies to or should get invoked for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#hook_status CloudformationGuardHook#hook_status}

---

##### `logBucket`<sup>Optional</sup> <a name="logBucket" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.logBucket"></a>

```java
public java.lang.String getLogBucket();
```

- *Type:* java.lang.String

S3 Bucket where the guard validate report will be uploaded to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#log_bucket CloudformationGuardHook#log_bucket}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.options"></a>

```java
public CloudformationGuardHookOptions getOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#options CloudformationGuardHook#options}.

---

##### `stackFilters`<sup>Optional</sup> <a name="stackFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.stackFilters"></a>

```java
public CloudformationGuardHookStackFilters getStackFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a>

Filters to allow hooks to target specific stack attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#stack_filters CloudformationGuardHook#stack_filters}

---

##### `targetFilters`<sup>Optional</sup> <a name="targetFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.targetFilters"></a>

```java
public CloudformationGuardHookTargetFilters getTargetFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a>

Attribute to specify which targets should invoke the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#target_filters CloudformationGuardHook#target_filters}

---

### CloudformationGuardHookOptions <a name="CloudformationGuardHookOptions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_guard_hook.CloudformationGuardHookOptions;

CloudformationGuardHookOptions.builder()
//  .inputParams(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions.property.inputParams">inputParams</a></code> | <code>java.lang.String</code> | Specifies the S3 location of input parameter files for your Guard rules. |

---

##### `inputParams`<sup>Optional</sup> <a name="inputParams" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions.property.inputParams"></a>

```java
public java.lang.String getInputParams();
```

- *Type:* java.lang.String

Specifies the S3 location of input parameter files for your Guard rules.

You can specify either a single S3 location or an array of up to 10 S3 locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#input_params CloudformationGuardHook#input_params}

---

### CloudformationGuardHookRuleLocation <a name="CloudformationGuardHookRuleLocation" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_guard_hook.CloudformationGuardHookRuleLocation;

CloudformationGuardHookRuleLocation.builder()
    .uri(java.lang.String)
//  .versionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation.property.uri">uri</a></code> | <code>java.lang.String</code> | S3 uri of Guard files. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation.property.versionId">versionId</a></code> | <code>java.lang.String</code> | S3 object version. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

S3 uri of Guard files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#uri CloudformationGuardHook#uri}

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

S3 object version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#version_id CloudformationGuardHook#version_id}

---

### CloudformationGuardHookStackFilters <a name="CloudformationGuardHookStackFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_guard_hook.CloudformationGuardHookStackFilters;

CloudformationGuardHookStackFilters.builder()
//  .filteringCriteria(java.lang.String)
//  .stackNames(CloudformationGuardHookStackFiltersStackNames)
//  .stackRoles(CloudformationGuardHookStackFiltersStackRoles)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.filteringCriteria">filteringCriteria</a></code> | <code>java.lang.String</code> | Attribute to specify the filtering behavior. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.stackNames">stackNames</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a></code> | List of stack names as filters. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.stackRoles">stackRoles</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a></code> | List of stack roles that are performing the stack operations. |

---

##### `filteringCriteria`<sup>Optional</sup> <a name="filteringCriteria" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.filteringCriteria"></a>

```java
public java.lang.String getFilteringCriteria();
```

- *Type:* java.lang.String

Attribute to specify the filtering behavior.

ANY will make the Hook pass if one filter matches. ALL will make the Hook pass if all filters match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#filtering_criteria CloudformationGuardHook#filtering_criteria}

---

##### `stackNames`<sup>Optional</sup> <a name="stackNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.stackNames"></a>

```java
public CloudformationGuardHookStackFiltersStackNames getStackNames();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a>

List of stack names as filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#stack_names CloudformationGuardHook#stack_names}

---

##### `stackRoles`<sup>Optional</sup> <a name="stackRoles" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.stackRoles"></a>

```java
public CloudformationGuardHookStackFiltersStackRoles getStackRoles();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a>

List of stack roles that are performing the stack operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#stack_roles CloudformationGuardHook#stack_roles}

---

### CloudformationGuardHookStackFiltersStackNames <a name="CloudformationGuardHookStackFiltersStackNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_guard_hook.CloudformationGuardHookStackFiltersStackNames;

CloudformationGuardHookStackFiltersStackNames.builder()
//  .exclude(java.util.List<java.lang.String>)
//  .include(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames.property.exclude">exclude</a></code> | <code>java.util.List<java.lang.String></code> | List of stack names that the hook is going to be excluded from. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | List of stack names that the hook is going to target. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames.property.exclude"></a>

```java
public java.util.List<java.lang.String> getExclude();
```

- *Type:* java.util.List<java.lang.String>

List of stack names that the hook is going to be excluded from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#exclude CloudformationGuardHook#exclude}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

List of stack names that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#include CloudformationGuardHook#include}

---

### CloudformationGuardHookStackFiltersStackRoles <a name="CloudformationGuardHookStackFiltersStackRoles" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_guard_hook.CloudformationGuardHookStackFiltersStackRoles;

CloudformationGuardHookStackFiltersStackRoles.builder()
//  .exclude(java.util.List<java.lang.String>)
//  .include(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles.property.exclude">exclude</a></code> | <code>java.util.List<java.lang.String></code> | List of stack roles that the hook is going to be excluded from. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | List of stack roles that the hook is going to target. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles.property.exclude"></a>

```java
public java.util.List<java.lang.String> getExclude();
```

- *Type:* java.util.List<java.lang.String>

List of stack roles that the hook is going to be excluded from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#exclude CloudformationGuardHook#exclude}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

List of stack roles that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#include CloudformationGuardHook#include}

---

### CloudformationGuardHookTargetFilters <a name="CloudformationGuardHookTargetFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_guard_hook.CloudformationGuardHookTargetFilters;

CloudformationGuardHookTargetFilters.builder()
//  .actions(java.util.List<java.lang.String>)
//  .invocationPoints(java.util.List<java.lang.String>)
//  .targetNames(java.util.List<java.lang.String>)
//  .targets(IResolvable|java.util.List<CloudformationGuardHookTargetFiltersTargets>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | List of actions that the hook is going to target. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.invocationPoints">invocationPoints</a></code> | <code>java.util.List<java.lang.String></code> | List of invocation points that the hook is going to target. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.targetNames">targetNames</a></code> | <code>java.util.List<java.lang.String></code> | List of type names that the hook is going to target. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.targets">targets</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>></code> | List of hook targets. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

List of actions that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#actions CloudformationGuardHook#actions}

---

##### `invocationPoints`<sup>Optional</sup> <a name="invocationPoints" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.invocationPoints"></a>

```java
public java.util.List<java.lang.String> getInvocationPoints();
```

- *Type:* java.util.List<java.lang.String>

List of invocation points that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#invocation_points CloudformationGuardHook#invocation_points}

---

##### `targetNames`<sup>Optional</sup> <a name="targetNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.targetNames"></a>

```java
public java.util.List<java.lang.String> getTargetNames();
```

- *Type:* java.util.List<java.lang.String>

List of type names that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#target_names CloudformationGuardHook#target_names}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.targets"></a>

```java
public IResolvable|java.util.List<CloudformationGuardHookTargetFiltersTargets> getTargets();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>>

List of hook targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#targets CloudformationGuardHook#targets}

---

### CloudformationGuardHookTargetFiltersTargets <a name="CloudformationGuardHookTargetFiltersTargets" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_guard_hook.CloudformationGuardHookTargetFiltersTargets;

CloudformationGuardHookTargetFiltersTargets.builder()
//  .action(java.lang.String)
//  .invocationPoint(java.lang.String)
//  .targetName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.action">action</a></code> | <code>java.lang.String</code> | Target actions are the type of operation hooks will be executed at. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.invocationPoint">invocationPoint</a></code> | <code>java.lang.String</code> | Invocation points are the point in provisioning workflow where hooks will be executed. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.targetName">targetName</a></code> | <code>java.lang.String</code> | Type name of hook target. Hook targets are the destination where hooks will be invoked against. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Target actions are the type of operation hooks will be executed at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#action CloudformationGuardHook#action}

---

##### `invocationPoint`<sup>Optional</sup> <a name="invocationPoint" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.invocationPoint"></a>

```java
public java.lang.String getInvocationPoint();
```

- *Type:* java.lang.String

Invocation points are the point in provisioning workflow where hooks will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#invocation_point CloudformationGuardHook#invocation_point}

---

##### `targetName`<sup>Optional</sup> <a name="targetName" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.targetName"></a>

```java
public java.lang.String getTargetName();
```

- *Type:* java.lang.String

Type name of hook target. Hook targets are the destination where hooks will be invoked against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_guard_hook#target_name CloudformationGuardHook#target_name}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationGuardHookOptionsOutputReference <a name="CloudformationGuardHookOptionsOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_guard_hook.CloudformationGuardHookOptionsOutputReference;

new CloudformationGuardHookOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.resetInputParams">resetInputParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputParams` <a name="resetInputParams" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.resetInputParams"></a>

```java
public void resetInputParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.inputParamsInput">inputParamsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.inputParams">inputParams</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputParamsInput`<sup>Optional</sup> <a name="inputParamsInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.inputParamsInput"></a>

```java
public java.lang.String getInputParamsInput();
```

- *Type:* java.lang.String

---

##### `inputParams`<sup>Required</sup> <a name="inputParams" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.inputParams"></a>

```java
public java.lang.String getInputParams();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudformationGuardHookOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a>

---


### CloudformationGuardHookRuleLocationOutputReference <a name="CloudformationGuardHookRuleLocationOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_guard_hook.CloudformationGuardHookRuleLocationOutputReference;

new CloudformationGuardHookRuleLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.resetVersionId">resetVersionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersionId` <a name="resetVersionId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.resetVersionId"></a>

```java
public void resetVersionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.versionIdInput">versionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.versionIdInput"></a>

```java
public java.lang.String getVersionIdInput();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudformationGuardHookRuleLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a>

---


### CloudformationGuardHookStackFiltersOutputReference <a name="CloudformationGuardHookStackFiltersOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_guard_hook.CloudformationGuardHookStackFiltersOutputReference;

new CloudformationGuardHookStackFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackNames">putStackNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackRoles">putStackRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetFilteringCriteria">resetFilteringCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetStackNames">resetStackNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetStackRoles">resetStackRoles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStackNames` <a name="putStackNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackNames"></a>

```java
public void putStackNames(CloudformationGuardHookStackFiltersStackNames value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackNames.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a>

---

##### `putStackRoles` <a name="putStackRoles" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackRoles"></a>

```java
public void putStackRoles(CloudformationGuardHookStackFiltersStackRoles value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackRoles.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a>

---

##### `resetFilteringCriteria` <a name="resetFilteringCriteria" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetFilteringCriteria"></a>

```java
public void resetFilteringCriteria()
```

##### `resetStackNames` <a name="resetStackNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetStackNames"></a>

```java
public void resetStackNames()
```

##### `resetStackRoles` <a name="resetStackRoles" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetStackRoles"></a>

```java
public void resetStackRoles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackNames">stackNames</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference">CloudformationGuardHookStackFiltersStackNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackRoles">stackRoles</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference">CloudformationGuardHookStackFiltersStackRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.filteringCriteriaInput">filteringCriteriaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackNamesInput">stackNamesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackRolesInput">stackRolesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.filteringCriteria">filteringCriteria</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stackNames`<sup>Required</sup> <a name="stackNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackNames"></a>

```java
public CloudformationGuardHookStackFiltersStackNamesOutputReference getStackNames();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference">CloudformationGuardHookStackFiltersStackNamesOutputReference</a>

---

##### `stackRoles`<sup>Required</sup> <a name="stackRoles" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackRoles"></a>

```java
public CloudformationGuardHookStackFiltersStackRolesOutputReference getStackRoles();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference">CloudformationGuardHookStackFiltersStackRolesOutputReference</a>

---

##### `filteringCriteriaInput`<sup>Optional</sup> <a name="filteringCriteriaInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.filteringCriteriaInput"></a>

```java
public java.lang.String getFilteringCriteriaInput();
```

- *Type:* java.lang.String

---

##### `stackNamesInput`<sup>Optional</sup> <a name="stackNamesInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackNamesInput"></a>

```java
public IResolvable|CloudformationGuardHookStackFiltersStackNames getStackNamesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a>

---

##### `stackRolesInput`<sup>Optional</sup> <a name="stackRolesInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackRolesInput"></a>

```java
public IResolvable|CloudformationGuardHookStackFiltersStackRoles getStackRolesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a>

---

##### `filteringCriteria`<sup>Required</sup> <a name="filteringCriteria" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.filteringCriteria"></a>

```java
public java.lang.String getFilteringCriteria();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudformationGuardHookStackFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a>

---


### CloudformationGuardHookStackFiltersStackNamesOutputReference <a name="CloudformationGuardHookStackFiltersStackNamesOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_guard_hook.CloudformationGuardHookStackFiltersStackNamesOutputReference;

new CloudformationGuardHookStackFiltersStackNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclude` <a name="resetExclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resetExclude"></a>

```java
public void resetExclude()
```

##### `resetInclude` <a name="resetInclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resetInclude"></a>

```java
public void resetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.excludeInput">excludeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.includeInput">includeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.exclude">exclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.excludeInput"></a>

```java
public java.util.List<java.lang.String> getExcludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.includeInput"></a>

```java
public java.util.List<java.lang.String> getIncludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.exclude"></a>

```java
public java.util.List<java.lang.String> getExclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudformationGuardHookStackFiltersStackNames getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a>

---


### CloudformationGuardHookStackFiltersStackRolesOutputReference <a name="CloudformationGuardHookStackFiltersStackRolesOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_guard_hook.CloudformationGuardHookStackFiltersStackRolesOutputReference;

new CloudformationGuardHookStackFiltersStackRolesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclude` <a name="resetExclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resetExclude"></a>

```java
public void resetExclude()
```

##### `resetInclude` <a name="resetInclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resetInclude"></a>

```java
public void resetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.excludeInput">excludeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.includeInput">includeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.exclude">exclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.include">include</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.excludeInput"></a>

```java
public java.util.List<java.lang.String> getExcludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.includeInput"></a>

```java
public java.util.List<java.lang.String> getIncludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.exclude"></a>

```java
public java.util.List<java.lang.String> getExclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.include"></a>

```java
public java.util.List<java.lang.String> getInclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudformationGuardHookStackFiltersStackRoles getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a>

---


### CloudformationGuardHookTargetFiltersOutputReference <a name="CloudformationGuardHookTargetFiltersOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_guard_hook.CloudformationGuardHookTargetFiltersOutputReference;

new CloudformationGuardHookTargetFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetInvocationPoints">resetInvocationPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetTargetNames">resetTargetNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetTargets">resetTargets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargets` <a name="putTargets" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.putTargets"></a>

```java
public void putTargets(IResolvable|java.util.List<CloudformationGuardHookTargetFiltersTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.putTargets.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>>

---

##### `resetActions` <a name="resetActions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetActions"></a>

```java
public void resetActions()
```

##### `resetInvocationPoints` <a name="resetInvocationPoints" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetInvocationPoints"></a>

```java
public void resetInvocationPoints()
```

##### `resetTargetNames` <a name="resetTargetNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetTargetNames"></a>

```java
public void resetTargetNames()
```

##### `resetTargets` <a name="resetTargets" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetTargets"></a>

```java
public void resetTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList">CloudformationGuardHookTargetFiltersTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.actionsInput">actionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.invocationPointsInput">invocationPointsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetNamesInput">targetNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetsInput">targetsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.invocationPoints">invocationPoints</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetNames">targetNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targets"></a>

```java
public CloudformationGuardHookTargetFiltersTargetsList getTargets();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList">CloudformationGuardHookTargetFiltersTargetsList</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.actionsInput"></a>

```java
public java.util.List<java.lang.String> getActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `invocationPointsInput`<sup>Optional</sup> <a name="invocationPointsInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.invocationPointsInput"></a>

```java
public java.util.List<java.lang.String> getInvocationPointsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetNamesInput`<sup>Optional</sup> <a name="targetNamesInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetNamesInput"></a>

```java
public java.util.List<java.lang.String> getTargetNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetsInput"></a>

```java
public IResolvable|java.util.List<CloudformationGuardHookTargetFiltersTargets> getTargetsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `invocationPoints`<sup>Required</sup> <a name="invocationPoints" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.invocationPoints"></a>

```java
public java.util.List<java.lang.String> getInvocationPoints();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetNames`<sup>Required</sup> <a name="targetNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetNames"></a>

```java
public java.util.List<java.lang.String> getTargetNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudformationGuardHookTargetFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a>

---


### CloudformationGuardHookTargetFiltersTargetsList <a name="CloudformationGuardHookTargetFiltersTargetsList" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_guard_hook.CloudformationGuardHookTargetFiltersTargetsList;

new CloudformationGuardHookTargetFiltersTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.get"></a>

```java
public CloudformationGuardHookTargetFiltersTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudformationGuardHookTargetFiltersTargets> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>>

---


### CloudformationGuardHookTargetFiltersTargetsOutputReference <a name="CloudformationGuardHookTargetFiltersTargetsOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_guard_hook.CloudformationGuardHookTargetFiltersTargetsOutputReference;

new CloudformationGuardHookTargetFiltersTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetInvocationPoint">resetInvocationPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetTargetName">resetTargetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetInvocationPoint` <a name="resetInvocationPoint" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetInvocationPoint"></a>

```java
public void resetInvocationPoint()
```

##### `resetTargetName` <a name="resetTargetName" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetTargetName"></a>

```java
public void resetTargetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.invocationPointInput">invocationPointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.targetNameInput">targetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.invocationPoint">invocationPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.targetName">targetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `invocationPointInput`<sup>Optional</sup> <a name="invocationPointInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.invocationPointInput"></a>

```java
public java.lang.String getInvocationPointInput();
```

- *Type:* java.lang.String

---

##### `targetNameInput`<sup>Optional</sup> <a name="targetNameInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.targetNameInput"></a>

```java
public java.lang.String getTargetNameInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `invocationPoint`<sup>Required</sup> <a name="invocationPoint" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.invocationPoint"></a>

```java
public java.lang.String getInvocationPoint();
```

- *Type:* java.lang.String

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.targetName"></a>

```java
public java.lang.String getTargetName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudformationGuardHookTargetFiltersTargets getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>

---



