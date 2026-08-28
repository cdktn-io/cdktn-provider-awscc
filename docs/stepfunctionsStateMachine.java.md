# `stepfunctionsStateMachine` Submodule <a name="`stepfunctionsStateMachine` Submodule" id="@cdktn/provider-awscc.stepfunctionsStateMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StepfunctionsStateMachine <a name="StepfunctionsStateMachine" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine awscc_stepfunctions_state_machine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine.StepfunctionsStateMachine;

StepfunctionsStateMachine.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .roleArn(java.lang.String)
//  .definition(java.lang.String)
//  .definitionS3Location(StepfunctionsStateMachineDefinitionS3Location)
//  .definitionString(java.lang.String)
//  .definitionSubstitutions(java.util.Map<java.lang.String, java.lang.String>)
//  .loggingConfiguration(StepfunctionsStateMachineLoggingConfiguration)
//  .stateMachineName(java.lang.String)
//  .stateMachineType(java.lang.String)
//  .tags(IResolvable|java.util.List<StepfunctionsStateMachineTags>)
//  .tracingConfiguration(StepfunctionsStateMachineTracingConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#role_arn StepfunctionsStateMachine#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.definition">definition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition StepfunctionsStateMachine#definition}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.definitionS3Location">definitionS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition_s3_location StepfunctionsStateMachine#definition_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.definitionString">definitionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition_string StepfunctionsStateMachine#definition_string}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.definitionSubstitutions">definitionSubstitutions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition_substitutions StepfunctionsStateMachine#definition_substitutions}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#logging_configuration StepfunctionsStateMachine#logging_configuration}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.stateMachineName">stateMachineName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#state_machine_name StepfunctionsStateMachine#state_machine_name}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.stateMachineType">stateMachineType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#state_machine_type StepfunctionsStateMachine#state_machine_type}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#tags StepfunctionsStateMachine#tags}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.tracingConfiguration">tracingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#tracing_configuration StepfunctionsStateMachine#tracing_configuration}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#role_arn StepfunctionsStateMachine#role_arn}.

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.definition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition StepfunctionsStateMachine#definition}.

---

##### `definitionS3Location`<sup>Optional</sup> <a name="definitionS3Location" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.definitionS3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition_s3_location StepfunctionsStateMachine#definition_s3_location}.

---

##### `definitionString`<sup>Optional</sup> <a name="definitionString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.definitionString"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition_string StepfunctionsStateMachine#definition_string}.

---

##### `definitionSubstitutions`<sup>Optional</sup> <a name="definitionSubstitutions" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.definitionSubstitutions"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition_substitutions StepfunctionsStateMachine#definition_substitutions}.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.loggingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#logging_configuration StepfunctionsStateMachine#logging_configuration}.

---

##### `stateMachineName`<sup>Optional</sup> <a name="stateMachineName" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.stateMachineName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#state_machine_name StepfunctionsStateMachine#state_machine_name}.

---

##### `stateMachineType`<sup>Optional</sup> <a name="stateMachineType" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.stateMachineType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#state_machine_type StepfunctionsStateMachine#state_machine_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#tags StepfunctionsStateMachine#tags}.

---

##### `tracingConfiguration`<sup>Optional</sup> <a name="tracingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.Initializer.parameter.tracingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#tracing_configuration StepfunctionsStateMachine#tracing_configuration}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putDefinitionS3Location">putDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putLoggingConfiguration">putLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTracingConfiguration">putTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinition">resetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionS3Location">resetDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionString">resetDefinitionString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionSubstitutions">resetDefinitionSubstitutions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetLoggingConfiguration">resetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetStateMachineName">resetStateMachineName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetStateMachineType">resetStateMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetTracingConfiguration">resetTracingConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefinitionS3Location` <a name="putDefinitionS3Location" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putDefinitionS3Location"></a>

