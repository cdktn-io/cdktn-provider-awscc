# `greengrassv2ComponentVersion` Submodule <a name="`greengrassv2ComponentVersion` Submodule" id="@cdktn/provider-awscc.greengrassv2ComponentVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Greengrassv2ComponentVersion <a name="Greengrassv2ComponentVersion" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version awscc_greengrassv2_component_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersion;

Greengrassv2ComponentVersion.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .inlineRecipe(java.lang.String)
//  .lambdaFunction(Greengrassv2ComponentVersionLambdaFunction)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.inlineRecipe">inlineRecipe</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#inline_recipe Greengrassv2ComponentVersion#inline_recipe}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.lambdaFunction">lambdaFunction</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#lambda_function Greengrassv2ComponentVersion#lambda_function}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#tags Greengrassv2ComponentVersion#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `inlineRecipe`<sup>Optional</sup> <a name="inlineRecipe" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.inlineRecipe"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#inline_recipe Greengrassv2ComponentVersion#inline_recipe}.

---

##### `lambdaFunction`<sup>Optional</sup> <a name="lambdaFunction" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.lambdaFunction"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#lambda_function Greengrassv2ComponentVersion#lambda_function}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#tags Greengrassv2ComponentVersion#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.putLambdaFunction">putLambdaFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetInlineRecipe">resetInlineRecipe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetLambdaFunction">resetLambdaFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLambdaFunction` <a name="putLambdaFunction" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.putLambdaFunction"></a>

```java
public void putLambdaFunction(Greengrassv2ComponentVersionLambdaFunction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.putLambdaFunction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a>

---

##### `resetInlineRecipe` <a name="resetInlineRecipe" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetInlineRecipe"></a>

```java
public void resetInlineRecipe()
```

##### `resetLambdaFunction` <a name="resetLambdaFunction" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetLambdaFunction"></a>

```java
public void resetLambdaFunction()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Greengrassv2ComponentVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isConstruct"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersion;

Greengrassv2ComponentVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersion;

Greengrassv2ComponentVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersion;

Greengrassv2ComponentVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersion;

Greengrassv2ComponentVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Greengrassv2ComponentVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Greengrassv2ComponentVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Greengrassv2ComponentVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Greengrassv2ComponentVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Greengrassv2ComponentVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.componentName">componentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.componentVersion">componentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.lambdaFunction">lambdaFunction</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference">Greengrassv2ComponentVersionLambdaFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.inlineRecipeInput">inlineRecipeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.lambdaFunctionInput">lambdaFunctionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.inlineRecipe">inlineRecipe</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `componentName`<sup>Required</sup> <a name="componentName" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.componentName"></a>

```java
public java.lang.String getComponentName();
```

- *Type:* java.lang.String

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.componentVersion"></a>

```java
public java.lang.String getComponentVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lambdaFunction`<sup>Required</sup> <a name="lambdaFunction" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.lambdaFunction"></a>

```java
public Greengrassv2ComponentVersionLambdaFunctionOutputReference getLambdaFunction();
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference">Greengrassv2ComponentVersionLambdaFunctionOutputReference</a>

---

##### `inlineRecipeInput`<sup>Optional</sup> <a name="inlineRecipeInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.inlineRecipeInput"></a>

```java
public java.lang.String getInlineRecipeInput();
```

- *Type:* java.lang.String

---

##### `lambdaFunctionInput`<sup>Optional</sup> <a name="lambdaFunctionInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.lambdaFunctionInput"></a>

```java
public IResolvable|Greengrassv2ComponentVersionLambdaFunction getLambdaFunctionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `inlineRecipe`<sup>Required</sup> <a name="inlineRecipe" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.inlineRecipe"></a>

```java
public java.lang.String getInlineRecipe();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Greengrassv2ComponentVersionConfig <a name="Greengrassv2ComponentVersionConfig" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionConfig;

Greengrassv2ComponentVersionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .inlineRecipe(java.lang.String)
//  .lambdaFunction(Greengrassv2ComponentVersionLambdaFunction)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.inlineRecipe">inlineRecipe</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#inline_recipe Greengrassv2ComponentVersion#inline_recipe}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.lambdaFunction">lambdaFunction</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#lambda_function Greengrassv2ComponentVersion#lambda_function}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#tags Greengrassv2ComponentVersion#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `inlineRecipe`<sup>Optional</sup> <a name="inlineRecipe" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.inlineRecipe"></a>

```java
public java.lang.String getInlineRecipe();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#inline_recipe Greengrassv2ComponentVersion#inline_recipe}.

---

##### `lambdaFunction`<sup>Optional</sup> <a name="lambdaFunction" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.lambdaFunction"></a>

