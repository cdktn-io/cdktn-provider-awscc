# `refactorspacesApplication` Submodule <a name="`refactorspacesApplication` Submodule" id="@cdktn/provider-awscc.refactorspacesApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RefactorspacesApplication <a name="RefactorspacesApplication" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application awscc_refactorspaces_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer"></a>

```java
import io.cdktn.providers.awscc.refactorspaces_application.RefactorspacesApplication;

RefactorspacesApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .environmentIdentifier(java.lang.String)
    .name(java.lang.String)
    .proxyType(java.lang.String)
    .vpcId(java.lang.String)
//  .apiGatewayProxy(RefactorspacesApplicationApiGatewayProxy)
//  .tags(IResolvable|java.util.List<RefactorspacesApplicationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.environmentIdentifier">environmentIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#environment_identifier RefactorspacesApplication#environment_identifier}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#name RefactorspacesApplication#name}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.proxyType">proxyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#proxy_type RefactorspacesApplication#proxy_type}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#vpc_id RefactorspacesApplication#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.apiGatewayProxy">apiGatewayProxy</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#api_gateway_proxy RefactorspacesApplication#api_gateway_proxy}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>></code> | Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.environmentIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#environment_identifier RefactorspacesApplication#environment_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#name RefactorspacesApplication#name}.

---

##### `proxyType`<sup>Required</sup> <a name="proxyType" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.proxyType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#proxy_type RefactorspacesApplication#proxy_type}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#vpc_id RefactorspacesApplication#vpc_id}.

---

##### `apiGatewayProxy`<sup>Optional</sup> <a name="apiGatewayProxy" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.apiGatewayProxy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#api_gateway_proxy RefactorspacesApplication#api_gateway_proxy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>>

Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#tags RefactorspacesApplication#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.putApiGatewayProxy">putApiGatewayProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.resetApiGatewayProxy">resetApiGatewayProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApiGatewayProxy` <a name="putApiGatewayProxy" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.putApiGatewayProxy"></a>

```java
public void putApiGatewayProxy(RefactorspacesApplicationApiGatewayProxy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.putApiGatewayProxy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RefactorspacesApplicationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>>

---

##### `resetApiGatewayProxy` <a name="resetApiGatewayProxy" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.resetApiGatewayProxy"></a>

```java
public void resetApiGatewayProxy()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RefactorspacesApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isConstruct"></a>

```java
import io.cdktn.providers.awscc.refactorspaces_application.RefactorspacesApplication;

RefactorspacesApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.refactorspaces_application.RefactorspacesApplication;

RefactorspacesApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.refactorspaces_application.RefactorspacesApplication;

RefactorspacesApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.refactorspaces_application.RefactorspacesApplication;

RefactorspacesApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RefactorspacesApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RefactorspacesApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RefactorspacesApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RefactorspacesApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RefactorspacesApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.apiGatewayId">apiGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.apiGatewayProxy">apiGatewayProxy</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference">RefactorspacesApplicationApiGatewayProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.applicationIdentifier">applicationIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.nlbArn">nlbArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.nlbName">nlbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.proxyUrl">proxyUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.stageName">stageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList">RefactorspacesApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.vpcLinkId">vpcLinkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.apiGatewayProxyInput">apiGatewayProxyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.environmentIdentifierInput">environmentIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.proxyTypeInput">proxyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.environmentIdentifier">environmentIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.proxyType">proxyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiGatewayId`<sup>Required</sup> <a name="apiGatewayId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.apiGatewayId"></a>

```java
public java.lang.String getApiGatewayId();
```

- *Type:* java.lang.String

---

##### `apiGatewayProxy`<sup>Required</sup> <a name="apiGatewayProxy" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.apiGatewayProxy"></a>

```java
public RefactorspacesApplicationApiGatewayProxyOutputReference getApiGatewayProxy();
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference">RefactorspacesApplicationApiGatewayProxyOutputReference</a>

---

##### `applicationIdentifier`<sup>Required</sup> <a name="applicationIdentifier" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.applicationIdentifier"></a>

```java
public java.lang.String getApplicationIdentifier();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nlbArn`<sup>Required</sup> <a name="nlbArn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.nlbArn"></a>

```java
public java.lang.String getNlbArn();
```

- *Type:* java.lang.String

---

##### `nlbName`<sup>Required</sup> <a name="nlbName" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.nlbName"></a>

```java
public java.lang.String getNlbName();
```

- *Type:* java.lang.String

---

##### `proxyUrl`<sup>Required</sup> <a name="proxyUrl" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.proxyUrl"></a>

```java
public java.lang.String getProxyUrl();
```

- *Type:* java.lang.String

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.stageName"></a>

```java
public java.lang.String getStageName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.tags"></a>

```java
public RefactorspacesApplicationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList">RefactorspacesApplicationTagsList</a>

---

##### `vpcLinkId`<sup>Required</sup> <a name="vpcLinkId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.vpcLinkId"></a>

```java
public java.lang.String getVpcLinkId();
```

- *Type:* java.lang.String

---

##### `apiGatewayProxyInput`<sup>Optional</sup> <a name="apiGatewayProxyInput" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.apiGatewayProxyInput"></a>

```java
public IResolvable|RefactorspacesApplicationApiGatewayProxy getApiGatewayProxyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a>

---

##### `environmentIdentifierInput`<sup>Optional</sup> <a name="environmentIdentifierInput" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.environmentIdentifierInput"></a>

