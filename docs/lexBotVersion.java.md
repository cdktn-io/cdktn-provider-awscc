# `lexBotVersion` Submodule <a name="`lexBotVersion` Submodule" id="@cdktn/provider-awscc.lexBotVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LexBotVersion <a name="LexBotVersion" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lex_bot_version awscc_lex_bot_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer"></a>

```java
import io.cdktn.providers.awscc.lex_bot_version.LexBotVersion;

LexBotVersion.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .botId(java.lang.String)
    .botVersionLocaleSpecification(IResolvable|java.util.List<LexBotVersionBotVersionLocaleSpecification>)
//  .description(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.botId">botId</a></code> | <code>java.lang.String</code> | Unique ID of resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.botVersionLocaleSpecification">botVersionLocaleSpecification</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification">LexBotVersionBotVersionLocaleSpecification</a>></code> | Specifies the locales that Amazon Lex adds to this version. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the version. Use the description to help identify the version in lists. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `botId`<sup>Required</sup> <a name="botId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.botId"></a>

- *Type:* java.lang.String

Unique ID of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lex_bot_version#bot_id LexBotVersion#bot_id}

---

##### `botVersionLocaleSpecification`<sup>Required</sup> <a name="botVersionLocaleSpecification" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.botVersionLocaleSpecification"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification">LexBotVersionBotVersionLocaleSpecification</a>>

Specifies the locales that Amazon Lex adds to this version.

You can choose the Draft version or any other previously published version for each locale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lex_bot_version#bot_version_locale_specification LexBotVersion#bot_version_locale_specification}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the version. Use the description to help identify the version in lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lex_bot_version#description LexBotVersion#description}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.putBotVersionLocaleSpecification">putBotVersionLocaleSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBotVersionLocaleSpecification` <a name="putBotVersionLocaleSpecification" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.putBotVersionLocaleSpecification"></a>

```java
public void putBotVersionLocaleSpecification(IResolvable|java.util.List<LexBotVersionBotVersionLocaleSpecification> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.putBotVersionLocaleSpecification.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification">LexBotVersionBotVersionLocaleSpecification</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.resetDescription"></a>

```java
public void resetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LexBotVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isConstruct"></a>

```java
import io.cdktn.providers.awscc.lex_bot_version.LexBotVersion;

LexBotVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.lex_bot_version.LexBotVersion;

LexBotVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.lex_bot_version.LexBotVersion;

LexBotVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.lex_bot_version.LexBotVersion;

LexBotVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LexBotVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LexBotVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LexBotVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LexBotVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lex_bot_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LexBotVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botVersion">botVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botVersionLocaleSpecification">botVersionLocaleSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList">LexBotVersionBotVersionLocaleSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botIdInput">botIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botVersionLocaleSpecificationInput">botVersionLocaleSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification">LexBotVersionBotVersionLocaleSpecification</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botId">botId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `botVersion`<sup>Required</sup> <a name="botVersion" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botVersion"></a>

```java
public java.lang.String getBotVersion();
```

- *Type:* java.lang.String

---

##### `botVersionLocaleSpecification`<sup>Required</sup> <a name="botVersionLocaleSpecification" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botVersionLocaleSpecification"></a>

```java
public LexBotVersionBotVersionLocaleSpecificationList getBotVersionLocaleSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList">LexBotVersionBotVersionLocaleSpecificationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `botIdInput`<sup>Optional</sup> <a name="botIdInput" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botIdInput"></a>

```java
public java.lang.String getBotIdInput();
```

- *Type:* java.lang.String

---

##### `botVersionLocaleSpecificationInput`<sup>Optional</sup> <a name="botVersionLocaleSpecificationInput" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botVersionLocaleSpecificationInput"></a>

```java
public IResolvable|java.util.List<LexBotVersionBotVersionLocaleSpecification> getBotVersionLocaleSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification">LexBotVersionBotVersionLocaleSpecification</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `botId`<sup>Required</sup> <a name="botId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.botId"></a>

```java
public java.lang.String getBotId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LexBotVersionBotVersionLocaleSpecification <a name="LexBotVersionBotVersionLocaleSpecification" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.lex_bot_version.LexBotVersionBotVersionLocaleSpecification;

LexBotVersionBotVersionLocaleSpecification.builder()
    .botVersionLocaleDetails(LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails)
    .localeId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification.property.botVersionLocaleDetails">botVersionLocaleDetails</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails">LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails</a></code> | The version of a bot used for a bot locale. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification.property.localeId">localeId</a></code> | <code>java.lang.String</code> | The identifier of the language and locale that the bot will be used in. |

---

##### `botVersionLocaleDetails`<sup>Required</sup> <a name="botVersionLocaleDetails" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification.property.botVersionLocaleDetails"></a>