```java
public Greengrassv2ComponentVersionLambdaFunction getLambdaFunction();
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#lambda_function Greengrassv2ComponentVersion#lambda_function}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#tags Greengrassv2ComponentVersion#tags}.

---

### Greengrassv2ComponentVersionLambdaFunction <a name="Greengrassv2ComponentVersionLambdaFunction" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunction;

Greengrassv2ComponentVersionLambdaFunction.builder()
//  .componentDependencies(IResolvable|java.util.Map<java.lang.String, Greengrassv2ComponentVersionLambdaFunctionComponentDependencies>)
//  .componentLambdaParameters(Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters)
//  .componentName(java.lang.String)
//  .componentPlatforms(IResolvable|java.util.List<Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms>)
//  .componentVersion(java.lang.String)
//  .lambdaArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentDependencies">componentDependencies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#component_dependencies Greengrassv2ComponentVersion#component_dependencies}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentLambdaParameters">componentLambdaParameters</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#component_lambda_parameters Greengrassv2ComponentVersion#component_lambda_parameters}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentName">componentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#component_name Greengrassv2ComponentVersion#component_name}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentPlatforms">componentPlatforms</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#component_platforms Greengrassv2ComponentVersion#component_platforms}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentVersion">componentVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#component_version Greengrassv2ComponentVersion#component_version}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#lambda_arn Greengrassv2ComponentVersion#lambda_arn}. |

---

##### `componentDependencies`<sup>Optional</sup> <a name="componentDependencies" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentDependencies"></a>

```java
public IResolvable|java.util.Map<java.lang.String, Greengrassv2ComponentVersionLambdaFunctionComponentDependencies> getComponentDependencies();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#component_dependencies Greengrassv2ComponentVersion#component_dependencies}.

---

##### `componentLambdaParameters`<sup>Optional</sup> <a name="componentLambdaParameters" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentLambdaParameters"></a>

```java
public Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters getComponentLambdaParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#component_lambda_parameters Greengrassv2ComponentVersion#component_lambda_parameters}.

---

##### `componentName`<sup>Optional</sup> <a name="componentName" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentName"></a>

```java
public java.lang.String getComponentName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#component_name Greengrassv2ComponentVersion#component_name}.

---

##### `componentPlatforms`<sup>Optional</sup> <a name="componentPlatforms" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentPlatforms"></a>

```java
public IResolvable|java.util.List<Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms> getComponentPlatforms();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#component_platforms Greengrassv2ComponentVersion#component_platforms}.

---

##### `componentVersion`<sup>Optional</sup> <a name="componentVersion" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.componentVersion"></a>

```java
public java.lang.String getComponentVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#component_version Greengrassv2ComponentVersion#component_version}.

---

##### `lambdaArn`<sup>Optional</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#lambda_arn Greengrassv2ComponentVersion#lambda_arn}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentDependencies <a name="Greengrassv2ComponentVersionLambdaFunctionComponentDependencies" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies;

Greengrassv2ComponentVersionLambdaFunctionComponentDependencies.builder()
//  .dependencyType(java.lang.String)
//  .versionRequirement(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies.property.dependencyType">dependencyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#dependency_type Greengrassv2ComponentVersion#dependency_type}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies.property.versionRequirement">versionRequirement</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#version_requirement Greengrassv2ComponentVersion#version_requirement}. |

---

##### `dependencyType`<sup>Optional</sup> <a name="dependencyType" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies.property.dependencyType"></a>

```java
public java.lang.String getDependencyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#dependency_type Greengrassv2ComponentVersion#dependency_type}.

---

##### `versionRequirement`<sup>Optional</sup> <a name="versionRequirement" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies.property.versionRequirement"></a>

```java
public java.lang.String getVersionRequirement();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#version_requirement Greengrassv2ComponentVersion#version_requirement}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters;

Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.builder()
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .eventSources(IResolvable|java.util.List<Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources>)
//  .execArgs(java.util.List<java.lang.String>)
//  .inputPayloadEncodingType(java.lang.String)
//  .linuxProcessParams(Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams)
//  .maxIdleTimeInSeconds(java.lang.Number)
//  .maxInstancesCount(java.lang.Number)
//  .maxQueueSize(java.lang.Number)
//  .pinned(java.lang.Boolean|IResolvable)
//  .statusTimeoutInSeconds(java.lang.Number)
//  .timeoutInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#environment_variables Greengrassv2ComponentVersion#environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.eventSources">eventSources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#event_sources Greengrassv2ComponentVersion#event_sources}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.execArgs">execArgs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#exec_args Greengrassv2ComponentVersion#exec_args}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.inputPayloadEncodingType">inputPayloadEncodingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#input_payload_encoding_type Greengrassv2ComponentVersion#input_payload_encoding_type}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.linuxProcessParams">linuxProcessParams</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#linux_process_params Greengrassv2ComponentVersion#linux_process_params}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.maxIdleTimeInSeconds">maxIdleTimeInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#max_idle_time_in_seconds Greengrassv2ComponentVersion#max_idle_time_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.maxInstancesCount">maxInstancesCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#max_instances_count Greengrassv2ComponentVersion#max_instances_count}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.maxQueueSize">maxQueueSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#max_queue_size Greengrassv2ComponentVersion#max_queue_size}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.pinned">pinned</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#pinned Greengrassv2ComponentVersion#pinned}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.statusTimeoutInSeconds">statusTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#status_timeout_in_seconds Greengrassv2ComponentVersion#status_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#timeout_in_seconds Greengrassv2ComponentVersion#timeout_in_seconds}. |

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#environment_variables Greengrassv2ComponentVersion#environment_variables}.