```java
public void putDefinitionS3Location(StepfunctionsStateMachineDefinitionS3Location value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putDefinitionS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a>

---

##### `putLoggingConfiguration` <a name="putLoggingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putLoggingConfiguration"></a>

```java
public void putLoggingConfiguration(StepfunctionsStateMachineLoggingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<StepfunctionsStateMachineTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>>

---

##### `putTracingConfiguration` <a name="putTracingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTracingConfiguration"></a>

```java
public void putTracingConfiguration(StepfunctionsStateMachineTracingConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.putTracingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a>

---

##### `resetDefinition` <a name="resetDefinition" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinition"></a>

```java
public void resetDefinition()
```

##### `resetDefinitionS3Location` <a name="resetDefinitionS3Location" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionS3Location"></a>

```java
public void resetDefinitionS3Location()
```

##### `resetDefinitionString` <a name="resetDefinitionString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionString"></a>

```java
public void resetDefinitionString()
```

##### `resetDefinitionSubstitutions` <a name="resetDefinitionSubstitutions" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetDefinitionSubstitutions"></a>

```java
public void resetDefinitionSubstitutions()
```

##### `resetLoggingConfiguration` <a name="resetLoggingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetLoggingConfiguration"></a>

```java
public void resetLoggingConfiguration()
```

##### `resetStateMachineName` <a name="resetStateMachineName" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetStateMachineName"></a>

```java
public void resetStateMachineName()
```

##### `resetStateMachineType` <a name="resetStateMachineType" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetStateMachineType"></a>

```java
public void resetStateMachineType()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetTags"></a>

```java
public void resetTags()
```

##### `resetTracingConfiguration` <a name="resetTracingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.resetTracingConfiguration"></a>

```java
public void resetTracingConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StepfunctionsStateMachine resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isConstruct"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine.StepfunctionsStateMachine;

StepfunctionsStateMachine.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine.StepfunctionsStateMachine;

StepfunctionsStateMachine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine.StepfunctionsStateMachine;

StepfunctionsStateMachine.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine.StepfunctionsStateMachine;

StepfunctionsStateMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StepfunctionsStateMachine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a StepfunctionsStateMachine resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StepfunctionsStateMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StepfunctionsStateMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the StepfunctionsStateMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionS3Location">definitionS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference">StepfunctionsStateMachineDefinitionS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference">StepfunctionsStateMachineLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList">StepfunctionsStateMachineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tracingConfiguration">tracingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference">StepfunctionsStateMachineTracingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionInput">definitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionS3LocationInput">definitionS3LocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionStringInput">definitionStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionSubstitutionsInput">definitionSubstitutionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.loggingConfigurationInput">loggingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineNameInput">stateMachineNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineTypeInput">stateMachineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tracingConfigurationInput">tracingConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definition">definition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionString">definitionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionSubstitutions">definitionSubstitutions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineName">stateMachineName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineType">stateMachineType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `definitionS3Location`<sup>Required</sup> <a name="definitionS3Location" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionS3Location"></a>

```java
public StepfunctionsStateMachineDefinitionS3LocationOutputReference getDefinitionS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference">StepfunctionsStateMachineDefinitionS3LocationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loggingConfiguration`<sup>Required</sup> <a name="loggingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.loggingConfiguration"></a>

```java
public StepfunctionsStateMachineLoggingConfigurationOutputReference getLoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference">StepfunctionsStateMachineLoggingConfigurationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tags"></a>

```java
public StepfunctionsStateMachineTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList">StepfunctionsStateMachineTagsList</a>

---

##### `tracingConfiguration`<sup>Required</sup> <a name="tracingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tracingConfiguration"></a>

```java
public StepfunctionsStateMachineTracingConfigurationOutputReference getTracingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference">StepfunctionsStateMachineTracingConfigurationOutputReference</a>

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionInput"></a>

```java
public java.lang.String getDefinitionInput();
```

- *Type:* java.lang.String

---

##### `definitionS3LocationInput`<sup>Optional</sup> <a name="definitionS3LocationInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionS3LocationInput"></a>

```java
public IResolvable|StepfunctionsStateMachineDefinitionS3Location getDefinitionS3LocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a>

---

##### `definitionStringInput`<sup>Optional</sup> <a name="definitionStringInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionStringInput"></a>

```java
public java.lang.String getDefinitionStringInput();
```

- *Type:* java.lang.String

---

##### `definitionSubstitutionsInput`<sup>Optional</sup> <a name="definitionSubstitutionsInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionSubstitutionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinitionSubstitutionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `loggingConfigurationInput`<sup>Optional</sup> <a name="loggingConfigurationInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.loggingConfigurationInput"></a>

```java
public IResolvable|StepfunctionsStateMachineLoggingConfiguration getLoggingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `stateMachineNameInput`<sup>Optional</sup> <a name="stateMachineNameInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineNameInput"></a>

```java
public java.lang.String getStateMachineNameInput();
```

- *Type:* java.lang.String

---

##### `stateMachineTypeInput`<sup>Optional</sup> <a name="stateMachineTypeInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineTypeInput"></a>

```java
public java.lang.String getStateMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tagsInput"></a>

```java
public IResolvable|java.util.List<StepfunctionsStateMachineTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>>

---

##### `tracingConfigurationInput`<sup>Optional</sup> <a name="tracingConfigurationInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tracingConfigurationInput"></a>

```java
public IResolvable|StepfunctionsStateMachineTracingConfiguration getTracingConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

---

##### `definitionString`<sup>Required</sup> <a name="definitionString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionString"></a>

```java
public java.lang.String getDefinitionString();
```

- *Type:* java.lang.String

---

##### `definitionSubstitutions`<sup>Required</sup> <a name="definitionSubstitutions" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.definitionSubstitutions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinitionSubstitutions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineName"></a>

```java
public java.lang.String getStateMachineName();
```

- *Type:* java.lang.String

---

##### `stateMachineType`<sup>Required</sup> <a name="stateMachineType" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.stateMachineType"></a>

```java
public java.lang.String getStateMachineType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StepfunctionsStateMachineConfig <a name="StepfunctionsStateMachineConfig" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine.StepfunctionsStateMachineConfig;

StepfunctionsStateMachineConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .roleArn(java.lang.String)
//  .definition(java.lang.String)
//  .definitionS3Location(StepfunctionsStateMachineDefinitionS3Location)
//  .definitionString(java.lang.String)
//  .definitionSubstitutions(java.util.Map<java.lang.String, java.lang.String>)
//  .loggingConfiguration(StepfunctionsStateMachineLoggingConfiguration)
//  .stateMachineName(java.lang.String)
//  .stateMachineType(java.lang.String)
//  .tags(IResolvable|java.util.List<StepfunctionsStateMachineTags>)
//  .tracingConfiguration(StepfunctionsStateMachineTracingConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#role_arn StepfunctionsStateMachine#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definition">definition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition StepfunctionsStateMachine#definition}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionS3Location">definitionS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition_s3_location StepfunctionsStateMachine#definition_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionString">definitionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition_string StepfunctionsStateMachine#definition_string}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionSubstitutions">definitionSubstitutions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition_substitutions StepfunctionsStateMachine#definition_substitutions}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#logging_configuration StepfunctionsStateMachine#logging_configuration}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.stateMachineName">stateMachineName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#state_machine_name StepfunctionsStateMachine#state_machine_name}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.stateMachineType">stateMachineType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#state_machine_type StepfunctionsStateMachine#state_machine_type}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#tags StepfunctionsStateMachine#tags}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.tracingConfiguration">tracingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#tracing_configuration StepfunctionsStateMachine#tracing_configuration}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#role_arn StepfunctionsStateMachine#role_arn}.

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition StepfunctionsStateMachine#definition}.

---

##### `definitionS3Location`<sup>Optional</sup> <a name="definitionS3Location" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionS3Location"></a>

```java
public StepfunctionsStateMachineDefinitionS3Location getDefinitionS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition_s3_location StepfunctionsStateMachine#definition_s3_location}.

---

##### `definitionString`<sup>Optional</sup> <a name="definitionString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionString"></a>

```java
public java.lang.String getDefinitionString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition_string StepfunctionsStateMachine#definition_string}.

---

##### `definitionSubstitutions`<sup>Optional</sup> <a name="definitionSubstitutions" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.definitionSubstitutions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinitionSubstitutions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#definition_substitutions StepfunctionsStateMachine#definition_substitutions}.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.loggingConfiguration"></a>

```java
public StepfunctionsStateMachineLoggingConfiguration getLoggingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#logging_configuration StepfunctionsStateMachine#logging_configuration}.

---

##### `stateMachineName`<sup>Optional</sup> <a name="stateMachineName" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.stateMachineName"></a>

```java
public java.lang.String getStateMachineName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#state_machine_name StepfunctionsStateMachine#state_machine_name}.

---

##### `stateMachineType`<sup>Optional</sup> <a name="stateMachineType" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.stateMachineType"></a>

```java
public java.lang.String getStateMachineType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#state_machine_type StepfunctionsStateMachine#state_machine_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.tags"></a>

```java
public IResolvable|java.util.List<StepfunctionsStateMachineTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#tags StepfunctionsStateMachine#tags}.

---

##### `tracingConfiguration`<sup>Optional</sup> <a name="tracingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineConfig.property.tracingConfiguration"></a>

```java
public StepfunctionsStateMachineTracingConfiguration getTracingConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#tracing_configuration StepfunctionsStateMachine#tracing_configuration}.

---

### StepfunctionsStateMachineDefinitionS3Location <a name="StepfunctionsStateMachineDefinitionS3Location" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine.StepfunctionsStateMachineDefinitionS3Location;

StepfunctionsStateMachineDefinitionS3Location.builder()
//  .bucket(java.lang.String)
//  .key(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#bucket StepfunctionsStateMachine#bucket}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#key StepfunctionsStateMachine#key}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#version StepfunctionsStateMachine#version}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#bucket StepfunctionsStateMachine#bucket}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#key StepfunctionsStateMachine#key}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#version StepfunctionsStateMachine#version}.

---

### StepfunctionsStateMachineLoggingConfiguration <a name="StepfunctionsStateMachineLoggingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine.StepfunctionsStateMachineLoggingConfiguration;

StepfunctionsStateMachineLoggingConfiguration.builder()
//  .destinations(IResolvable|java.util.List<StepfunctionsStateMachineLoggingConfigurationDestinations>)
//  .includeExecutionData(java.lang.Boolean|IResolvable)
//  .level(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.destinations">destinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#destinations StepfunctionsStateMachine#destinations}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.includeExecutionData">includeExecutionData</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#include_execution_data StepfunctionsStateMachine#include_execution_data}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.level">level</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#level StepfunctionsStateMachine#level}. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.destinations"></a>

```java
public IResolvable|java.util.List<StepfunctionsStateMachineLoggingConfigurationDestinations> getDestinations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#destinations StepfunctionsStateMachine#destinations}.

---

##### `includeExecutionData`<sup>Optional</sup> <a name="includeExecutionData" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.includeExecutionData"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExecutionData();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#include_execution_data StepfunctionsStateMachine#include_execution_data}.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#level StepfunctionsStateMachine#level}.

---

### StepfunctionsStateMachineLoggingConfigurationDestinations <a name="StepfunctionsStateMachineLoggingConfigurationDestinations" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine.StepfunctionsStateMachineLoggingConfigurationDestinations;

StepfunctionsStateMachineLoggingConfigurationDestinations.builder()
//  .cloudwatchLogsLogGroup(StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations.property.cloudwatchLogsLogGroup">cloudwatchLogsLogGroup</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#cloudwatch_logs_log_group StepfunctionsStateMachine#cloudwatch_logs_log_group}. |

---

##### `cloudwatchLogsLogGroup`<sup>Optional</sup> <a name="cloudwatchLogsLogGroup" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations.property.cloudwatchLogsLogGroup"></a>

```java
public StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup getCloudwatchLogsLogGroup();
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#cloudwatch_logs_log_group StepfunctionsStateMachine#cloudwatch_logs_log_group}.

---

### StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup <a name="StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup;

StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup.builder()
//  .logGroupArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#log_group_arn StepfunctionsStateMachine#log_group_arn}. |

---

##### `logGroupArn`<sup>Optional</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#log_group_arn StepfunctionsStateMachine#log_group_arn}.

---

### StepfunctionsStateMachineTags <a name="StepfunctionsStateMachineTags" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine.StepfunctionsStateMachineTags;

StepfunctionsStateMachineTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#key StepfunctionsStateMachine#key}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#value StepfunctionsStateMachine#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#key StepfunctionsStateMachine#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#value StepfunctionsStateMachine#value}.

---

### StepfunctionsStateMachineTracingConfiguration <a name="StepfunctionsStateMachineTracingConfiguration" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine.StepfunctionsStateMachineTracingConfiguration;

StepfunctionsStateMachineTracingConfiguration.builder()
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#enabled StepfunctionsStateMachine#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine#enabled StepfunctionsStateMachine#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### StepfunctionsStateMachineDefinitionS3LocationOutputReference <a name="StepfunctionsStateMachineDefinitionS3LocationOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine.StepfunctionsStateMachineDefinitionS3LocationOutputReference;

new StepfunctionsStateMachineDefinitionS3LocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3LocationOutputReference.property.internalValue"></a>

```java
public IResolvable|StepfunctionsStateMachineDefinitionS3Location getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineDefinitionS3Location">StepfunctionsStateMachineDefinitionS3Location</a>

---


### StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference <a name="StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference;

new StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resetLogGroupArn">resetLogGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroupArn` <a name="resetLogGroupArn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resetLogGroupArn"></a>

```java
public void resetLogGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.logGroupArnInput"></a>

```java
public java.lang.String getLogGroupArnInput();
```

- *Type:* java.lang.String

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.internalValue"></a>

```java
public IResolvable|StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a>

---


### StepfunctionsStateMachineLoggingConfigurationDestinationsList <a name="StepfunctionsStateMachineLoggingConfigurationDestinationsList" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine.StepfunctionsStateMachineLoggingConfigurationDestinationsList;

new StepfunctionsStateMachineLoggingConfigurationDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.get"></a>

```java
public StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<StepfunctionsStateMachineLoggingConfigurationDestinations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>>

---


### StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference <a name="StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference;

new StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.putCloudwatchLogsLogGroup">putCloudwatchLogsLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resetCloudwatchLogsLogGroup">resetCloudwatchLogsLogGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogsLogGroup` <a name="putCloudwatchLogsLogGroup" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.putCloudwatchLogsLogGroup"></a>

```java
public void putCloudwatchLogsLogGroup(StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.putCloudwatchLogsLogGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a>

---

##### `resetCloudwatchLogsLogGroup` <a name="resetCloudwatchLogsLogGroup" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resetCloudwatchLogsLogGroup"></a>

```java
public void resetCloudwatchLogsLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsLogGroup">cloudwatchLogsLogGroup</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsLogGroupInput">cloudwatchLogsLogGroupInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogsLogGroup`<sup>Required</sup> <a name="cloudwatchLogsLogGroup" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsLogGroup"></a>

```java
public StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference getCloudwatchLogsLogGroup();
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference</a>

---

##### `cloudwatchLogsLogGroupInput`<sup>Optional</sup> <a name="cloudwatchLogsLogGroupInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsLogGroupInput"></a>

```java
public IResolvable|StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup getCloudwatchLogsLogGroupInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">StepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.internalValue"></a>

```java
public IResolvable|StepfunctionsStateMachineLoggingConfigurationDestinations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>

---


### StepfunctionsStateMachineLoggingConfigurationOutputReference <a name="StepfunctionsStateMachineLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine.StepfunctionsStateMachineLoggingConfigurationOutputReference;

new StepfunctionsStateMachineLoggingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetIncludeExecutionData">resetIncludeExecutionData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetLevel">resetLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.putDestinations"></a>

```java
public void putDestinations(IResolvable|java.util.List<StepfunctionsStateMachineLoggingConfigurationDestinations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.putDestinations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>>

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetDestinations"></a>

```java
public void resetDestinations()
```

##### `resetIncludeExecutionData` <a name="resetIncludeExecutionData" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetIncludeExecutionData"></a>

```java
public void resetIncludeExecutionData()
```

##### `resetLevel` <a name="resetLevel" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.resetLevel"></a>

```java
public void resetLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList">StepfunctionsStateMachineLoggingConfigurationDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.includeExecutionDataInput">includeExecutionDataInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.levelInput">levelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.includeExecutionData">includeExecutionData</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.destinations"></a>

```java
public StepfunctionsStateMachineLoggingConfigurationDestinationsList getDestinations();
```

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinationsList">StepfunctionsStateMachineLoggingConfigurationDestinationsList</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.destinationsInput"></a>

```java
public IResolvable|java.util.List<StepfunctionsStateMachineLoggingConfigurationDestinations> getDestinationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationDestinations">StepfunctionsStateMachineLoggingConfigurationDestinations</a>>

---

##### `includeExecutionDataInput`<sup>Optional</sup> <a name="includeExecutionDataInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.includeExecutionDataInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExecutionDataInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.levelInput"></a>

```java
public java.lang.String getLevelInput();
```

- *Type:* java.lang.String

---

##### `includeExecutionData`<sup>Required</sup> <a name="includeExecutionData" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.includeExecutionData"></a>

```java
public java.lang.Boolean|IResolvable getIncludeExecutionData();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|StepfunctionsStateMachineLoggingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineLoggingConfiguration">StepfunctionsStateMachineLoggingConfiguration</a>

---


### StepfunctionsStateMachineTagsList <a name="StepfunctionsStateMachineTagsList" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine.StepfunctionsStateMachineTagsList;

new StepfunctionsStateMachineTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.get"></a>

```java
public StepfunctionsStateMachineTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<StepfunctionsStateMachineTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>>

---


### StepfunctionsStateMachineTagsOutputReference <a name="StepfunctionsStateMachineTagsOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine.StepfunctionsStateMachineTagsOutputReference;

new StepfunctionsStateMachineTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|StepfunctionsStateMachineTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTags">StepfunctionsStateMachineTags</a>

---


### StepfunctionsStateMachineTracingConfigurationOutputReference <a name="StepfunctionsStateMachineTracingConfigurationOutputReference" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.stepfunctions_state_machine.StepfunctionsStateMachineTracingConfigurationOutputReference;

new StepfunctionsStateMachineTracingConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|StepfunctionsStateMachineTracingConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.stepfunctionsStateMachine.StepfunctionsStateMachineTracingConfiguration">StepfunctionsStateMachineTracingConfiguration</a>

---