```java
public LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails getBotVersionLocaleDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails">LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails</a>

The version of a bot used for a bot locale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lex_bot_version#bot_version_locale_details LexBotVersion#bot_version_locale_details}

---

##### `localeId`<sup>Required</sup> <a name="localeId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification.property.localeId"></a>

```java
public java.lang.String getLocaleId();
```

- *Type:* java.lang.String

The identifier of the language and locale that the bot will be used in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lex_bot_version#locale_id LexBotVersion#locale_id}

---

### LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails <a name="LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.lex_bot_version.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails;

LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails.builder()
    .sourceBotVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails.property.sourceBotVersion">sourceBotVersion</a></code> | <code>java.lang.String</code> | The version of a bot. |

---

##### `sourceBotVersion`<sup>Required</sup> <a name="sourceBotVersion" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails.property.sourceBotVersion"></a>

```java
public java.lang.String getSourceBotVersion();
```

- *Type:* java.lang.String

The version of a bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lex_bot_version#source_bot_version LexBotVersion#source_bot_version}

---

### LexBotVersionConfig <a name="LexBotVersionConfig" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lex_bot_version.LexBotVersionConfig;

LexBotVersionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .botId(java.lang.String)
    .botVersionLocaleSpecification(IResolvable|java.util.List<LexBotVersionBotVersionLocaleSpecification>)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.botId">botId</a></code> | <code>java.lang.String</code> | Unique ID of resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.botVersionLocaleSpecification">botVersionLocaleSpecification</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification">LexBotVersionBotVersionLocaleSpecification</a>></code> | Specifies the locales that Amazon Lex adds to this version. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the version. Use the description to help identify the version in lists. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `botId`<sup>Required</sup> <a name="botId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.botId"></a>

```java
public java.lang.String getBotId();
```

- *Type:* java.lang.String

Unique ID of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lex_bot_version#bot_id LexBotVersion#bot_id}

---

##### `botVersionLocaleSpecification`<sup>Required</sup> <a name="botVersionLocaleSpecification" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.botVersionLocaleSpecification"></a>

```java
public IResolvable|java.util.List<LexBotVersionBotVersionLocaleSpecification> getBotVersionLocaleSpecification();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification">LexBotVersionBotVersionLocaleSpecification</a>>

Specifies the locales that Amazon Lex adds to this version.

You can choose the Draft version or any other previously published version for each locale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lex_bot_version#bot_version_locale_specification LexBotVersion#bot_version_locale_specification}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the version. Use the description to help identify the version in lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lex_bot_version#description LexBotVersion#description}

---

## Classes <a name="Classes" id="Classes"></a>

### LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference <a name="LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lex_bot_version.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference;

new LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.sourceBotVersionInput">sourceBotVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.sourceBotVersion">sourceBotVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails">LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceBotVersionInput`<sup>Optional</sup> <a name="sourceBotVersionInput" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.sourceBotVersionInput"></a>

```java
public java.lang.String getSourceBotVersionInput();
```

- *Type:* java.lang.String

---

##### `sourceBotVersion`<sup>Required</sup> <a name="sourceBotVersion" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.sourceBotVersion"></a>

```java
public java.lang.String getSourceBotVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails">LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails</a>

---


### LexBotVersionBotVersionLocaleSpecificationList <a name="LexBotVersionBotVersionLocaleSpecificationList" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.Initializer"></a>

```java
import io.cdktn.providers.awscc.lex_bot_version.LexBotVersionBotVersionLocaleSpecificationList;

new LexBotVersionBotVersionLocaleSpecificationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.get"></a>

```java
public LexBotVersionBotVersionLocaleSpecificationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification">LexBotVersionBotVersionLocaleSpecification</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LexBotVersionBotVersionLocaleSpecification> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification">LexBotVersionBotVersionLocaleSpecification</a>>

---


### LexBotVersionBotVersionLocaleSpecificationOutputReference <a name="LexBotVersionBotVersionLocaleSpecificationOutputReference" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lex_bot_version.LexBotVersionBotVersionLocaleSpecificationOutputReference;

new LexBotVersionBotVersionLocaleSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.putBotVersionLocaleDetails">putBotVersionLocaleDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBotVersionLocaleDetails` <a name="putBotVersionLocaleDetails" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.putBotVersionLocaleDetails"></a>

```java
public void putBotVersionLocaleDetails(LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.putBotVersionLocaleDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails">LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.botVersionLocaleDetails">botVersionLocaleDetails</a></code> | <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference">LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.botVersionLocaleDetailsInput">botVersionLocaleDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails">LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.localeIdInput">localeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.localeId">localeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification">LexBotVersionBotVersionLocaleSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `botVersionLocaleDetails`<sup>Required</sup> <a name="botVersionLocaleDetails" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.botVersionLocaleDetails"></a>

```java
public LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference getBotVersionLocaleDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference">LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetailsOutputReference</a>

---

##### `botVersionLocaleDetailsInput`<sup>Optional</sup> <a name="botVersionLocaleDetailsInput" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.botVersionLocaleDetailsInput"></a>

```java
public IResolvable|LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails getBotVersionLocaleDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails">LexBotVersionBotVersionLocaleSpecificationBotVersionLocaleDetails</a>

---

##### `localeIdInput`<sup>Optional</sup> <a name="localeIdInput" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.localeIdInput"></a>

```java
public java.lang.String getLocaleIdInput();
```

- *Type:* java.lang.String

---

##### `localeId`<sup>Required</sup> <a name="localeId" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.localeId"></a>

```java
public java.lang.String getLocaleId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|LexBotVersionBotVersionLocaleSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lexBotVersion.LexBotVersionBotVersionLocaleSpecification">LexBotVersionBotVersionLocaleSpecification</a>

---



