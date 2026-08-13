# `lambdaUrl` Submodule <a name="`lambdaUrl` Submodule" id="@cdktn/provider-awscc.lambdaUrl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaUrl <a name="LambdaUrl" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url awscc_lambda_url}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_url.LambdaUrl;

LambdaUrl.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authType(java.lang.String)
    .targetFunctionArn(java.lang.String)
//  .cors(LambdaUrlCors)
//  .invokeMode(java.lang.String)
//  .qualifier(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.authType">authType</a></code> | <code>java.lang.String</code> | Can be either AWS_IAM if the requests are authorized via IAM, or NONE if no authorization is configured on the Function URL. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.targetFunctionArn">targetFunctionArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the function associated with the Function URL. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.cors">cors</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors">LambdaUrlCors</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#cors LambdaUrl#cors}. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.invokeMode">invokeMode</a></code> | <code>java.lang.String</code> | The invocation mode for the function's URL. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.qualifier">qualifier</a></code> | <code>java.lang.String</code> | The alias qualifier for the target function. If TargetFunctionArn is unqualified then Qualifier must be passed. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.authType"></a>

- *Type:* java.lang.String

Can be either AWS_IAM if the requests are authorized via IAM, or NONE if no authorization is configured on the Function URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#auth_type LambdaUrl#auth_type}

---

##### `targetFunctionArn`<sup>Required</sup> <a name="targetFunctionArn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.targetFunctionArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the function associated with the Function URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#target_function_arn LambdaUrl#target_function_arn}

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.cors"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors">LambdaUrlCors</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#cors LambdaUrl#cors}.

---

##### `invokeMode`<sup>Optional</sup> <a name="invokeMode" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.invokeMode"></a>

- *Type:* java.lang.String

The invocation mode for the function's URL.

Set to BUFFERED if you want to buffer responses before returning them to the client. Set to RESPONSE_STREAM if you want to stream responses, allowing faster time to first byte and larger response payload sizes. If not set, defaults to BUFFERED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#invoke_mode LambdaUrl#invoke_mode}

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.Initializer.parameter.qualifier"></a>

- *Type:* java.lang.String

The alias qualifier for the target function. If TargetFunctionArn is unqualified then Qualifier must be passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#qualifier LambdaUrl#qualifier}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.putCors">putCors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetCors">resetCors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetInvokeMode">resetInvokeMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetQualifier">resetQualifier</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCors` <a name="putCors" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.putCors"></a>

```java
public void putCors(LambdaUrlCors value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors">LambdaUrlCors</a>

---

##### `resetCors` <a name="resetCors" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetCors"></a>

```java
public void resetCors()
```

##### `resetInvokeMode` <a name="resetInvokeMode" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetInvokeMode"></a>

```java
public void resetInvokeMode()
```

##### `resetQualifier` <a name="resetQualifier" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.resetQualifier"></a>

```java
public void resetQualifier()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaUrl resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isConstruct"></a>

```java
import io.cdktn.providers.awscc.lambda_url.LambdaUrl;

LambdaUrl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.lambda_url.LambdaUrl;

LambdaUrl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.lambda_url.LambdaUrl;

LambdaUrl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.lambda_url.LambdaUrl;

LambdaUrl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LambdaUrl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LambdaUrl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LambdaUrl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LambdaUrl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LambdaUrl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.cors">cors</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference">LambdaUrlCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.functionArn">functionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.functionUrl">functionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.corsInput">corsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors">LambdaUrlCors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.invokeModeInput">invokeModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.qualifierInput">qualifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.targetFunctionArnInput">targetFunctionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.invokeMode">invokeMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.qualifier">qualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.targetFunctionArn">targetFunctionArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.cors"></a>

```java
public LambdaUrlCorsOutputReference getCors();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference">LambdaUrlCorsOutputReference</a>

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.functionArn"></a>

```java
public java.lang.String getFunctionArn();
```

- *Type:* java.lang.String

---

##### `functionUrl`<sup>Required</sup> <a name="functionUrl" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.functionUrl"></a>

```java
public java.lang.String getFunctionUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.corsInput"></a>

```java
public IResolvable|LambdaUrlCors getCorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors">LambdaUrlCors</a>

---

##### `invokeModeInput`<sup>Optional</sup> <a name="invokeModeInput" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.invokeModeInput"></a>

