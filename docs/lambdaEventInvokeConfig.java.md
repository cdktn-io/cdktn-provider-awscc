# `lambdaEventInvokeConfig` Submodule <a name="`lambdaEventInvokeConfig` Submodule" id="@cdktn/provider-awscc.lambdaEventInvokeConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaEventInvokeConfig <a name="LambdaEventInvokeConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config awscc_lambda_event_invoke_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_event_invoke_config.LambdaEventInvokeConfig;

LambdaEventInvokeConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .functionName(java.lang.String)
    .qualifier(java.lang.String)
//  .destinationConfig(LambdaEventInvokeConfigDestinationConfig)
//  .maximumEventAgeInSeconds(java.lang.Number)
//  .maximumRetryAttempts(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.functionName">functionName</a></code> | <code>java.lang.String</code> | The name of the Lambda function. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.qualifier">qualifier</a></code> | <code>java.lang.String</code> | The identifier of a version or alias. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.destinationConfig">destinationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a></code> | A destination for events after they have been sent to a function for processing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.maximumEventAgeInSeconds">maximumEventAgeInSeconds</a></code> | <code>java.lang.Number</code> | The maximum age of a request that Lambda sends to a function for processing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>java.lang.Number</code> | The maximum number of times to retry when the function returns an error. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.functionName"></a>

- *Type:* java.lang.String

The name of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#function_name LambdaEventInvokeConfig#function_name}

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.qualifier"></a>

- *Type:* java.lang.String

The identifier of a version or alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#qualifier LambdaEventInvokeConfig#qualifier}

---

##### `destinationConfig`<sup>Optional</sup> <a name="destinationConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.destinationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a>

A destination for events after they have been sent to a function for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#destination_config LambdaEventInvokeConfig#destination_config}

---

##### `maximumEventAgeInSeconds`<sup>Optional</sup> <a name="maximumEventAgeInSeconds" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.maximumEventAgeInSeconds"></a>

- *Type:* java.lang.Number

The maximum age of a request that Lambda sends to a function for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#maximum_event_age_in_seconds LambdaEventInvokeConfig#maximum_event_age_in_seconds}

---

##### `maximumRetryAttempts`<sup>Optional</sup> <a name="maximumRetryAttempts" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.Initializer.parameter.maximumRetryAttempts"></a>

- *Type:* java.lang.Number

The maximum number of times to retry when the function returns an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#maximum_retry_attempts LambdaEventInvokeConfig#maximum_retry_attempts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.putDestinationConfig">putDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetDestinationConfig">resetDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetMaximumEventAgeInSeconds">resetMaximumEventAgeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetMaximumRetryAttempts">resetMaximumRetryAttempts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationConfig` <a name="putDestinationConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.putDestinationConfig"></a>

```java
public void putDestinationConfig(LambdaEventInvokeConfigDestinationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.putDestinationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a>

---

##### `resetDestinationConfig` <a name="resetDestinationConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetDestinationConfig"></a>

```java
public void resetDestinationConfig()
```

##### `resetMaximumEventAgeInSeconds` <a name="resetMaximumEventAgeInSeconds" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetMaximumEventAgeInSeconds"></a>

```java
public void resetMaximumEventAgeInSeconds()
```

##### `resetMaximumRetryAttempts` <a name="resetMaximumRetryAttempts" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.resetMaximumRetryAttempts"></a>

```java
public void resetMaximumRetryAttempts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaEventInvokeConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isConstruct"></a>

```java
import io.cdktn.providers.awscc.lambda_event_invoke_config.LambdaEventInvokeConfig;

LambdaEventInvokeConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.lambda_event_invoke_config.LambdaEventInvokeConfig;

LambdaEventInvokeConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.lambda_event_invoke_config.LambdaEventInvokeConfig;

LambdaEventInvokeConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.lambda_event_invoke_config.LambdaEventInvokeConfig;

LambdaEventInvokeConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LambdaEventInvokeConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LambdaEventInvokeConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LambdaEventInvokeConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LambdaEventInvokeConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LambdaEventInvokeConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.destinationConfig">destinationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference">LambdaEventInvokeConfigDestinationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.destinationConfigInput">destinationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumEventAgeInSecondsInput">maximumEventAgeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumRetryAttemptsInput">maximumRetryAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.qualifierInput">qualifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumEventAgeInSeconds">maximumEventAgeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.qualifier">qualifier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destinationConfig`<sup>Required</sup> <a name="destinationConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.destinationConfig"></a>

