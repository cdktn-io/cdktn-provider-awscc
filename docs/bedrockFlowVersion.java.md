# `bedrockFlowVersion` Submodule <a name="`bedrockFlowVersion` Submodule" id="@cdktn/provider-awscc.bedrockFlowVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockFlowVersion <a name="BedrockFlowVersion" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_flow_version awscc_bedrock_flow_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersion;

BedrockFlowVersion.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .flowArn(java.lang.String)
//  .description(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.flowArn">flowArn</a></code> | <code>java.lang.String</code> | Arn representation of the Flow. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the flow version. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.flowArn"></a>

- *Type:* java.lang.String

Arn representation of the Flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_flow_version#flow_arn BedrockFlowVersion#flow_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the flow version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_flow_version#description BedrockFlowVersion#description}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.resetDescription"></a>

```java
public void resetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockFlowVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersion;

BedrockFlowVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersion;

BedrockFlowVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersion;

BedrockFlowVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersion;

BedrockFlowVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockFlowVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockFlowVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockFlowVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockFlowVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_flow_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockFlowVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.customerEncryptionKeyArn">customerEncryptionKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference">BedrockFlowVersionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.flowId">flowId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.flowArnInput">flowArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.flowArn">flowArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `customerEncryptionKeyArn`<sup>Required</sup> <a name="customerEncryptionKeyArn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.customerEncryptionKeyArn"></a>

```java
public java.lang.String getCustomerEncryptionKeyArn();
```

- *Type:* java.lang.String

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.definition"></a>

```java
public BedrockFlowVersionDefinitionOutputReference getDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference">BedrockFlowVersionDefinitionOutputReference</a>

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.flowId"></a>

```java
public java.lang.String getFlowId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `flowArnInput`<sup>Optional</sup> <a name="flowArnInput" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.flowArnInput"></a>

```java
public java.lang.String getFlowArnInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.flowArn"></a>

```java
public java.lang.String getFlowArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockFlowVersionConfig <a name="BedrockFlowVersionConfig" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionConfig;

BedrockFlowVersionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .flowArn(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.flowArn">flowArn</a></code> | <code>java.lang.String</code> | Arn representation of the Flow. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the flow version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.flowArn"></a>

```java
public java.lang.String getFlowArn();
```

- *Type:* java.lang.String

Arn representation of the Flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_flow_version#flow_arn BedrockFlowVersion#flow_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the flow version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_flow_version#description BedrockFlowVersion#description}

---

### BedrockFlowVersionDefinition <a name="BedrockFlowVersionDefinition" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinition.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinition;

BedrockFlowVersionDefinition.builder()
    .build();
```


### BedrockFlowVersionDefinitionConnections <a name="BedrockFlowVersionDefinitionConnections" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnections.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionConnections;

BedrockFlowVersionDefinitionConnections.builder()
    .build();
```


### BedrockFlowVersionDefinitionConnectionsConfiguration <a name="BedrockFlowVersionDefinitionConnectionsConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionConnectionsConfiguration;

BedrockFlowVersionDefinitionConnectionsConfiguration.builder()
    .build();
```


### BedrockFlowVersionDefinitionConnectionsConfigurationConditional <a name="BedrockFlowVersionDefinitionConnectionsConfigurationConditional" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditional"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditional.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionConnectionsConfigurationConditional;

BedrockFlowVersionDefinitionConnectionsConfigurationConditional.builder()
    .build();