```java
public java.lang.String getInvokeModeInput();
```

- *Type:* java.lang.String

---

##### `qualifierInput`<sup>Optional</sup> <a name="qualifierInput" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.qualifierInput"></a>

```java
public java.lang.String getQualifierInput();
```

- *Type:* java.lang.String

---

##### `targetFunctionArnInput`<sup>Optional</sup> <a name="targetFunctionArnInput" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.targetFunctionArnInput"></a>

```java
public java.lang.String getTargetFunctionArnInput();
```

- *Type:* java.lang.String

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `invokeMode`<sup>Required</sup> <a name="invokeMode" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.invokeMode"></a>

```java
public java.lang.String getInvokeMode();
```

- *Type:* java.lang.String

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.qualifier"></a>

```java
public java.lang.String getQualifier();
```

- *Type:* java.lang.String

---

##### `targetFunctionArn`<sup>Required</sup> <a name="targetFunctionArn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.targetFunctionArn"></a>

```java
public java.lang.String getTargetFunctionArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaUrlConfig <a name="LambdaUrlConfig" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_url.LambdaUrlConfig;

LambdaUrlConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authType(java.lang.String)
    .targetFunctionArn(java.lang.String)
//  .cors(LambdaUrlCors)
//  .invokeMode(java.lang.String)
//  .qualifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.authType">authType</a></code> | <code>java.lang.String</code> | Can be either AWS_IAM if the requests are authorized via IAM, or NONE if no authorization is configured on the Function URL. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.targetFunctionArn">targetFunctionArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the function associated with the Function URL. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.cors">cors</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors">LambdaUrlCors</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#cors LambdaUrl#cors}. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.invokeMode">invokeMode</a></code> | <code>java.lang.String</code> | The invocation mode for the function's URL. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.qualifier">qualifier</a></code> | <code>java.lang.String</code> | The alias qualifier for the target function. If TargetFunctionArn is unqualified then Qualifier must be passed. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

Can be either AWS_IAM if the requests are authorized via IAM, or NONE if no authorization is configured on the Function URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#auth_type LambdaUrl#auth_type}

---

##### `targetFunctionArn`<sup>Required</sup> <a name="targetFunctionArn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.targetFunctionArn"></a>

```java
public java.lang.String getTargetFunctionArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the function associated with the Function URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#target_function_arn LambdaUrl#target_function_arn}

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.cors"></a>

```java
public LambdaUrlCors getCors();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors">LambdaUrlCors</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#cors LambdaUrl#cors}.

---

##### `invokeMode`<sup>Optional</sup> <a name="invokeMode" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.invokeMode"></a>

```java
public java.lang.String getInvokeMode();
```

- *Type:* java.lang.String

The invocation mode for the function's URL.

Set to BUFFERED if you want to buffer responses before returning them to the client. Set to RESPONSE_STREAM if you want to stream responses, allowing faster time to first byte and larger response payload sizes. If not set, defaults to BUFFERED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#invoke_mode LambdaUrl#invoke_mode}

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlConfig.property.qualifier"></a>

```java
public java.lang.String getQualifier();
```

- *Type:* java.lang.String

The alias qualifier for the target function. If TargetFunctionArn is unqualified then Qualifier must be passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#qualifier LambdaUrl#qualifier}

---

### LambdaUrlCors <a name="LambdaUrlCors" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_url.LambdaUrlCors;

LambdaUrlCors.builder()
//  .allowCredentials(java.lang.Boolean|IResolvable)
//  .allowHeaders(java.util.List<java.lang.String>)
//  .allowMethods(java.util.List<java.lang.String>)
//  .allowOrigins(java.util.List<java.lang.String>)
//  .exposeHeaders(java.util.List<java.lang.String>)
//  .maxAge(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowCredentials">allowCredentials</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether credentials are included in the CORS request. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowHeaders">allowHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Represents a collection of allowed headers. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowMethods">allowMethods</a></code> | <code>java.util.List<java.lang.String></code> | Represents a collection of allowed HTTP methods. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowOrigins">allowOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Represents a collection of allowed origins. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.exposeHeaders">exposeHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Represents a collection of exposed headers. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#max_age LambdaUrl#max_age}. |

---

##### `allowCredentials`<sup>Optional</sup> <a name="allowCredentials" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowCredentials"></a>

```java
public java.lang.Boolean|IResolvable getAllowCredentials();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether credentials are included in the CORS request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#allow_credentials LambdaUrl#allow_credentials}