```java
public LambdaEventInvokeConfigDestinationConfigOutputReference getDestinationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference">LambdaEventInvokeConfigDestinationConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `destinationConfigInput`<sup>Optional</sup> <a name="destinationConfigInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.destinationConfigInput"></a>

```java
public IResolvable|LambdaEventInvokeConfigDestinationConfig getDestinationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `maximumEventAgeInSecondsInput`<sup>Optional</sup> <a name="maximumEventAgeInSecondsInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumEventAgeInSecondsInput"></a>

```java
public java.lang.Number getMaximumEventAgeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maximumRetryAttemptsInput`<sup>Optional</sup> <a name="maximumRetryAttemptsInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumRetryAttemptsInput"></a>

```java
public java.lang.Number getMaximumRetryAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `qualifierInput`<sup>Optional</sup> <a name="qualifierInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.qualifierInput"></a>

```java
public java.lang.String getQualifierInput();
```

- *Type:* java.lang.String

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `maximumEventAgeInSeconds`<sup>Required</sup> <a name="maximumEventAgeInSeconds" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumEventAgeInSeconds"></a>

```java
public java.lang.Number getMaximumEventAgeInSeconds();
```

- *Type:* java.lang.Number

---

##### `maximumRetryAttempts`<sup>Required</sup> <a name="maximumRetryAttempts" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.maximumRetryAttempts"></a>

```java
public java.lang.Number getMaximumRetryAttempts();
```

- *Type:* java.lang.Number

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.qualifier"></a>

```java
public java.lang.String getQualifier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaEventInvokeConfigConfig <a name="LambdaEventInvokeConfigConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_event_invoke_config.LambdaEventInvokeConfigConfig;

LambdaEventInvokeConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .functionName(java.lang.String)
    .qualifier(java.lang.String)
//  .destinationConfig(LambdaEventInvokeConfigDestinationConfig)
//  .maximumEventAgeInSeconds(java.lang.Number)
//  .maximumRetryAttempts(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.functionName">functionName</a></code> | <code>java.lang.String</code> | The name of the Lambda function. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.qualifier">qualifier</a></code> | <code>java.lang.String</code> | The identifier of a version or alias. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.destinationConfig">destinationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a></code> | A destination for events after they have been sent to a function for processing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.maximumEventAgeInSeconds">maximumEventAgeInSeconds</a></code> | <code>java.lang.Number</code> | The maximum age of a request that Lambda sends to a function for processing. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>java.lang.Number</code> | The maximum number of times to retry when the function returns an error. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

The name of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#function_name LambdaEventInvokeConfig#function_name}

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.qualifier"></a>

```java
public java.lang.String getQualifier();
```

- *Type:* java.lang.String

The identifier of a version or alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#qualifier LambdaEventInvokeConfig#qualifier}

---

##### `destinationConfig`<sup>Optional</sup> <a name="destinationConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.destinationConfig"></a>

```java
public LambdaEventInvokeConfigDestinationConfig getDestinationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a>

A destination for events after they have been sent to a function for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#destination_config LambdaEventInvokeConfig#destination_config}

---

##### `maximumEventAgeInSeconds`<sup>Optional</sup> <a name="maximumEventAgeInSeconds" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.maximumEventAgeInSeconds"></a>

```java
public java.lang.Number getMaximumEventAgeInSeconds();
```

- *Type:* java.lang.Number

The maximum age of a request that Lambda sends to a function for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#maximum_event_age_in_seconds LambdaEventInvokeConfig#maximum_event_age_in_seconds}

---

##### `maximumRetryAttempts`<sup>Optional</sup> <a name="maximumRetryAttempts" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigConfig.property.maximumRetryAttempts"></a>

```java
public java.lang.Number getMaximumRetryAttempts();
```

- *Type:* java.lang.Number

The maximum number of times to retry when the function returns an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#maximum_retry_attempts LambdaEventInvokeConfig#maximum_retry_attempts}

---

### LambdaEventInvokeConfigDestinationConfig <a name="LambdaEventInvokeConfigDestinationConfig" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_event_invoke_config.LambdaEventInvokeConfigDestinationConfig;

LambdaEventInvokeConfigDestinationConfig.builder()
//  .onFailure(LambdaEventInvokeConfigDestinationConfigOnFailure)
//  .onSuccess(LambdaEventInvokeConfigDestinationConfigOnSuccess)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig.property.onFailure">onFailure</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a></code> | The destination configuration for failed invocations. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig.property.onSuccess">onSuccess</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a></code> | The destination configuration for successful invocations. |

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig.property.onFailure"></a>

```java
public LambdaEventInvokeConfigDestinationConfigOnFailure getOnFailure();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a>