```


### BedrockFlowVersionDefinitionConnectionsConfigurationData <a name="BedrockFlowVersionDefinitionConnectionsConfigurationData" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationData.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionConnectionsConfigurationData;

BedrockFlowVersionDefinitionConnectionsConfigurationData.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodes <a name="BedrockFlowVersionDefinitionNodes" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodes.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodes;

BedrockFlowVersionDefinitionNodes.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfiguration <a name="BedrockFlowVersionDefinitionNodesConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfiguration;

BedrockFlowVersionDefinitionNodesConfiguration.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationAgent <a name="BedrockFlowVersionDefinitionNodesConfigurationAgent" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgent.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationAgent;

BedrockFlowVersionDefinitionNodesConfigurationAgent.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationCondition <a name="BedrockFlowVersionDefinitionNodesConfigurationCondition" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationCondition.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationCondition;

BedrockFlowVersionDefinitionNodesConfigurationCondition.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationConditionConditions <a name="BedrockFlowVersionDefinitionNodesConfigurationConditionConditions" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditions.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationConditionConditions;

BedrockFlowVersionDefinitionNodesConfigurationConditionConditions.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationInlineCode <a name="BedrockFlowVersionDefinitionNodesConfigurationInlineCode" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCode.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationInlineCode;

BedrockFlowVersionDefinitionNodesConfigurationInlineCode.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase <a name="BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase;

BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration <a name="BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration;

BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction <a name="BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction;

BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationLex <a name="BedrockFlowVersionDefinitionNodesConfigurationLex" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLex.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationLex;

BedrockFlowVersionDefinitionNodesConfigurationLex.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationPrompt <a name="BedrockFlowVersionDefinitionNodesConfigurationPrompt" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPrompt.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationPrompt;

BedrockFlowVersionDefinitionNodesConfigurationPrompt.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration;

BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration;

BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline;

BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration;

BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText;

BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration;

BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText;

BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables;

BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource;

BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationRetrieval <a name="BedrockFlowVersionDefinitionNodesConfigurationRetrieval" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrieval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrieval.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationRetrieval;

BedrockFlowVersionDefinitionNodesConfigurationRetrieval.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration <a name="BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration;

BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3 <a name="BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3;

BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationStorage <a name="BedrockFlowVersionDefinitionNodesConfigurationStorage" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorage.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationStorage;

BedrockFlowVersionDefinitionNodesConfigurationStorage.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration <a name="BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration;

BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3 <a name="BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3;

BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesInputs <a name="BedrockFlowVersionDefinitionNodesInputs" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputs.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesInputs;

BedrockFlowVersionDefinitionNodesInputs.builder()
    .build();
```


### BedrockFlowVersionDefinitionNodesOutputs <a name="BedrockFlowVersionDefinitionNodesOutputs" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputs.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesOutputs;

BedrockFlowVersionDefinitionNodesOutputs.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference <a name="BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference;

new BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditional">BedrockFlowVersionDefinitionConnectionsConfigurationConditional</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionConnectionsConfigurationConditional getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditional">BedrockFlowVersionDefinitionConnectionsConfigurationConditional</a>

---


### BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference <a name="BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference;

new BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.sourceOutput">sourceOutput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationData">BedrockFlowVersionDefinitionConnectionsConfigurationData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceOutput`<sup>Required</sup> <a name="sourceOutput" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.sourceOutput"></a>

```java
public java.lang.String getSourceOutput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Required</sup> <a name="targetInput" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionConnectionsConfigurationData getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationData">BedrockFlowVersionDefinitionConnectionsConfigurationData</a>

---


### BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference <a name="BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference;

new BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.conditional">conditional</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference">BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.data">data</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference">BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfiguration">BedrockFlowVersionDefinitionConnectionsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditional`<sup>Required</sup> <a name="conditional" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.conditional"></a>

```java
public BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference getConditional();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference">BedrockFlowVersionDefinitionConnectionsConfigurationConditionalOutputReference</a>

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.data"></a>

```java
public BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference getData();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference">BedrockFlowVersionDefinitionConnectionsConfigurationDataOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionConnectionsConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfiguration">BedrockFlowVersionDefinitionConnectionsConfiguration</a>

---


### BedrockFlowVersionDefinitionConnectionsList <a name="BedrockFlowVersionDefinitionConnectionsList" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionConnectionsList;

new BedrockFlowVersionDefinitionConnectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.get"></a>

```java
public BedrockFlowVersionDefinitionConnectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BedrockFlowVersionDefinitionConnectionsOutputReference <a name="BedrockFlowVersionDefinitionConnectionsOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionConnectionsOutputReference;

new BedrockFlowVersionDefinitionConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference">BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnections">BedrockFlowVersionDefinitionConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.configuration"></a>

```java
public BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference">BedrockFlowVersionDefinitionConnectionsConfigurationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionConnections getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnections">BedrockFlowVersionDefinitionConnections</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.agentAliasArn">agentAliasArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgent">BedrockFlowVersionDefinitionNodesConfigurationAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentAliasArn`<sup>Required</sup> <a name="agentAliasArn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.agentAliasArn"></a>

```java
public java.lang.String getAgentAliasArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationAgent getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgent">BedrockFlowVersionDefinitionNodesConfigurationAgent</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList <a name="BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList;

new BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.get"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditions">BedrockFlowVersionDefinitionNodesConfigurationConditionConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationConditionConditions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditions">BedrockFlowVersionDefinitionNodesConfigurationConditionConditions</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList">BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationCondition">BedrockFlowVersionDefinitionNodesConfigurationCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.conditions"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList">BedrockFlowVersionDefinitionNodesConfigurationConditionConditionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationCondition">BedrockFlowVersionDefinitionNodesConfigurationCondition</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.language">language</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCode">BedrockFlowVersionDefinitionNodesConfigurationInlineCode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationInlineCode getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCode">BedrockFlowVersionDefinitionNodesConfigurationInlineCode</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.guardrailIdentifier">guardrailIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.guardrailVersion">guardrailVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration">BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `guardrailIdentifier`<sup>Required</sup> <a name="guardrailIdentifier" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.guardrailIdentifier"></a>

```java
public java.lang.String getGuardrailIdentifier();
```

- *Type:* java.lang.String

---

##### `guardrailVersion`<sup>Required</sup> <a name="guardrailVersion" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.guardrailVersion"></a>

```java
public java.lang.String getGuardrailVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration">BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfiguration</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.guardrailConfiguration">guardrailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.modelId">modelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase">BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `guardrailConfiguration`<sup>Required</sup> <a name="guardrailConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.guardrailConfiguration"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference getGuardrailConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseGuardrailConfigurationOutputReference</a>

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.knowledgeBaseId"></a>

```java
public java.lang.String getKnowledgeBaseId();
```

- *Type:* java.lang.String

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase">BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBase</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction">BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction">BedrockFlowVersionDefinitionNodesConfigurationLambdaFunction</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.botAliasArn">botAliasArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.localeId">localeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLex">BedrockFlowVersionDefinitionNodesConfigurationLex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `botAliasArn`<sup>Required</sup> <a name="botAliasArn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.botAliasArn"></a>

```java
public java.lang.String getBotAliasArn();
```

- *Type:* java.lang.String

---

##### `localeId`<sup>Required</sup> <a name="localeId" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.localeId"></a>

```java
public java.lang.String getLocaleId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationLex getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLex">BedrockFlowVersionDefinitionNodesConfigurationLex</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.agent">agent</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference">BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.collector">collector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference">BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.inlineCode">inlineCode</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference">BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.input">input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.iterator">iterator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.knowledgeBase">knowledgeBase</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference">BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.lambdaFunction">lambdaFunction</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference">BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.lex">lex</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference">BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.output">output</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.prompt">prompt</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.retrieval">retrieval</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference">BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference">BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfiguration">BedrockFlowVersionDefinitionNodesConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.agent"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference getAgent();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference">BedrockFlowVersionDefinitionNodesConfigurationAgentOutputReference</a>

---

##### `collector`<sup>Required</sup> <a name="collector" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.collector"></a>