```java
public java.lang.String getEnvironmentIdentifierInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `proxyTypeInput`<sup>Optional</sup> <a name="proxyTypeInput" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.proxyTypeInput"></a>

```java
public java.lang.String getProxyTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RefactorspacesApplicationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.environmentIdentifier"></a>

```java
public java.lang.String getEnvironmentIdentifier();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `proxyType`<sup>Required</sup> <a name="proxyType" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.proxyType"></a>

```java
public java.lang.String getProxyType();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RefactorspacesApplicationApiGatewayProxy <a name="RefactorspacesApplicationApiGatewayProxy" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy.Initializer"></a>

```java
import io.cdktn.providers.awscc.refactorspaces_application.RefactorspacesApplicationApiGatewayProxy;

RefactorspacesApplicationApiGatewayProxy.builder()
//  .endpointType(java.lang.String)
//  .stageName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#endpoint_type RefactorspacesApplication#endpoint_type}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy.property.stageName">stageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#stage_name RefactorspacesApplication#stage_name}. |

---

##### `endpointType`<sup>Optional</sup> <a name="endpointType" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#endpoint_type RefactorspacesApplication#endpoint_type}.

---

##### `stageName`<sup>Optional</sup> <a name="stageName" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy.property.stageName"></a>

```java
public java.lang.String getStageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#stage_name RefactorspacesApplication#stage_name}.

---

### RefactorspacesApplicationConfig <a name="RefactorspacesApplicationConfig" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.refactorspaces_application.RefactorspacesApplicationConfig;

RefactorspacesApplicationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .environmentIdentifier(java.lang.String)
    .name(java.lang.String)
    .proxyType(java.lang.String)
    .vpcId(java.lang.String)
//  .apiGatewayProxy(RefactorspacesApplicationApiGatewayProxy)
//  .tags(IResolvable|java.util.List<RefactorspacesApplicationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.environmentIdentifier">environmentIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#environment_identifier RefactorspacesApplication#environment_identifier}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#name RefactorspacesApplication#name}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.proxyType">proxyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#proxy_type RefactorspacesApplication#proxy_type}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#vpc_id RefactorspacesApplication#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.apiGatewayProxy">apiGatewayProxy</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#api_gateway_proxy RefactorspacesApplication#api_gateway_proxy}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>></code> | Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.environmentIdentifier"></a>

```java
public java.lang.String getEnvironmentIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#environment_identifier RefactorspacesApplication#environment_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#name RefactorspacesApplication#name}.

---

##### `proxyType`<sup>Required</sup> <a name="proxyType" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.proxyType"></a>

```java
public java.lang.String getProxyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#proxy_type RefactorspacesApplication#proxy_type}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#vpc_id RefactorspacesApplication#vpc_id}.

---

##### `apiGatewayProxy`<sup>Optional</sup> <a name="apiGatewayProxy" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.apiGatewayProxy"></a>

```java
public RefactorspacesApplicationApiGatewayProxy getApiGatewayProxy();
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#api_gateway_proxy RefactorspacesApplication#api_gateway_proxy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<RefactorspacesApplicationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>>

Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#tags RefactorspacesApplication#tags}

---

### RefactorspacesApplicationTags <a name="RefactorspacesApplicationTags" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.refactorspaces_application.RefactorspacesApplicationTags;

RefactorspacesApplicationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags.property.key">key</a></code> | <code>java.lang.String</code> | A string used to identify this tag. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags.property.value">value</a></code> | <code>java.lang.String</code> | A string containing the value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A string used to identify this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#key RefactorspacesApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A string containing the value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/refactorspaces_application#value RefactorspacesApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RefactorspacesApplicationApiGatewayProxyOutputReference <a name="RefactorspacesApplicationApiGatewayProxyOutputReference" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.refactorspaces_application.RefactorspacesApplicationApiGatewayProxyOutputReference;

new RefactorspacesApplicationApiGatewayProxyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.resetEndpointType">resetEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.resetStageName">resetStageName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointType` <a name="resetEndpointType" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.resetEndpointType"></a>

```java
public void resetEndpointType()
```

##### `resetStageName` <a name="resetStageName" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.resetStageName"></a>

```java
public void resetStageName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.endpointTypeInput">endpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.stageNameInput">stageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.stageName">stageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.endpointTypeInput"></a>

```java
public java.lang.String getEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `stageNameInput`<sup>Optional</sup> <a name="stageNameInput" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.stageNameInput"></a>

```java
public java.lang.String getStageNameInput();
```

- *Type:* java.lang.String

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.stageName"></a>

```java
public java.lang.String getStageName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxyOutputReference.property.internalValue"></a>

```java
public IResolvable|RefactorspacesApplicationApiGatewayProxy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationApiGatewayProxy">RefactorspacesApplicationApiGatewayProxy</a>

---


### RefactorspacesApplicationTagsList <a name="RefactorspacesApplicationTagsList" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.refactorspaces_application.RefactorspacesApplicationTagsList;

new RefactorspacesApplicationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.get"></a>

```java
public RefactorspacesApplicationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RefactorspacesApplicationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>>

---


### RefactorspacesApplicationTagsOutputReference <a name="RefactorspacesApplicationTagsOutputReference" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.refactorspaces_application.RefactorspacesApplicationTagsOutputReference;

new RefactorspacesApplicationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RefactorspacesApplicationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.refactorspacesApplication.RefactorspacesApplicationTags">RefactorspacesApplicationTags</a>

---



