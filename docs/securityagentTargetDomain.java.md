# `securityagentTargetDomain` Submodule <a name="`securityagentTargetDomain` Submodule" id="@cdktn/provider-awscc.securityagentTargetDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityagentTargetDomain <a name="SecurityagentTargetDomain" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityagent_target_domain awscc_securityagent_target_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_target_domain.SecurityagentTargetDomain;

SecurityagentTargetDomain.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .targetDomainName(java.lang.String)
    .verificationMethod(java.lang.String)
//  .tags(IResolvable|java.util.List<SecurityagentTargetDomainTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.targetDomainName">targetDomainName</a></code> | <code>java.lang.String</code> | Domain name of the target domain. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.verificationMethod">verificationMethod</a></code> | <code>java.lang.String</code> | Verification method for the target domain. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags">SecurityagentTargetDomainTags</a>></code> | Tags for the target domain. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `targetDomainName`<sup>Required</sup> <a name="targetDomainName" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.targetDomainName"></a>

- *Type:* java.lang.String

Domain name of the target domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityagent_target_domain#target_domain_name SecurityagentTargetDomain#target_domain_name}

---

##### `verificationMethod`<sup>Required</sup> <a name="verificationMethod" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.verificationMethod"></a>

- *Type:* java.lang.String

Verification method for the target domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityagent_target_domain#verification_method SecurityagentTargetDomain#verification_method}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags">SecurityagentTargetDomainTags</a>>

Tags for the target domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityagent_target_domain#tags SecurityagentTargetDomain#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SecurityagentTargetDomainTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags">SecurityagentTargetDomainTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityagentTargetDomain resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isConstruct"></a>

```java
import io.cdktn.providers.awscc.securityagent_target_domain.SecurityagentTargetDomain;

SecurityagentTargetDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.securityagent_target_domain.SecurityagentTargetDomain;

SecurityagentTargetDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.securityagent_target_domain.SecurityagentTargetDomain;

SecurityagentTargetDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.securityagent_target_domain.SecurityagentTargetDomain;

SecurityagentTargetDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityagentTargetDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecurityagentTargetDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityagentTargetDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityagentTargetDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityagent_target_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecurityagentTargetDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList">SecurityagentTargetDomainTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.targetDomainId">targetDomainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationDetails">verificationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference">SecurityagentTargetDomainVerificationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationStatus">verificationStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationStatusReason">verificationStatusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verifiedAt">verifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags">SecurityagentTargetDomainTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.targetDomainNameInput">targetDomainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationMethodInput">verificationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.targetDomainName">targetDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationMethod">verificationMethod</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.tags"></a>

```java
public SecurityagentTargetDomainTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList">SecurityagentTargetDomainTagsList</a>

---

##### `targetDomainId`<sup>Required</sup> <a name="targetDomainId" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.targetDomainId"></a>

```java
public java.lang.String getTargetDomainId();
```

- *Type:* java.lang.String

---

##### `verificationDetails`<sup>Required</sup> <a name="verificationDetails" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationDetails"></a>

```java
public SecurityagentTargetDomainVerificationDetailsOutputReference getVerificationDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference">SecurityagentTargetDomainVerificationDetailsOutputReference</a>

---

##### `verificationStatus`<sup>Required</sup> <a name="verificationStatus" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationStatus"></a>

```java
public java.lang.String getVerificationStatus();
```

- *Type:* java.lang.String

---

##### `verificationStatusReason`<sup>Required</sup> <a name="verificationStatusReason" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationStatusReason"></a>

```java
public java.lang.String getVerificationStatusReason();
```

- *Type:* java.lang.String

---

##### `verifiedAt`<sup>Required</sup> <a name="verifiedAt" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verifiedAt"></a>

```java
public java.lang.String getVerifiedAt();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SecurityagentTargetDomainTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags">SecurityagentTargetDomainTags</a>>

---

##### `targetDomainNameInput`<sup>Optional</sup> <a name="targetDomainNameInput" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.targetDomainNameInput"></a>

```java
public java.lang.String getTargetDomainNameInput();
```

- *Type:* java.lang.String

---

##### `verificationMethodInput`<sup>Optional</sup> <a name="verificationMethodInput" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationMethodInput"></a>

```java
public java.lang.String getVerificationMethodInput();
```

- *Type:* java.lang.String

---

##### `targetDomainName`<sup>Required</sup> <a name="targetDomainName" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.targetDomainName"></a>

```java
public java.lang.String getTargetDomainName();
```

- *Type:* java.lang.String

---

##### `verificationMethod`<sup>Required</sup> <a name="verificationMethod" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.verificationMethod"></a>