---

##### `eventSources`<sup>Optional</sup> <a name="eventSources" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.eventSources"></a>

```java
public IResolvable|java.util.List<Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources> getEventSources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#event_sources Greengrassv2ComponentVersion#event_sources}.

---

##### `execArgs`<sup>Optional</sup> <a name="execArgs" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.execArgs"></a>

```java
public java.util.List<java.lang.String> getExecArgs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#exec_args Greengrassv2ComponentVersion#exec_args}.

---

##### `inputPayloadEncodingType`<sup>Optional</sup> <a name="inputPayloadEncodingType" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.inputPayloadEncodingType"></a>

```java
public java.lang.String getInputPayloadEncodingType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#input_payload_encoding_type Greengrassv2ComponentVersion#input_payload_encoding_type}.

---

##### `linuxProcessParams`<sup>Optional</sup> <a name="linuxProcessParams" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.linuxProcessParams"></a>

```java
public Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams getLinuxProcessParams();
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#linux_process_params Greengrassv2ComponentVersion#linux_process_params}.

---

##### `maxIdleTimeInSeconds`<sup>Optional</sup> <a name="maxIdleTimeInSeconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.maxIdleTimeInSeconds"></a>

```java
public java.lang.Number getMaxIdleTimeInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#max_idle_time_in_seconds Greengrassv2ComponentVersion#max_idle_time_in_seconds}.

---

##### `maxInstancesCount`<sup>Optional</sup> <a name="maxInstancesCount" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.maxInstancesCount"></a>

```java
public java.lang.Number getMaxInstancesCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#max_instances_count Greengrassv2ComponentVersion#max_instances_count}.

---

##### `maxQueueSize`<sup>Optional</sup> <a name="maxQueueSize" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.maxQueueSize"></a>

```java
public java.lang.Number getMaxQueueSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#max_queue_size Greengrassv2ComponentVersion#max_queue_size}.

---

##### `pinned`<sup>Optional</sup> <a name="pinned" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.pinned"></a>

```java
public java.lang.Boolean|IResolvable getPinned();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#pinned Greengrassv2ComponentVersion#pinned}.

---

##### `statusTimeoutInSeconds`<sup>Optional</sup> <a name="statusTimeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.statusTimeoutInSeconds"></a>

```java
public java.lang.Number getStatusTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#status_timeout_in_seconds Greengrassv2ComponentVersion#status_timeout_in_seconds}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#timeout_in_seconds Greengrassv2ComponentVersion#timeout_in_seconds}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources;

Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources.builder()
//  .topic(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources.property.topic">topic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#topic Greengrassv2ComponentVersion#topic}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#type Greengrassv2ComponentVersion#type}. |

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#topic Greengrassv2ComponentVersion#topic}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#type Greengrassv2ComponentVersion#type}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams;

Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams.builder()
//  .containerParams(Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams)
//  .isolationMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams.property.containerParams">containerParams</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#container_params Greengrassv2ComponentVersion#container_params}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams.property.isolationMode">isolationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#isolation_mode Greengrassv2ComponentVersion#isolation_mode}. |

---

##### `containerParams`<sup>Optional</sup> <a name="containerParams" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams.property.containerParams"></a>

```java
public Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams getContainerParams();
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#container_params Greengrassv2ComponentVersion#container_params}.

---

##### `isolationMode`<sup>Optional</sup> <a name="isolationMode" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams.property.isolationMode"></a>

```java
public java.lang.String getIsolationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#isolation_mode Greengrassv2ComponentVersion#isolation_mode}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams;

Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.builder()
//  .devices(IResolvable|java.util.List<Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices>)
//  .memorySizeInKb(java.lang.Number)
//  .mountRoSysfs(java.lang.Boolean|IResolvable)
//  .volumes(IResolvable|java.util.List<Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.devices">devices</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#devices Greengrassv2ComponentVersion#devices}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.memorySizeInKb">memorySizeInKb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#memory_size_in_kb Greengrassv2ComponentVersion#memory_size_in_kb}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.mountRoSysfs">mountRoSysfs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#mount_ro_sysfs Greengrassv2ComponentVersion#mount_ro_sysfs}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.volumes">volumes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#volumes Greengrassv2ComponentVersion#volumes}. |

---

##### `devices`<sup>Optional</sup> <a name="devices" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.devices"></a>

```java
public IResolvable|java.util.List<Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices> getDevices();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#devices Greengrassv2ComponentVersion#devices}.

