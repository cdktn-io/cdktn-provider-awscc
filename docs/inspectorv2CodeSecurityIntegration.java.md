# `inspectorv2CodeSecurityIntegration` Submodule <a name="`inspectorv2CodeSecurityIntegration` Submodule" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Inspectorv2CodeSecurityIntegration <a name="Inspectorv2CodeSecurityIntegration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration awscc_inspectorv2_code_security_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_code_security_integration.Inspectorv2CodeSecurityIntegration;

Inspectorv2CodeSecurityIntegration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .createIntegrationDetails(Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails)
//  .name(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .type(java.lang.String)
//  .updateIntegrationDetails(Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.createIntegrationDetails">createIntegrationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a></code> | Create Integration Details. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Code Security Integration name. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#tags Inspectorv2CodeSecurityIntegration#tags}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Integration Type. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.updateIntegrationDetails">updateIntegrationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a></code> | Update Integration Details. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createIntegrationDetails`<sup>Optional</sup> <a name="createIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.createIntegrationDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a>

Create Integration Details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#create_integration_details Inspectorv2CodeSecurityIntegration#create_integration_details}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Code Security Integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#name Inspectorv2CodeSecurityIntegration#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#tags Inspectorv2CodeSecurityIntegration#tags}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Integration Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#type Inspectorv2CodeSecurityIntegration#type}

---

##### `updateIntegrationDetails`<sup>Optional</sup> <a name="updateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.updateIntegrationDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a>

Update Integration Details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#update_integration_details Inspectorv2CodeSecurityIntegration#update_integration_details}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putCreateIntegrationDetails">putCreateIntegrationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putUpdateIntegrationDetails">putUpdateIntegrationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetCreateIntegrationDetails">resetCreateIntegrationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetUpdateIntegrationDetails">resetUpdateIntegrationDetails</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCreateIntegrationDetails` <a name="putCreateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putCreateIntegrationDetails"></a>

