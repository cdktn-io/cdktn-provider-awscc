# `servicecatalogServiceAction` Submodule <a name="`servicecatalogServiceAction` Submodule" id="@cdktn/provider-awscc.servicecatalogServiceAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogServiceAction <a name="ServicecatalogServiceAction" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action awscc_servicecatalog_service_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_service_action.ServicecatalogServiceAction;

ServicecatalogServiceAction.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .definition(IResolvable|java.util.List<ServicecatalogServiceActionDefinition>)
    .definitionType(java.lang.String)
    .name(java.lang.String)
//  .acceptLanguage(java.lang.String)
//  .description(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.definition">definition</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#definition ServicecatalogServiceAction#definition}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.definitionType">definitionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#definition_type ServicecatalogServiceAction#definition_type}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#name ServicecatalogServiceAction#name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#accept_language ServicecatalogServiceAction#accept_language}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#description ServicecatalogServiceAction#description}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.definition"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#definition ServicecatalogServiceAction#definition}.

---

##### `definitionType`<sup>Required</sup> <a name="definitionType" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.definitionType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#definition_type ServicecatalogServiceAction#definition_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#name ServicecatalogServiceAction#name}.

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.acceptLanguage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#accept_language ServicecatalogServiceAction#accept_language}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#description ServicecatalogServiceAction#description}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.putDefinition">putDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefinition` <a name="putDefinition" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.putDefinition"></a>

```java
public void putDefinition(IResolvable|java.util.List<ServicecatalogServiceActionDefinition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.putDefinition.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>>

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.resetAcceptLanguage"></a>

```java
public void resetAcceptLanguage()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.resetDescription"></a>

```java
public void resetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogServiceAction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.isConstruct"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_service_action.ServicecatalogServiceAction;

ServicecatalogServiceAction.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_service_action.ServicecatalogServiceAction;

ServicecatalogServiceAction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_service_action.ServicecatalogServiceAction;

ServicecatalogServiceAction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_service_action.ServicecatalogServiceAction;

ServicecatalogServiceAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServicecatalogServiceAction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ServicecatalogServiceAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServicecatalogServiceAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServicecatalogServiceAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogServiceAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList">ServicecatalogServiceActionDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.serviceActionId">serviceActionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.definitionInput">definitionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.definitionTypeInput">definitionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.definitionType">definitionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.definition"></a>

```java
public ServicecatalogServiceActionDefinitionList getDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList">ServicecatalogServiceActionDefinitionList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `serviceActionId`<sup>Required</sup> <a name="serviceActionId" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.serviceActionId"></a>

```java
public java.lang.String getServiceActionId();
```

- *Type:* java.lang.String

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.acceptLanguageInput"></a>

```java
public java.lang.String getAcceptLanguageInput();
```

- *Type:* java.lang.String

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.definitionInput"></a>

```java
public IResolvable|java.util.List<ServicecatalogServiceActionDefinition> getDefinitionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>>

---

##### `definitionTypeInput`<sup>Optional</sup> <a name="definitionTypeInput" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.definitionTypeInput"></a>

```java
public java.lang.String getDefinitionTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.acceptLanguage"></a>

```java
public java.lang.String getAcceptLanguage();
```

- *Type:* java.lang.String

---

##### `definitionType`<sup>Required</sup> <a name="definitionType" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.definitionType"></a>

```java
public java.lang.String getDefinitionType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceAction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogServiceActionConfig <a name="ServicecatalogServiceActionConfig" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_service_action.ServicecatalogServiceActionConfig;

ServicecatalogServiceActionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .definition(IResolvable|java.util.List<ServicecatalogServiceActionDefinition>)
    .definitionType(java.lang.String)
    .name(java.lang.String)
//  .acceptLanguage(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.definition">definition</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#definition ServicecatalogServiceAction#definition}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.definitionType">definitionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#definition_type ServicecatalogServiceAction#definition_type}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#name ServicecatalogServiceAction#name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#accept_language ServicecatalogServiceAction#accept_language}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#description ServicecatalogServiceAction#description}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.definition"></a>

```java
public IResolvable|java.util.List<ServicecatalogServiceActionDefinition> getDefinition();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#definition ServicecatalogServiceAction#definition}.

---

##### `definitionType`<sup>Required</sup> <a name="definitionType" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.definitionType"></a>

```java
public java.lang.String getDefinitionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#definition_type ServicecatalogServiceAction#definition_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#name ServicecatalogServiceAction#name}.

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.acceptLanguage"></a>

```java
public java.lang.String getAcceptLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#accept_language ServicecatalogServiceAction#accept_language}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#description ServicecatalogServiceAction#description}.

---

### ServicecatalogServiceActionDefinition <a name="ServicecatalogServiceActionDefinition" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_service_action.ServicecatalogServiceActionDefinition;

ServicecatalogServiceActionDefinition.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#key ServicecatalogServiceAction#key}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#value ServicecatalogServiceAction#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#key ServicecatalogServiceAction#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_service_action#value ServicecatalogServiceAction#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogServiceActionDefinitionList <a name="ServicecatalogServiceActionDefinitionList" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_service_action.ServicecatalogServiceActionDefinitionList;

new ServicecatalogServiceActionDefinitionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.get"></a>

```java
public ServicecatalogServiceActionDefinitionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ServicecatalogServiceActionDefinition> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>>

---


### ServicecatalogServiceActionDefinitionOutputReference <a name="ServicecatalogServiceActionDefinitionOutputReference" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.servicecatalog_service_action.ServicecatalogServiceActionDefinitionOutputReference;

new ServicecatalogServiceActionDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.internalValue"></a>

```java
public IResolvable|ServicecatalogServiceActionDefinition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>

---