---

##### `memorySizeInKb`<sup>Optional</sup> <a name="memorySizeInKb" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.memorySizeInKb"></a>

```java
public java.lang.Number getMemorySizeInKb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#memory_size_in_kb Greengrassv2ComponentVersion#memory_size_in_kb}.

---

##### `mountRoSysfs`<sup>Optional</sup> <a name="mountRoSysfs" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.mountRoSysfs"></a>

```java
public java.lang.Boolean|IResolvable getMountRoSysfs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#mount_ro_sysfs Greengrassv2ComponentVersion#mount_ro_sysfs}.

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams.property.volumes"></a>

```java
public IResolvable|java.util.List<Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes> getVolumes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#volumes Greengrassv2ComponentVersion#volumes}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices;

Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.builder()
//  .addGroupOwner(java.lang.Boolean|IResolvable)
//  .path(java.lang.String)
//  .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.property.addGroupOwner">addGroupOwner</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#add_group_owner Greengrassv2ComponentVersion#add_group_owner}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#path Greengrassv2ComponentVersion#path}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.property.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#permission Greengrassv2ComponentVersion#permission}. |

---

##### `addGroupOwner`<sup>Optional</sup> <a name="addGroupOwner" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.property.addGroupOwner"></a>

```java
public java.lang.Boolean|IResolvable getAddGroupOwner();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#add_group_owner Greengrassv2ComponentVersion#add_group_owner}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#path Greengrassv2ComponentVersion#path}.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#permission Greengrassv2ComponentVersion#permission}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes;

Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.builder()
//  .addGroupOwner(java.lang.Boolean|IResolvable)
//  .destinationPath(java.lang.String)
//  .permission(java.lang.String)
//  .sourcePath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.addGroupOwner">addGroupOwner</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#add_group_owner Greengrassv2ComponentVersion#add_group_owner}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.destinationPath">destinationPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#destination_path Greengrassv2ComponentVersion#destination_path}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.permission">permission</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#permission Greengrassv2ComponentVersion#permission}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.sourcePath">sourcePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#source_path Greengrassv2ComponentVersion#source_path}. |

---

##### `addGroupOwner`<sup>Optional</sup> <a name="addGroupOwner" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.addGroupOwner"></a>

```java
public java.lang.Boolean|IResolvable getAddGroupOwner();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#add_group_owner Greengrassv2ComponentVersion#add_group_owner}.

---

##### `destinationPath`<sup>Optional</sup> <a name="destinationPath" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.destinationPath"></a>

```java
public java.lang.String getDestinationPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#destination_path Greengrassv2ComponentVersion#destination_path}.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#permission Greengrassv2ComponentVersion#permission}.

---

##### `sourcePath`<sup>Optional</sup> <a name="sourcePath" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes.property.sourcePath"></a>

```java
public java.lang.String getSourcePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#source_path Greengrassv2ComponentVersion#source_path}.

---

### Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms <a name="Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms;

Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms.builder()
//  .attributes(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#attributes Greengrassv2ComponentVersion#attributes}. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#name Greengrassv2ComponentVersion#name}. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#attributes Greengrassv2ComponentVersion#attributes}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/greengrassv2_component_version#name Greengrassv2ComponentVersion#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap <a name="Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap;

new Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.get"></a>

```java
public Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, Greengrassv2ComponentVersionLambdaFunctionComponentDependencies> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference;

new Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resetDependencyType">resetDependencyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resetVersionRequirement">resetVersionRequirement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDependencyType` <a name="resetDependencyType" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resetDependencyType"></a>

```java
public void resetDependencyType()
```

##### `resetVersionRequirement` <a name="resetVersionRequirement" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.resetVersionRequirement"></a>

```java
public void resetVersionRequirement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.dependencyTypeInput">dependencyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.versionRequirementInput">versionRequirementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.dependencyType">dependencyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.versionRequirement">versionRequirement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dependencyTypeInput`<sup>Optional</sup> <a name="dependencyTypeInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.dependencyTypeInput"></a>

```java
public java.lang.String getDependencyTypeInput();
```

- *Type:* java.lang.String

---

##### `versionRequirementInput`<sup>Optional</sup> <a name="versionRequirementInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.versionRequirementInput"></a>

```java
public java.lang.String getVersionRequirementInput();
```

- *Type:* java.lang.String

---

##### `dependencyType`<sup>Required</sup> <a name="dependencyType" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.dependencyType"></a>

```java
public java.lang.String getDependencyType();
```

- *Type:* java.lang.String

---

##### `versionRequirement`<sup>Required</sup> <a name="versionRequirement" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.versionRequirement"></a>

```java
public java.lang.String getVersionRequirement();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference.property.internalValue"></a>