```java
public java.lang.String getCollector();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.condition"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference">BedrockFlowVersionDefinitionNodesConfigurationConditionOutputReference</a>

---

##### `inlineCode`<sup>Required</sup> <a name="inlineCode" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.inlineCode"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference getInlineCode();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference">BedrockFlowVersionDefinitionNodesConfigurationInlineCodeOutputReference</a>

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.input"></a>

```java
public java.lang.String getInput();
```

- *Type:* java.lang.String

---

##### `iterator`<sup>Required</sup> <a name="iterator" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.iterator"></a>

```java
public java.lang.String getIterator();
```

- *Type:* java.lang.String

---

##### `knowledgeBase`<sup>Required</sup> <a name="knowledgeBase" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.knowledgeBase"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference getKnowledgeBase();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference">BedrockFlowVersionDefinitionNodesConfigurationKnowledgeBaseOutputReference</a>

---

##### `lambdaFunction`<sup>Required</sup> <a name="lambdaFunction" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.lambdaFunction"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference getLambdaFunction();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference">BedrockFlowVersionDefinitionNodesConfigurationLambdaFunctionOutputReference</a>

---

##### `lex`<sup>Required</sup> <a name="lex" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.lex"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference getLex();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference">BedrockFlowVersionDefinitionNodesConfigurationLexOutputReference</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.output"></a>

```java
public java.lang.String getOutput();
```

- *Type:* java.lang.String

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.prompt"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference getPrompt();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference</a>

---

##### `retrieval`<sup>Required</sup> <a name="retrieval" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.retrieval"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference getRetrieval();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference">BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.storage"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference getStorage();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference">BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfiguration">BedrockFlowVersionDefinitionNodesConfiguration</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.guardrailIdentifier">guardrailIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.guardrailVersion">guardrailVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration">BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `guardrailIdentifier`<sup>Required</sup> <a name="guardrailIdentifier" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.guardrailIdentifier"></a>

```java
public java.lang.String getGuardrailIdentifier();
```

- *Type:* java.lang.String

---

##### `guardrailVersion`<sup>Required</sup> <a name="guardrailVersion" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.guardrailVersion"></a>

```java
public java.lang.String getGuardrailVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration">BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfiguration</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.guardrailConfiguration">guardrailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.sourceConfiguration">sourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPrompt">BedrockFlowVersionDefinitionNodesConfigurationPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `guardrailConfiguration`<sup>Required</sup> <a name="guardrailConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.guardrailConfiguration"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference getGuardrailConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptGuardrailConfigurationOutputReference</a>

---

##### `sourceConfiguration`<sup>Required</sup> <a name="sourceConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.sourceConfiguration"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference getSourceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationPrompt getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPrompt">BedrockFlowVersionDefinitionNodesConfigurationPrompt</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.text">text</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.text"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference getText();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfiguration</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.maxTokens">maxTokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.stopSequences">stopSequences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.topP">topP</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxTokens`<sup>Required</sup> <a name="maxTokens" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.maxTokens"></a>

```java
public java.lang.Number getMaxTokens();
```

- *Type:* java.lang.Number

---

##### `stopSequences`<sup>Required</sup> <a name="stopSequences" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.stopSequences"></a>

```java
public java.util.List<java.lang.String> getStopSequences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

---

##### `topP`<sup>Required</sup> <a name="topP" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.topP"></a>

```java
public java.lang.Number getTopP();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationTextOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationText</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.inferenceConfiguration">inferenceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.modelId">modelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.templateConfiguration">templateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.templateType">templateType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inferenceConfiguration`<sup>Required</sup> <a name="inferenceConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.inferenceConfiguration"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference getInferenceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineInferenceConfigurationOutputReference</a>

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

---

##### `templateConfiguration`<sup>Required</sup> <a name="templateConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.templateConfiguration"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference getTemplateConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference</a>

---

##### `templateType`<sup>Required</sup> <a name="templateType" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.templateType"></a>

```java
public java.lang.String getTemplateType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInline</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.text">text</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.text"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference getText();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfiguration</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList;

new BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.get"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariables</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.inputVariables">inputVariables</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputVariables`<sup>Required</sup> <a name="inputVariables" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.inputVariables"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList getInputVariables();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextInputVariablesList</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationTextOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineTemplateConfigurationText</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.inline">inline</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.resource">resource</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inline`<sup>Required</sup> <a name="inline" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.inline"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference getInline();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationInlineOutputReference</a>

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.resource"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference getResource();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfiguration</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.promptArn">promptArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `promptArn`<sup>Required</sup> <a name="promptArn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.promptArn"></a>