---

##### `allowHeaders`<sup>Optional</sup> <a name="allowHeaders" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowHeaders();
```

- *Type:* java.util.List<java.lang.String>

Represents a collection of allowed headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#allow_headers LambdaUrl#allow_headers}

---

##### `allowMethods`<sup>Optional</sup> <a name="allowMethods" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowMethods"></a>

```java
public java.util.List<java.lang.String> getAllowMethods();
```

- *Type:* java.util.List<java.lang.String>

Represents a collection of allowed HTTP methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#allow_methods LambdaUrl#allow_methods}

---

##### `allowOrigins`<sup>Optional</sup> <a name="allowOrigins" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.allowOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowOrigins();
```

- *Type:* java.util.List<java.lang.String>

Represents a collection of allowed origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#allow_origins LambdaUrl#allow_origins}

---

##### `exposeHeaders`<sup>Optional</sup> <a name="exposeHeaders" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.exposeHeaders"></a>

```java
public java.util.List<java.lang.String> getExposeHeaders();
```

- *Type:* java.util.List<java.lang.String>

Represents a collection of exposed headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#expose_headers LambdaUrl#expose_headers}

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_url#max_age LambdaUrl#max_age}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaUrlCorsOutputReference <a name="LambdaUrlCorsOutputReference" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_url.LambdaUrlCorsOutputReference;

new LambdaUrlCorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowCredentials">resetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowHeaders">resetAllowHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowMethods">resetAllowMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowOrigins">resetAllowOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetExposeHeaders">resetExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetMaxAge">resetMaxAge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowCredentials` <a name="resetAllowCredentials" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowCredentials"></a>

```java
public void resetAllowCredentials()
```

##### `resetAllowHeaders` <a name="resetAllowHeaders" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowHeaders"></a>

```java
public void resetAllowHeaders()
```

##### `resetAllowMethods` <a name="resetAllowMethods" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowMethods"></a>

```java
public void resetAllowMethods()
```

##### `resetAllowOrigins` <a name="resetAllowOrigins" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetAllowOrigins"></a>

```java
public void resetAllowOrigins()
```

##### `resetExposeHeaders` <a name="resetExposeHeaders" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetExposeHeaders"></a>

```java
public void resetExposeHeaders()
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.resetMaxAge"></a>

```java
public void resetMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowCredentialsInput">allowCredentialsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowHeadersInput">allowHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowMethodsInput">allowMethodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowOriginsInput">allowOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.exposeHeadersInput">exposeHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowCredentials">allowCredentials</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowHeaders">allowHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowMethods">allowMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowOrigins">allowOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.exposeHeaders">exposeHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors">LambdaUrlCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowCredentialsInput`<sup>Optional</sup> <a name="allowCredentialsInput" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowCredentialsInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowCredentialsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowHeadersInput`<sup>Optional</sup> <a name="allowHeadersInput" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowMethodsInput`<sup>Optional</sup> <a name="allowMethodsInput" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowMethodsInput"></a>

```java
public java.util.List<java.lang.String> getAllowMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowOriginsInput`<sup>Optional</sup> <a name="allowOriginsInput" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposeHeadersInput`<sup>Optional</sup> <a name="exposeHeadersInput" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.exposeHeadersInput"></a>

```java
public java.util.List<java.lang.String> getExposeHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.maxAgeInput"></a>

```java
public java.lang.Number getMaxAgeInput();
```

- *Type:* java.lang.Number

---

##### `allowCredentials`<sup>Required</sup> <a name="allowCredentials" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowCredentials"></a>

```java
public java.lang.Boolean|IResolvable getAllowCredentials();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowHeaders`<sup>Required</sup> <a name="allowHeaders" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowMethods`<sup>Required</sup> <a name="allowMethods" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowMethods"></a>

```java
public java.util.List<java.lang.String> getAllowMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowOrigins`<sup>Required</sup> <a name="allowOrigins" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.allowOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposeHeaders`<sup>Required</sup> <a name="exposeHeaders" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.exposeHeaders"></a>

```java
public java.util.List<java.lang.String> getExposeHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaUrl.LambdaUrlCorsOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaUrlCors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaUrl.LambdaUrlCors">LambdaUrlCors</a>

---