```java
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentDependencies getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.get"></a>

```java
public Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resetTopic">resetTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTopic` <a name="resetTopic" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resetTopic"></a>

```java
public void resetTopic()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.topicInput">topicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.topicInput"></a>

```java
public java.lang.String getTopicInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.get"></a>

```java
public Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resetAddGroupOwner">resetAddGroupOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddGroupOwner` <a name="resetAddGroupOwner" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resetAddGroupOwner"></a>

```java
public void resetAddGroupOwner()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetPermission` <a name="resetPermission" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.resetPermission"></a>

```java
public void resetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.addGroupOwnerInput">addGroupOwnerInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.addGroupOwner">addGroupOwner</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addGroupOwnerInput`<sup>Optional</sup> <a name="addGroupOwnerInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.addGroupOwnerInput"></a>

```java
public java.lang.Boolean|IResolvable getAddGroupOwnerInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `addGroupOwner`<sup>Required</sup> <a name="addGroupOwner" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.addGroupOwner"></a>

```java
public java.lang.Boolean|IResolvable getAddGroupOwner();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference.property.internalValue"></a>

```java
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.putDevices">putDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetDevices">resetDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetMemorySizeInKb">resetMemorySizeInKb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetMountRoSysfs">resetMountRoSysfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetVolumes">resetVolumes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDevices` <a name="putDevices" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.putDevices"></a>