```java
public java.lang.String getPromptArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResourceOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource">BedrockFlowVersionDefinitionNodesConfigurationPromptSourceConfigurationResource</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.serviceConfiguration">serviceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrieval">BedrockFlowVersionDefinitionNodesConfigurationRetrieval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceConfiguration`<sup>Required</sup> <a name="serviceConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.serviceConfiguration"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference getServiceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationRetrieval getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrieval">BedrockFlowVersionDefinitionNodesConfigurationRetrieval</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference">BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration">BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.s3"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference">BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration">BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfiguration</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3">BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3OutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3 getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3">BedrockFlowVersionDefinitionNodesConfigurationRetrievalServiceConfigurationS3</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.serviceConfiguration">serviceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorage">BedrockFlowVersionDefinitionNodesConfigurationStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceConfiguration`<sup>Required</sup> <a name="serviceConfiguration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.serviceConfiguration"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference getServiceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationStorage getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorage">BedrockFlowVersionDefinitionNodesConfigurationStorage</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference">BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration">BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.s3"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference getS3();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference">BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration">BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfiguration</a>

---


### BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference <a name="BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference;

new BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3">BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3OutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3 getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3">BedrockFlowVersionDefinitionNodesConfigurationStorageServiceConfigurationS3</a>

---


### BedrockFlowVersionDefinitionNodesInputsList <a name="BedrockFlowVersionDefinitionNodesInputsList" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesInputsList;

new BedrockFlowVersionDefinitionNodesInputsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.get"></a>

```java
public BedrockFlowVersionDefinitionNodesInputsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BedrockFlowVersionDefinitionNodesInputsOutputReference <a name="BedrockFlowVersionDefinitionNodesInputsOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesInputsOutputReference;

new BedrockFlowVersionDefinitionNodesInputsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputs">BedrockFlowVersionDefinitionNodesInputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesInputs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputs">BedrockFlowVersionDefinitionNodesInputs</a>

---


### BedrockFlowVersionDefinitionNodesList <a name="BedrockFlowVersionDefinitionNodesList" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesList;

new BedrockFlowVersionDefinitionNodesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.get"></a>

```java
public BedrockFlowVersionDefinitionNodesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BedrockFlowVersionDefinitionNodesOutputReference <a name="BedrockFlowVersionDefinitionNodesOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesOutputReference;

new BedrockFlowVersionDefinitionNodesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.inputs">inputs</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList">BedrockFlowVersionDefinitionNodesInputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList">BedrockFlowVersionDefinitionNodesOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodes">BedrockFlowVersionDefinitionNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.configuration"></a>

```java
public BedrockFlowVersionDefinitionNodesConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesConfigurationOutputReference">BedrockFlowVersionDefinitionNodesConfigurationOutputReference</a>

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.inputs"></a>

```java
public BedrockFlowVersionDefinitionNodesInputsList getInputs();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesInputsList">BedrockFlowVersionDefinitionNodesInputsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.outputs"></a>

```java
public BedrockFlowVersionDefinitionNodesOutputsList getOutputs();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList">BedrockFlowVersionDefinitionNodesOutputsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodes">BedrockFlowVersionDefinitionNodes</a>

---


### BedrockFlowVersionDefinitionNodesOutputsList <a name="BedrockFlowVersionDefinitionNodesOutputsList" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesOutputsList;

new BedrockFlowVersionDefinitionNodesOutputsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.get"></a>

```java
public BedrockFlowVersionDefinitionNodesOutputsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BedrockFlowVersionDefinitionNodesOutputsOutputReference <a name="BedrockFlowVersionDefinitionNodesOutputsOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionNodesOutputsOutputReference;

new BedrockFlowVersionDefinitionNodesOutputsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputs">BedrockFlowVersionDefinitionNodesOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputsOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinitionNodesOutputs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesOutputs">BedrockFlowVersionDefinitionNodesOutputs</a>

---


### BedrockFlowVersionDefinitionOutputReference <a name="BedrockFlowVersionDefinitionOutputReference" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_flow_version.BedrockFlowVersionDefinitionOutputReference;

new BedrockFlowVersionDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.property.connections">connections</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList">BedrockFlowVersionDefinitionConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.property.nodes">nodes</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList">BedrockFlowVersionDefinitionNodesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinition">BedrockFlowVersionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.property.connections"></a>

```java
public BedrockFlowVersionDefinitionConnectionsList getConnections();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionConnectionsList">BedrockFlowVersionDefinitionConnectionsList</a>

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.property.nodes"></a>

```java
public BedrockFlowVersionDefinitionNodesList getNodes();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionNodesList">BedrockFlowVersionDefinitionNodesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinitionOutputReference.property.internalValue"></a>

```java
public BedrockFlowVersionDefinition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockFlowVersion.BedrockFlowVersionDefinition">BedrockFlowVersionDefinition</a>

---