```java
public java.lang.String getVerificationMethod();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityagentTargetDomainConfig <a name="SecurityagentTargetDomainConfig" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_target_domain.SecurityagentTargetDomainConfig;

SecurityagentTargetDomainConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .targetDomainName(java.lang.String)
    .verificationMethod(java.lang.String)
//  .tags(IResolvable|java.util.List<SecurityagentTargetDomainTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.targetDomainName">targetDomainName</a></code> | <code>java.lang.String</code> | Domain name of the target domain. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.verificationMethod">verificationMethod</a></code> | <code>java.lang.String</code> | Verification method for the target domain. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags">SecurityagentTargetDomainTags</a>></code> | Tags for the target domain. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `targetDomainName`<sup>Required</sup> <a name="targetDomainName" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.targetDomainName"></a>

```java
public java.lang.String getTargetDomainName();
```

- *Type:* java.lang.String

Domain name of the target domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityagent_target_domain#target_domain_name SecurityagentTargetDomain#target_domain_name}

---

##### `verificationMethod`<sup>Required</sup> <a name="verificationMethod" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.verificationMethod"></a>

```java
public java.lang.String getVerificationMethod();
```

- *Type:* java.lang.String

Verification method for the target domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityagent_target_domain#verification_method SecurityagentTargetDomain#verification_method}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SecurityagentTargetDomainTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags">SecurityagentTargetDomainTags</a>>

Tags for the target domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityagent_target_domain#tags SecurityagentTargetDomain#tags}

---

### SecurityagentTargetDomainTags <a name="SecurityagentTargetDomainTags" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_target_domain.SecurityagentTargetDomainTags;

SecurityagentTargetDomainTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityagent_target_domain#key SecurityagentTargetDomain#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityagent_target_domain#value SecurityagentTargetDomain#value}

---

### SecurityagentTargetDomainVerificationDetails <a name="SecurityagentTargetDomainVerificationDetails" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_target_domain.SecurityagentTargetDomainVerificationDetails;

SecurityagentTargetDomainVerificationDetails.builder()
    .build();
```


### SecurityagentTargetDomainVerificationDetailsDnsTxt <a name="SecurityagentTargetDomainVerificationDetailsDnsTxt" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxt.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_target_domain.SecurityagentTargetDomainVerificationDetailsDnsTxt;

SecurityagentTargetDomainVerificationDetailsDnsTxt.builder()
    .build();
```


### SecurityagentTargetDomainVerificationDetailsHttpRoute <a name="SecurityagentTargetDomainVerificationDetailsHttpRoute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRoute.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_target_domain.SecurityagentTargetDomainVerificationDetailsHttpRoute;

SecurityagentTargetDomainVerificationDetailsHttpRoute.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### SecurityagentTargetDomainTagsList <a name="SecurityagentTargetDomainTagsList" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_target_domain.SecurityagentTargetDomainTagsList;

new SecurityagentTargetDomainTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.get"></a>

```java
public SecurityagentTargetDomainTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags">SecurityagentTargetDomainTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecurityagentTargetDomainTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags">SecurityagentTargetDomainTags</a>>

---


### SecurityagentTargetDomainTagsOutputReference <a name="SecurityagentTargetDomainTagsOutputReference" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_target_domain.SecurityagentTargetDomainTagsOutputReference;

new SecurityagentTargetDomainTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags">SecurityagentTargetDomainTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityagentTargetDomainTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainTags">SecurityagentTargetDomainTags</a>

---


### SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference <a name="SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_target_domain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference;

new SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.dnsRecordName">dnsRecordName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.dnsRecordType">dnsRecordType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxt">SecurityagentTargetDomainVerificationDetailsDnsTxt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsRecordName`<sup>Required</sup> <a name="dnsRecordName" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.dnsRecordName"></a>

```java
public java.lang.String getDnsRecordName();
```

- *Type:* java.lang.String

---

##### `dnsRecordType`<sup>Required</sup> <a name="dnsRecordType" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.dnsRecordType"></a>

```java
public java.lang.String getDnsRecordType();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.internalValue"></a>

```java
public SecurityagentTargetDomainVerificationDetailsDnsTxt getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxt">SecurityagentTargetDomainVerificationDetailsDnsTxt</a>

---


### SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference <a name="SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_target_domain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference;

new SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.routePath">routePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRoute">SecurityagentTargetDomainVerificationDetailsHttpRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `routePath`<sup>Required</sup> <a name="routePath" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.routePath"></a>

```java
public java.lang.String getRoutePath();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.internalValue"></a>

```java
public SecurityagentTargetDomainVerificationDetailsHttpRoute getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRoute">SecurityagentTargetDomainVerificationDetailsHttpRoute</a>

---


### SecurityagentTargetDomainVerificationDetailsOutputReference <a name="SecurityagentTargetDomainVerificationDetailsOutputReference" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_target_domain.SecurityagentTargetDomainVerificationDetailsOutputReference;

new SecurityagentTargetDomainVerificationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.dnsTxt">dnsTxt</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference">SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.httpRoute">httpRoute</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference">SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetails">SecurityagentTargetDomainVerificationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsTxt`<sup>Required</sup> <a name="dnsTxt" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.dnsTxt"></a>

```java
public SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference getDnsTxt();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference">SecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference</a>

---

##### `httpRoute`<sup>Required</sup> <a name="httpRoute" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.httpRoute"></a>

```java
public SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference getHttpRoute();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference">SecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference</a>

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetailsOutputReference.property.internalValue"></a>

```java
public SecurityagentTargetDomainVerificationDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentTargetDomain.SecurityagentTargetDomainVerificationDetails">SecurityagentTargetDomainVerificationDetails</a>

---