```java
public void putDevices(IResolvable|java.util.List<Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.putDevices.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>>

---

##### `putVolumes` <a name="putVolumes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.putVolumes"></a>

```java
public void putVolumes(IResolvable|java.util.List<Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.putVolumes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>>

---

##### `resetDevices` <a name="resetDevices" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetDevices"></a>

```java
public void resetDevices()
```

##### `resetMemorySizeInKb` <a name="resetMemorySizeInKb" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetMemorySizeInKb"></a>

```java
public void resetMemorySizeInKb()
```

##### `resetMountRoSysfs` <a name="resetMountRoSysfs" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetMountRoSysfs"></a>

```java
public void resetMountRoSysfs()
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.resetVolumes"></a>

```java
public void resetVolumes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.devices">devices</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.devicesInput">devicesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.memorySizeInKbInput">memorySizeInKbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.mountRoSysfsInput">mountRoSysfsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.volumesInput">volumesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.memorySizeInKb">memorySizeInKb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.mountRoSysfs">mountRoSysfs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `devices`<sup>Required</sup> <a name="devices" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.devices"></a>

```java
public Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList getDevices();
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList</a>

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.volumes"></a>

```java
public Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList getVolumes();
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList</a>

---

##### `devicesInput`<sup>Optional</sup> <a name="devicesInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.devicesInput"></a>

```java
public IResolvable|java.util.List<Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices> getDevicesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices</a>>

---

##### `memorySizeInKbInput`<sup>Optional</sup> <a name="memorySizeInKbInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.memorySizeInKbInput"></a>

```java
public java.lang.Number getMemorySizeInKbInput();
```

- *Type:* java.lang.Number

---

##### `mountRoSysfsInput`<sup>Optional</sup> <a name="mountRoSysfsInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.mountRoSysfsInput"></a>

```java
public java.lang.Boolean|IResolvable getMountRoSysfsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.volumesInput"></a>

```java
public IResolvable|java.util.List<Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes> getVolumesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>>

---

##### `memorySizeInKb`<sup>Required</sup> <a name="memorySizeInKb" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.memorySizeInKb"></a>

```java
public java.lang.Number getMemorySizeInKb();
```

- *Type:* java.lang.Number

---

##### `mountRoSysfs`<sup>Required</sup> <a name="mountRoSysfs" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.mountRoSysfs"></a>

```java
public java.lang.Boolean|IResolvable getMountRoSysfs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference.property.internalValue"></a>

```java
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.get"></a>

```java
public Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetAddGroupOwner">resetAddGroupOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetDestinationPath">resetDestinationPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetPermission">resetPermission</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetSourcePath">resetSourcePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddGroupOwner` <a name="resetAddGroupOwner" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetAddGroupOwner"></a>

```java
public void resetAddGroupOwner()
```

##### `resetDestinationPath` <a name="resetDestinationPath" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetDestinationPath"></a>

```java
public void resetDestinationPath()
```

##### `resetPermission` <a name="resetPermission" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetPermission"></a>

```java
public void resetPermission()
```

##### `resetSourcePath` <a name="resetSourcePath" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.resetSourcePath"></a>

```java
public void resetSourcePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.addGroupOwnerInput">addGroupOwnerInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.destinationPathInput">destinationPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.sourcePathInput">sourcePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.addGroupOwner">addGroupOwner</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.destinationPath">destinationPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.sourcePath">sourcePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addGroupOwnerInput`<sup>Optional</sup> <a name="addGroupOwnerInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.addGroupOwnerInput"></a>

```java
public java.lang.Boolean|IResolvable getAddGroupOwnerInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `destinationPathInput`<sup>Optional</sup> <a name="destinationPathInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.destinationPathInput"></a>

```java
public java.lang.String getDestinationPathInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `sourcePathInput`<sup>Optional</sup> <a name="sourcePathInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.sourcePathInput"></a>

```java
public java.lang.String getSourcePathInput();
```

- *Type:* java.lang.String

---

##### `addGroupOwner`<sup>Required</sup> <a name="addGroupOwner" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.addGroupOwner"></a>

```java
public java.lang.Boolean|IResolvable getAddGroupOwner();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `destinationPath`<sup>Required</sup> <a name="destinationPath" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.destinationPath"></a>

```java
public java.lang.String getDestinationPath();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `sourcePath`<sup>Required</sup> <a name="sourcePath" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.sourcePath"></a>

```java
public java.lang.String getSourcePath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference.property.internalValue"></a>

```java
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes</a>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.putContainerParams">putContainerParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resetContainerParams">resetContainerParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resetIsolationMode">resetIsolationMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerParams` <a name="putContainerParams" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.putContainerParams"></a>

```java
public void putContainerParams(Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.putContainerParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a>

---

##### `resetContainerParams` <a name="resetContainerParams" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resetContainerParams"></a>

```java
public void resetContainerParams()
```

##### `resetIsolationMode` <a name="resetIsolationMode" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.resetIsolationMode"></a>

```java
public void resetIsolationMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.containerParams">containerParams</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.containerParamsInput">containerParamsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.isolationModeInput">isolationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.isolationMode">isolationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerParams`<sup>Required</sup> <a name="containerParams" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.containerParams"></a>

```java
public Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference getContainerParams();
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference</a>

---

##### `containerParamsInput`<sup>Optional</sup> <a name="containerParamsInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.containerParamsInput"></a>

```java
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams getContainerParamsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams</a>

---

##### `isolationModeInput`<sup>Optional</sup> <a name="isolationModeInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.isolationModeInput"></a>

```java
public java.lang.String getIsolationModeInput();
```

- *Type:* java.lang.String

---

##### `isolationMode`<sup>Required</sup> <a name="isolationMode" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.isolationMode"></a>

```java
public java.lang.String getIsolationMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference.property.internalValue"></a>

```java
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference;

new Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.putEventSources">putEventSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.putLinuxProcessParams">putLinuxProcessParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetEventSources">resetEventSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetExecArgs">resetExecArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetInputPayloadEncodingType">resetInputPayloadEncodingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetLinuxProcessParams">resetLinuxProcessParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetMaxIdleTimeInSeconds">resetMaxIdleTimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetMaxInstancesCount">resetMaxInstancesCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetMaxQueueSize">resetMaxQueueSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetPinned">resetPinned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetStatusTimeoutInSeconds">resetStatusTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEventSources` <a name="putEventSources" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.putEventSources"></a>

```java
public void putEventSources(IResolvable|java.util.List<Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.putEventSources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>>

---

##### `putLinuxProcessParams` <a name="putLinuxProcessParams" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.putLinuxProcessParams"></a>

```java
public void putLinuxProcessParams(Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.putLinuxProcessParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a>

---

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetEventSources` <a name="resetEventSources" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetEventSources"></a>

```java
public void resetEventSources()
```

##### `resetExecArgs` <a name="resetExecArgs" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetExecArgs"></a>

```java
public void resetExecArgs()
```

##### `resetInputPayloadEncodingType` <a name="resetInputPayloadEncodingType" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetInputPayloadEncodingType"></a>

```java
public void resetInputPayloadEncodingType()
```

##### `resetLinuxProcessParams` <a name="resetLinuxProcessParams" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetLinuxProcessParams"></a>

```java
public void resetLinuxProcessParams()
```

##### `resetMaxIdleTimeInSeconds` <a name="resetMaxIdleTimeInSeconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetMaxIdleTimeInSeconds"></a>

```java
public void resetMaxIdleTimeInSeconds()
```

##### `resetMaxInstancesCount` <a name="resetMaxInstancesCount" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetMaxInstancesCount"></a>

```java
public void resetMaxInstancesCount()
```

##### `resetMaxQueueSize` <a name="resetMaxQueueSize" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetMaxQueueSize"></a>

```java
public void resetMaxQueueSize()
```

##### `resetPinned` <a name="resetPinned" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetPinned"></a>

```java
public void resetPinned()
```

##### `resetStatusTimeoutInSeconds` <a name="resetStatusTimeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetStatusTimeoutInSeconds"></a>

```java
public void resetStatusTimeoutInSeconds()
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.resetTimeoutInSeconds"></a>

```java
public void resetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.eventSources">eventSources</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.linuxProcessParams">linuxProcessParams</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.eventSourcesInput">eventSourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.execArgsInput">execArgsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.inputPayloadEncodingTypeInput">inputPayloadEncodingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.linuxProcessParamsInput">linuxProcessParamsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxIdleTimeInSecondsInput">maxIdleTimeInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxInstancesCountInput">maxInstancesCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxQueueSizeInput">maxQueueSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.pinnedInput">pinnedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.statusTimeoutInSecondsInput">statusTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.execArgs">execArgs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.inputPayloadEncodingType">inputPayloadEncodingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxIdleTimeInSeconds">maxIdleTimeInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxInstancesCount">maxInstancesCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxQueueSize">maxQueueSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.pinned">pinned</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.statusTimeoutInSeconds">statusTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventSources`<sup>Required</sup> <a name="eventSources" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.eventSources"></a>

```java
public Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList getEventSources();
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList</a>

---

##### `linuxProcessParams`<sup>Required</sup> <a name="linuxProcessParams" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.linuxProcessParams"></a>

```java
public Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference getLinuxProcessParams();
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference</a>

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `eventSourcesInput`<sup>Optional</sup> <a name="eventSourcesInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.eventSourcesInput"></a>

```java
public IResolvable|java.util.List<Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources> getEventSourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources</a>>

---

##### `execArgsInput`<sup>Optional</sup> <a name="execArgsInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.execArgsInput"></a>

```java
public java.util.List<java.lang.String> getExecArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `inputPayloadEncodingTypeInput`<sup>Optional</sup> <a name="inputPayloadEncodingTypeInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.inputPayloadEncodingTypeInput"></a>

```java
public java.lang.String getInputPayloadEncodingTypeInput();
```

- *Type:* java.lang.String

---

##### `linuxProcessParamsInput`<sup>Optional</sup> <a name="linuxProcessParamsInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.linuxProcessParamsInput"></a>

```java
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams getLinuxProcessParamsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams</a>

---

##### `maxIdleTimeInSecondsInput`<sup>Optional</sup> <a name="maxIdleTimeInSecondsInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxIdleTimeInSecondsInput"></a>

```java
public java.lang.Number getMaxIdleTimeInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maxInstancesCountInput`<sup>Optional</sup> <a name="maxInstancesCountInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxInstancesCountInput"></a>

```java
public java.lang.Number getMaxInstancesCountInput();
```

- *Type:* java.lang.Number

---

##### `maxQueueSizeInput`<sup>Optional</sup> <a name="maxQueueSizeInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxQueueSizeInput"></a>

```java
public java.lang.Number getMaxQueueSizeInput();
```

- *Type:* java.lang.Number

---

##### `pinnedInput`<sup>Optional</sup> <a name="pinnedInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.pinnedInput"></a>

```java
public java.lang.Boolean|IResolvable getPinnedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `statusTimeoutInSecondsInput`<sup>Optional</sup> <a name="statusTimeoutInSecondsInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.statusTimeoutInSecondsInput"></a>

```java
public java.lang.Number getStatusTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.timeoutInSecondsInput"></a>

```java
public java.lang.Number getTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `execArgs`<sup>Required</sup> <a name="execArgs" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.execArgs"></a>

```java
public java.util.List<java.lang.String> getExecArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `inputPayloadEncodingType`<sup>Required</sup> <a name="inputPayloadEncodingType" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.inputPayloadEncodingType"></a>

```java
public java.lang.String getInputPayloadEncodingType();
```

- *Type:* java.lang.String

---

##### `maxIdleTimeInSeconds`<sup>Required</sup> <a name="maxIdleTimeInSeconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxIdleTimeInSeconds"></a>

```java
public java.lang.Number getMaxIdleTimeInSeconds();
```

- *Type:* java.lang.Number

---

##### `maxInstancesCount`<sup>Required</sup> <a name="maxInstancesCount" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxInstancesCount"></a>

```java
public java.lang.Number getMaxInstancesCount();
```

- *Type:* java.lang.Number

---

##### `maxQueueSize`<sup>Required</sup> <a name="maxQueueSize" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.maxQueueSize"></a>

```java
public java.lang.Number getMaxQueueSize();
```

- *Type:* java.lang.Number

---

##### `pinned`<sup>Required</sup> <a name="pinned" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.pinned"></a>

```java
public java.lang.Boolean|IResolvable getPinned();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `statusTimeoutInSeconds`<sup>Required</sup> <a name="statusTimeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.statusTimeoutInSeconds"></a>

```java
public java.lang.Number getStatusTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList <a name="Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList;

new Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.get"></a>

```java
public Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>>

---


### Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference;

new Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.attributesInput">attributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.attributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference.property.internalValue"></a>

```java
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>

---


### Greengrassv2ComponentVersionLambdaFunctionOutputReference <a name="Greengrassv2ComponentVersionLambdaFunctionOutputReference" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.greengrassv2_component_version.Greengrassv2ComponentVersionLambdaFunctionOutputReference;

new Greengrassv2ComponentVersionLambdaFunctionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentDependencies">putComponentDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentLambdaParameters">putComponentLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentPlatforms">putComponentPlatforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentDependencies">resetComponentDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentLambdaParameters">resetComponentLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentName">resetComponentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentPlatforms">resetComponentPlatforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentVersion">resetComponentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetLambdaArn">resetLambdaArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putComponentDependencies` <a name="putComponentDependencies" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentDependencies"></a>

```java
public void putComponentDependencies(IResolvable|java.util.Map<java.lang.String, Greengrassv2ComponentVersionLambdaFunctionComponentDependencies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentDependencies.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>>

---

##### `putComponentLambdaParameters` <a name="putComponentLambdaParameters" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentLambdaParameters"></a>

```java
public void putComponentLambdaParameters(Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentLambdaParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a>

---

##### `putComponentPlatforms` <a name="putComponentPlatforms" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentPlatforms"></a>

```java
public void putComponentPlatforms(IResolvable|java.util.List<Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.putComponentPlatforms.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>>

---

##### `resetComponentDependencies` <a name="resetComponentDependencies" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentDependencies"></a>

```java
public void resetComponentDependencies()
```

##### `resetComponentLambdaParameters` <a name="resetComponentLambdaParameters" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentLambdaParameters"></a>

```java
public void resetComponentLambdaParameters()
```

##### `resetComponentName` <a name="resetComponentName" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentName"></a>

```java
public void resetComponentName()
```

##### `resetComponentPlatforms` <a name="resetComponentPlatforms" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentPlatforms"></a>

```java
public void resetComponentPlatforms()
```

##### `resetComponentVersion` <a name="resetComponentVersion" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetComponentVersion"></a>

```java
public void resetComponentVersion()
```

##### `resetLambdaArn` <a name="resetLambdaArn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.resetLambdaArn"></a>

```java
public void resetLambdaArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentDependencies">componentDependencies</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap">Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentLambdaParameters">componentLambdaParameters</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentPlatforms">componentPlatforms</a></code> | <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList">Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentDependenciesInput">componentDependenciesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentLambdaParametersInput">componentLambdaParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentNameInput">componentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentPlatformsInput">componentPlatformsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentVersionInput">componentVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentName">componentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentVersion">componentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `componentDependencies`<sup>Required</sup> <a name="componentDependencies" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentDependencies"></a>

```java
public Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap getComponentDependencies();
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap">Greengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap</a>

---

##### `componentLambdaParameters`<sup>Required</sup> <a name="componentLambdaParameters" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentLambdaParameters"></a>

```java
public Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference getComponentLambdaParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference</a>

---

##### `componentPlatforms`<sup>Required</sup> <a name="componentPlatforms" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentPlatforms"></a>

```java
public Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList getComponentPlatforms();
```

- *Type:* <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList">Greengrassv2ComponentVersionLambdaFunctionComponentPlatformsList</a>

---

##### `componentDependenciesInput`<sup>Optional</sup> <a name="componentDependenciesInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentDependenciesInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, Greengrassv2ComponentVersionLambdaFunctionComponentDependencies> getComponentDependenciesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentDependencies">Greengrassv2ComponentVersionLambdaFunctionComponentDependencies</a>>

---

##### `componentLambdaParametersInput`<sup>Optional</sup> <a name="componentLambdaParametersInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentLambdaParametersInput"></a>

```java
public IResolvable|Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters getComponentLambdaParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters">Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters</a>

---

##### `componentNameInput`<sup>Optional</sup> <a name="componentNameInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentNameInput"></a>

```java
public java.lang.String getComponentNameInput();
```

- *Type:* java.lang.String

---

##### `componentPlatformsInput`<sup>Optional</sup> <a name="componentPlatformsInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentPlatformsInput"></a>

```java
public IResolvable|java.util.List<Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms> getComponentPlatformsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms">Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms</a>>

---

##### `componentVersionInput`<sup>Optional</sup> <a name="componentVersionInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentVersionInput"></a>

```java
public java.lang.String getComponentVersionInput();
```

- *Type:* java.lang.String

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.lambdaArnInput"></a>

```java
public java.lang.String getLambdaArnInput();
```

- *Type:* java.lang.String

---

##### `componentName`<sup>Required</sup> <a name="componentName" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentName"></a>

```java
public java.lang.String getComponentName();
```

- *Type:* java.lang.String

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.componentVersion"></a>

```java
public java.lang.String getComponentVersion();
```

- *Type:* java.lang.String

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunctionOutputReference.property.internalValue"></a>

```java
public IResolvable|Greengrassv2ComponentVersionLambdaFunction getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.greengrassv2ComponentVersion.Greengrassv2ComponentVersionLambdaFunction">Greengrassv2ComponentVersionLambdaFunction</a>

---