```java
public void putCreateIntegrationDetails(Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putCreateIntegrationDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a>

---

##### `putUpdateIntegrationDetails` <a name="putUpdateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putUpdateIntegrationDetails"></a>

```java
public void putUpdateIntegrationDetails(Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putUpdateIntegrationDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a>

---

##### `resetCreateIntegrationDetails` <a name="resetCreateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetCreateIntegrationDetails"></a>

```java
public void resetCreateIntegrationDetails()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetTags"></a>

```java
public void resetTags()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetType"></a>

```java
public void resetType()
```

##### `resetUpdateIntegrationDetails` <a name="resetUpdateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetUpdateIntegrationDetails"></a>

```java
public void resetUpdateIntegrationDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Inspectorv2CodeSecurityIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_code_security_integration.Inspectorv2CodeSecurityIntegration;

Inspectorv2CodeSecurityIntegration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_code_security_integration.Inspectorv2CodeSecurityIntegration;

Inspectorv2CodeSecurityIntegration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_code_security_integration.Inspectorv2CodeSecurityIntegration;

Inspectorv2CodeSecurityIntegration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_code_security_integration.Inspectorv2CodeSecurityIntegration;

Inspectorv2CodeSecurityIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Inspectorv2CodeSecurityIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Inspectorv2CodeSecurityIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Inspectorv2CodeSecurityIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Inspectorv2CodeSecurityIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Inspectorv2CodeSecurityIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.authorizationUrl">authorizationUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createIntegrationDetails">createIntegrationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.statusReason">statusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.updateIntegrationDetails">updateIntegrationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createIntegrationDetailsInput">createIntegrationDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.updateIntegrationDetailsInput">updateIntegrationDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.authorizationUrl"></a>

```java
public java.lang.String getAuthorizationUrl();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createIntegrationDetails`<sup>Required</sup> <a name="createIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createIntegrationDetails"></a>

```java
public Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference getCreateIntegrationDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.statusReason"></a>

```java
public java.lang.String getStatusReason();
```

- *Type:* java.lang.String

---

##### `updateIntegrationDetails`<sup>Required</sup> <a name="updateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.updateIntegrationDetails"></a>

```java
public Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference getUpdateIntegrationDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference</a>

---

##### `createIntegrationDetailsInput`<sup>Optional</sup> <a name="createIntegrationDetailsInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createIntegrationDetailsInput"></a>

```java
public IResolvable|Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails getCreateIntegrationDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `updateIntegrationDetailsInput`<sup>Optional</sup> <a name="updateIntegrationDetailsInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.updateIntegrationDetailsInput"></a>

```java
public IResolvable|Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails getUpdateIntegrationDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Inspectorv2CodeSecurityIntegrationConfig <a name="Inspectorv2CodeSecurityIntegrationConfig" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_code_security_integration.Inspectorv2CodeSecurityIntegrationConfig;

Inspectorv2CodeSecurityIntegrationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .createIntegrationDetails(Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails)
//  .name(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .type(java.lang.String)
//  .updateIntegrationDetails(Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.createIntegrationDetails">createIntegrationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a></code> | Create Integration Details. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Code Security Integration name. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#tags Inspectorv2CodeSecurityIntegration#tags}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.type">type</a></code> | <code>java.lang.String</code> | Integration Type. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.updateIntegrationDetails">updateIntegrationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a></code> | Update Integration Details. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createIntegrationDetails`<sup>Optional</sup> <a name="createIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.createIntegrationDetails"></a>

```java
public Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails getCreateIntegrationDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a>

Create Integration Details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#create_integration_details Inspectorv2CodeSecurityIntegration#create_integration_details}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Code Security Integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#name Inspectorv2CodeSecurityIntegration#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#tags Inspectorv2CodeSecurityIntegration#tags}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Integration Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#type Inspectorv2CodeSecurityIntegration#type}

---

##### `updateIntegrationDetails`<sup>Optional</sup> <a name="updateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.updateIntegrationDetails"></a>

```java
public Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails getUpdateIntegrationDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a>

Update Integration Details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#update_integration_details Inspectorv2CodeSecurityIntegration#update_integration_details}

---

### Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails <a name="Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_code_security_integration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails;

Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails.builder()
//  .gitlabSelfManaged(Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails.property.gitlabSelfManaged">gitlabSelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#gitlab_self_managed Inspectorv2CodeSecurityIntegration#gitlab_self_managed}. |

---

##### `gitlabSelfManaged`<sup>Optional</sup> <a name="gitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails.property.gitlabSelfManaged"></a>

```java
public Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged getGitlabSelfManaged();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#gitlab_self_managed Inspectorv2CodeSecurityIntegration#gitlab_self_managed}.

---

### Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged <a name="Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_code_security_integration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged;

Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.builder()
//  .accessToken(java.lang.String)
//  .instanceUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#access_token Inspectorv2CodeSecurityIntegration#access_token}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.property.instanceUrl">instanceUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#instance_url Inspectorv2CodeSecurityIntegration#instance_url}. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#access_token Inspectorv2CodeSecurityIntegration#access_token}.

---

##### `instanceUrl`<sup>Optional</sup> <a name="instanceUrl" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.property.instanceUrl"></a>

```java
public java.lang.String getInstanceUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#instance_url Inspectorv2CodeSecurityIntegration#instance_url}.

---

### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_code_security_integration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails;

Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.builder()
//  .github(Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub)
//  .gitlabSelfManaged(Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.property.github">github</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#github Inspectorv2CodeSecurityIntegration#github}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.property.gitlabSelfManaged">gitlabSelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#gitlab_self_managed Inspectorv2CodeSecurityIntegration#gitlab_self_managed}. |

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.property.github"></a>

```java
public Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub getGithub();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#github Inspectorv2CodeSecurityIntegration#github}.

---

##### `gitlabSelfManaged`<sup>Optional</sup> <a name="gitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.property.gitlabSelfManaged"></a>

```java
public Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged getGitlabSelfManaged();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#gitlab_self_managed Inspectorv2CodeSecurityIntegration#gitlab_self_managed}.

---

### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_code_security_integration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub;

Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.builder()
//  .code(java.lang.String)
//  .installationId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.property.code">code</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#code Inspectorv2CodeSecurityIntegration#code}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.property.installationId">installationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#installation_id Inspectorv2CodeSecurityIntegration#installation_id}. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#code Inspectorv2CodeSecurityIntegration#code}.

---

##### `installationId`<sup>Optional</sup> <a name="installationId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.property.installationId"></a>

```java
public java.lang.String getInstallationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#installation_id Inspectorv2CodeSecurityIntegration#installation_id}.

---

### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_code_security_integration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged;

Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged.builder()
//  .authCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged.property.authCode">authCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#auth_code Inspectorv2CodeSecurityIntegration#auth_code}. |

---

##### `authCode`<sup>Optional</sup> <a name="authCode" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged.property.authCode"></a>

```java
public java.lang.String getAuthCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_code_security_integration#auth_code Inspectorv2CodeSecurityIntegration#auth_code}.

---

## Classes <a name="Classes" id="Classes"></a>

### Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference <a name="Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_code_security_integration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference;

new Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resetInstanceUrl">resetInstanceUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resetAccessToken"></a>

```java
public void resetAccessToken()
```

##### `resetInstanceUrl` <a name="resetInstanceUrl" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resetInstanceUrl"></a>

```java
public void resetInstanceUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.accessTokenInput">accessTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.instanceUrlInput">instanceUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.instanceUrl">instanceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.accessTokenInput"></a>

```java
public java.lang.String getAccessTokenInput();
```

- *Type:* java.lang.String

---

##### `instanceUrlInput`<sup>Optional</sup> <a name="instanceUrlInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.instanceUrlInput"></a>

```java
public java.lang.String getInstanceUrlInput();
```

- *Type:* java.lang.String

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.instanceUrl"></a>

```java
public java.lang.String getInstanceUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue"></a>

```java
public IResolvable|Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a>

---


### Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference <a name="Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_code_security_integration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference;

new Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.putGitlabSelfManaged">putGitlabSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resetGitlabSelfManaged">resetGitlabSelfManaged</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGitlabSelfManaged` <a name="putGitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.putGitlabSelfManaged"></a>

```java
public void putGitlabSelfManaged(Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.putGitlabSelfManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a>

---

##### `resetGitlabSelfManaged` <a name="resetGitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resetGitlabSelfManaged"></a>

```java
public void resetGitlabSelfManaged()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.gitlabSelfManaged">gitlabSelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.gitlabSelfManagedInput">gitlabSelfManagedInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gitlabSelfManaged`<sup>Required</sup> <a name="gitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.gitlabSelfManaged"></a>

```java
public Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference getGitlabSelfManaged();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference</a>

---

##### `gitlabSelfManagedInput`<sup>Optional</sup> <a name="gitlabSelfManagedInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.gitlabSelfManagedInput"></a>

```java
public IResolvable|Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged getGitlabSelfManagedInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a>

---


### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_code_security_integration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference;

new Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resetInstallationId">resetInstallationId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resetCode"></a>

```java
public void resetCode()
```

##### `resetInstallationId` <a name="resetInstallationId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resetInstallationId"></a>

```java
public void resetInstallationId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.codeInput">codeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.installationIdInput">installationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.installationId">installationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.codeInput"></a>

```java
public java.lang.String getCodeInput();
```

- *Type:* java.lang.String

---

##### `installationIdInput`<sup>Optional</sup> <a name="installationIdInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.installationIdInput"></a>

```java
public java.lang.String getInstallationIdInput();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `installationId`<sup>Required</sup> <a name="installationId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.installationId"></a>

```java
public java.lang.String getInstallationId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.internalValue"></a>

```java
public IResolvable|Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a>

---


### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_code_security_integration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference;

new Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resetAuthCode">resetAuthCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthCode` <a name="resetAuthCode" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resetAuthCode"></a>

```java
public void resetAuthCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.authCodeInput">authCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.authCode">authCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authCodeInput`<sup>Optional</sup> <a name="authCodeInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.authCodeInput"></a>

```java
public java.lang.String getAuthCodeInput();
```

- *Type:* java.lang.String

---

##### `authCode`<sup>Required</sup> <a name="authCode" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.authCode"></a>

```java
public java.lang.String getAuthCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue"></a>

```java
public IResolvable|Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a>

---


### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.inspectorv2_code_security_integration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference;

new Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGithub">putGithub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGitlabSelfManaged">putGitlabSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resetGithub">resetGithub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resetGitlabSelfManaged">resetGitlabSelfManaged</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGithub` <a name="putGithub" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGithub"></a>

```java
public void putGithub(Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGithub.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a>

---

##### `putGitlabSelfManaged` <a name="putGitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGitlabSelfManaged"></a>

```java
public void putGitlabSelfManaged(Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGitlabSelfManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a>

---

##### `resetGithub` <a name="resetGithub" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resetGithub"></a>

```java
public void resetGithub()
```

##### `resetGitlabSelfManaged` <a name="resetGitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resetGitlabSelfManaged"></a>

```java
public void resetGitlabSelfManaged()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.github">github</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.gitlabSelfManaged">gitlabSelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.githubInput">githubInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.gitlabSelfManagedInput">gitlabSelfManagedInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.github"></a>

```java
public Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference getGithub();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference</a>

---

##### `gitlabSelfManaged`<sup>Required</sup> <a name="gitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.gitlabSelfManaged"></a>

```java
public Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference getGitlabSelfManaged();
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference</a>

---

##### `githubInput`<sup>Optional</sup> <a name="githubInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.githubInput"></a>

```java
public IResolvable|Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub getGithubInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a>

---

##### `gitlabSelfManagedInput`<sup>Optional</sup> <a name="gitlabSelfManagedInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.gitlabSelfManagedInput"></a>

```java
public IResolvable|Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged getGitlabSelfManagedInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a>

---