The destination configuration for failed invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#on_failure LambdaEventInvokeConfig#on_failure}

---

##### `onSuccess`<sup>Optional</sup> <a name="onSuccess" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig.property.onSuccess"></a>

```java
public LambdaEventInvokeConfigDestinationConfigOnSuccess getOnSuccess();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a>

The destination configuration for successful invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#on_success LambdaEventInvokeConfig#on_success}

---

### LambdaEventInvokeConfigDestinationConfigOnFailure <a name="LambdaEventInvokeConfigDestinationConfigOnFailure" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_event_invoke_config.LambdaEventInvokeConfigDestinationConfigOnFailure;

LambdaEventInvokeConfigDestinationConfigOnFailure.builder()
//  .destination(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure.property.destination">destination</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the destination resource. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the destination resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#destination LambdaEventInvokeConfig#destination}

---

### LambdaEventInvokeConfigDestinationConfigOnSuccess <a name="LambdaEventInvokeConfigDestinationConfigOnSuccess" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_event_invoke_config.LambdaEventInvokeConfigDestinationConfigOnSuccess;

LambdaEventInvokeConfigDestinationConfigOnSuccess.builder()
//  .destination(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess.property.destination">destination</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the destination resource. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the destination resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_event_invoke_config#destination LambdaEventInvokeConfig#destination}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference <a name="LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_event_invoke_config.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference;

new LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resetDestination">resetDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.resetDestination"></a>

```java
public void resetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaEventInvokeConfigDestinationConfigOnFailure getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a>

---


### LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference <a name="LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_event_invoke_config.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference;

new LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resetDestination">resetDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.resetDestination"></a>

```java
public void resetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaEventInvokeConfigDestinationConfigOnSuccess getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a>

---


### LambdaEventInvokeConfigDestinationConfigOutputReference <a name="LambdaEventInvokeConfigDestinationConfigOutputReference" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_event_invoke_config.LambdaEventInvokeConfigDestinationConfigOutputReference;

new LambdaEventInvokeConfigDestinationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnFailure">putOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnSuccess">putOnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resetOnFailure">resetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resetOnSuccess">resetOnSuccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnFailure` <a name="putOnFailure" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnFailure"></a>

```java
public void putOnFailure(LambdaEventInvokeConfigDestinationConfigOnFailure value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a>

---

##### `putOnSuccess` <a name="putOnSuccess" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnSuccess"></a>

```java
public void putOnSuccess(LambdaEventInvokeConfigDestinationConfigOnSuccess value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.putOnSuccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a>

---

##### `resetOnFailure` <a name="resetOnFailure" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resetOnFailure"></a>

```java
public void resetOnFailure()
```

##### `resetOnSuccess` <a name="resetOnSuccess" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.resetOnSuccess"></a>

```java
public void resetOnSuccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onFailure">onFailure</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference">LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onSuccess">onSuccess</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference">LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onFailureInput">onFailureInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onSuccessInput">onSuccessInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onFailure"></a>

```java
public LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference getOnFailure();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference">LambdaEventInvokeConfigDestinationConfigOnFailureOutputReference</a>

---

##### `onSuccess`<sup>Required</sup> <a name="onSuccess" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onSuccess"></a>

```java
public LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference getOnSuccess();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference">LambdaEventInvokeConfigDestinationConfigOnSuccessOutputReference</a>

---

##### `onFailureInput`<sup>Optional</sup> <a name="onFailureInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onFailureInput"></a>

```java
public IResolvable|LambdaEventInvokeConfigDestinationConfigOnFailure getOnFailureInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnFailure">LambdaEventInvokeConfigDestinationConfigOnFailure</a>

---

##### `onSuccessInput`<sup>Optional</sup> <a name="onSuccessInput" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.onSuccessInput"></a>

```java
public IResolvable|LambdaEventInvokeConfigDestinationConfigOnSuccess getOnSuccessInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOnSuccess">LambdaEventInvokeConfigDestinationConfigOnSuccess</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaEventInvokeConfigDestinationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaEventInvokeConfig.LambdaEventInvokeConfigDestinationConfig">LambdaEventInvokeConfigDestinationConfig</a>

---



