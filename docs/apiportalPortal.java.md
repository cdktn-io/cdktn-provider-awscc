# `apiportalPortal` Submodule <a name="`apiportalPortal` Submodule" id="@cdktn/provider-awscc.apiportalPortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiportalPortal <a name="ApiportalPortal" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal awscc_apiportal_portal}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortal;

ApiportalPortal.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authorization(ApiportalPortalAuthorization)
    .endpointConfiguration(ApiportalPortalEndpointConfiguration)
    .portalContent(ApiportalPortalPortalContent)
//  .includedProductArns(java.util.List<java.lang.String>)
//  .logoUri(java.lang.String)
//  .rumAppMonitorName(java.lang.String)
//  .tags(IResolvable|java.util.List<ApiportalPortalTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a></code> | Represents an authorization configuration for a portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a></code> | Represents an endpoint configuration for a portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.portalContent">portalContent</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a></code> | Contains the content that is visible to portal consumers including the themes, display names, and description. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.includedProductArns">includedProductArns</a></code> | <code>java.util.List<java.lang.String></code> | The ARNs of the products included in the portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.logoUri">logoUri</a></code> | <code>java.lang.String</code> | The logo URI. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.rumAppMonitorName">rumAppMonitorName</a></code> | <code>java.lang.String</code> | The name of the Amazon CloudWatch RUM app monitor. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>></code> | The tags associated with a portal. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.authorization"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a>

Represents an authorization configuration for a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#authorization ApiportalPortal#authorization}

---

##### `endpointConfiguration`<sup>Required</sup> <a name="endpointConfiguration" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.endpointConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a>

Represents an endpoint configuration for a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#endpoint_configuration ApiportalPortal#endpoint_configuration}

---

##### `portalContent`<sup>Required</sup> <a name="portalContent" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.portalContent"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a>

Contains the content that is visible to portal consumers including the themes, display names, and description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#portal_content ApiportalPortal#portal_content}

---

##### `includedProductArns`<sup>Optional</sup> <a name="includedProductArns" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.includedProductArns"></a>

- *Type:* java.util.List<java.lang.String>

The ARNs of the products included in the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#included_product_arns ApiportalPortal#included_product_arns}

---

##### `logoUri`<sup>Optional</sup> <a name="logoUri" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.logoUri"></a>

- *Type:* java.lang.String

The logo URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#logo_uri ApiportalPortal#logo_uri}

---

##### `rumAppMonitorName`<sup>Optional</sup> <a name="rumAppMonitorName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.rumAppMonitorName"></a>

- *Type:* java.lang.String

The name of the Amazon CloudWatch RUM app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#rum_app_monitor_name ApiportalPortal#rum_app_monitor_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>>

The tags associated with a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#tags ApiportalPortal#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putAuthorization">putAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putEndpointConfiguration">putEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putPortalContent">putPortalContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetIncludedProductArns">resetIncludedProductArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetLogoUri">resetLogoUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetRumAppMonitorName">resetRumAppMonitorName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorization` <a name="putAuthorization" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putAuthorization"></a>

```java
public void putAuthorization(ApiportalPortalAuthorization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a>

---

##### `putEndpointConfiguration` <a name="putEndpointConfiguration" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putEndpointConfiguration"></a>

```java
public void putEndpointConfiguration(ApiportalPortalEndpointConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putEndpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a>

---

##### `putPortalContent` <a name="putPortalContent" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putPortalContent"></a>

```java
public void putPortalContent(ApiportalPortalPortalContent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putPortalContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ApiportalPortalTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>>

---

##### `resetIncludedProductArns` <a name="resetIncludedProductArns" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetIncludedProductArns"></a>

```java
public void resetIncludedProductArns()
```

##### `resetLogoUri` <a name="resetLogoUri" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetLogoUri"></a>

```java
public void resetLogoUri()
```

##### `resetRumAppMonitorName` <a name="resetRumAppMonitorName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetRumAppMonitorName"></a>

```java
public void resetRumAppMonitorName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiportalPortal resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isConstruct"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortal;

ApiportalPortal.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortal;

ApiportalPortal.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortal;

ApiportalPortal.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortal;

ApiportalPortal.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiportalPortal.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApiportalPortal resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiportalPortal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiportalPortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApiportalPortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference">ApiportalPortalAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference">ApiportalPortalEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalArn">portalArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalContent">portalContent</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference">ApiportalPortalPortalContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalId">portalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishDescription">publishDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishedAt">publishedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishStatus">publishStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.statusException">statusException</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference">ApiportalPortalStatusExceptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList">ApiportalPortalTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.authorizationInput">authorizationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.endpointConfigurationInput">endpointConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.includedProductArnsInput">includedProductArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.logoUriInput">logoUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalContentInput">portalContentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.rumAppMonitorNameInput">rumAppMonitorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.includedProductArns">includedProductArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.logoUri">logoUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.rumAppMonitorName">rumAppMonitorName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.authorization"></a>

```java
public ApiportalPortalAuthorizationOutputReference getAuthorization();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference">ApiportalPortalAuthorizationOutputReference</a>

---

##### `endpointConfiguration`<sup>Required</sup> <a name="endpointConfiguration" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.endpointConfiguration"></a>

```java
public ApiportalPortalEndpointConfigurationOutputReference getEndpointConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference">ApiportalPortalEndpointConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `portalArn`<sup>Required</sup> <a name="portalArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalArn"></a>

```java
public java.lang.String getPortalArn();
```

- *Type:* java.lang.String

---

##### `portalContent`<sup>Required</sup> <a name="portalContent" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalContent"></a>

```java
public ApiportalPortalPortalContentOutputReference getPortalContent();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference">ApiportalPortalPortalContentOutputReference</a>

---

##### `portalId`<sup>Required</sup> <a name="portalId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalId"></a>

```java
public java.lang.String getPortalId();
```

- *Type:* java.lang.String

---

##### `publishDescription`<sup>Required</sup> <a name="publishDescription" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishDescription"></a>

```java
public java.lang.String getPublishDescription();
```

- *Type:* java.lang.String

---

##### `publishedAt`<sup>Required</sup> <a name="publishedAt" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishedAt"></a>

```java
public java.lang.String getPublishedAt();
```

- *Type:* java.lang.String

---

##### `publishStatus`<sup>Required</sup> <a name="publishStatus" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.publishStatus"></a>

```java
public java.lang.String getPublishStatus();
```

- *Type:* java.lang.String

---

##### `statusException`<sup>Required</sup> <a name="statusException" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.statusException"></a>

```java
public ApiportalPortalStatusExceptionOutputReference getStatusException();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference">ApiportalPortalStatusExceptionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tags"></a>

```java
public ApiportalPortalTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList">ApiportalPortalTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.authorizationInput"></a>

```java
public IResolvable|ApiportalPortalAuthorization getAuthorizationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a>

---

##### `endpointConfigurationInput`<sup>Optional</sup> <a name="endpointConfigurationInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.endpointConfigurationInput"></a>

```java
public IResolvable|ApiportalPortalEndpointConfiguration getEndpointConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a>

---

##### `includedProductArnsInput`<sup>Optional</sup> <a name="includedProductArnsInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.includedProductArnsInput"></a>

```java
public java.util.List<java.lang.String> getIncludedProductArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logoUriInput`<sup>Optional</sup> <a name="logoUriInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.logoUriInput"></a>

```java
public java.lang.String getLogoUriInput();
```

- *Type:* java.lang.String

---

##### `portalContentInput`<sup>Optional</sup> <a name="portalContentInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.portalContentInput"></a>

```java
public IResolvable|ApiportalPortalPortalContent getPortalContentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a>

---

##### `rumAppMonitorNameInput`<sup>Optional</sup> <a name="rumAppMonitorNameInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.rumAppMonitorNameInput"></a>

```java
public java.lang.String getRumAppMonitorNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ApiportalPortalTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>>

---

##### `includedProductArns`<sup>Required</sup> <a name="includedProductArns" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.includedProductArns"></a>

```java
public java.util.List<java.lang.String> getIncludedProductArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logoUri`<sup>Required</sup> <a name="logoUri" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.logoUri"></a>

```java
public java.lang.String getLogoUri();
```

- *Type:* java.lang.String

---

##### `rumAppMonitorName`<sup>Required</sup> <a name="rumAppMonitorName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.rumAppMonitorName"></a>

```java
public java.lang.String getRumAppMonitorName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortal.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiportalPortalAuthorization <a name="ApiportalPortalAuthorization" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortalAuthorization;

ApiportalPortalAuthorization.builder()
    .authorizationConfig(ApiportalPortalAuthorizationAuthorizationConfig)
    .fineGrainedAccessControl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a></code> | Exactly one of the members is set: None for no authorization, or CognitoConfig for Amazon Cognito. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization.property.fineGrainedAccessControl">fineGrainedAccessControl</a></code> | <code>java.lang.String</code> | Whether fine-grained access control is enforced for the portal. No default: the template states the posture explicitly. |

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization.property.authorizationConfig"></a>

```java
public ApiportalPortalAuthorizationAuthorizationConfig getAuthorizationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a>

Exactly one of the members is set: None for no authorization, or CognitoConfig for Amazon Cognito.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#authorization_config ApiportalPortal#authorization_config}

---

##### `fineGrainedAccessControl`<sup>Required</sup> <a name="fineGrainedAccessControl" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization.property.fineGrainedAccessControl"></a>

```java
public java.lang.String getFineGrainedAccessControl();
```

- *Type:* java.lang.String

Whether fine-grained access control is enforced for the portal. No default: the template states the posture explicitly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#fine_grained_access_control ApiportalPortal#fine_grained_access_control}

---

### ApiportalPortalAuthorizationAuthorizationConfig <a name="ApiportalPortalAuthorizationAuthorizationConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortalAuthorizationAuthorizationConfig;

ApiportalPortalAuthorizationAuthorizationConfig.builder()
//  .cognitoConfig(ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig)
//  .none(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig.property.cognitoConfig">cognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a></code> | The configuration for using Amazon Cognito user pools to control access to your portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig.property.none">none</a></code> | <code>java.lang.String</code> | Provide no authorization for your portal. This makes your portal publicly accessible on the web. |

---

##### `cognitoConfig`<sup>Optional</sup> <a name="cognitoConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig.property.cognitoConfig"></a>

```java
public ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig getCognitoConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a>

The configuration for using Amazon Cognito user pools to control access to your portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#cognito_config ApiportalPortal#cognito_config}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig.property.none"></a>

```java
public java.lang.String getNone();
```

- *Type:* java.lang.String

Provide no authorization for your portal. This makes your portal publicly accessible on the web.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#none ApiportalPortal#none}

---

### ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig <a name="ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig;

ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.builder()
//  .appClientId(java.lang.String)
//  .userPoolArn(java.lang.String)
//  .userPoolDomain(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.appClientId">appClientId</a></code> | <code>java.lang.String</code> | The app client ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.userPoolArn">userPoolArn</a></code> | <code>java.lang.String</code> | The user pool ARN. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.userPoolDomain">userPoolDomain</a></code> | <code>java.lang.String</code> | The user pool domain. |

---

##### `appClientId`<sup>Optional</sup> <a name="appClientId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.appClientId"></a>

```java
public java.lang.String getAppClientId();
```

- *Type:* java.lang.String

The app client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#app_client_id ApiportalPortal#app_client_id}

---

##### `userPoolArn`<sup>Optional</sup> <a name="userPoolArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.userPoolArn"></a>

```java
public java.lang.String getUserPoolArn();
```

- *Type:* java.lang.String

The user pool ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#user_pool_arn ApiportalPortal#user_pool_arn}

---

##### `userPoolDomain`<sup>Optional</sup> <a name="userPoolDomain" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig.property.userPoolDomain"></a>

```java
public java.lang.String getUserPoolDomain();
```

- *Type:* java.lang.String

The user pool domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#user_pool_domain ApiportalPortal#user_pool_domain}

---

### ApiportalPortalConfig <a name="ApiportalPortalConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortalConfig;

ApiportalPortalConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authorization(ApiportalPortalAuthorization)
    .endpointConfiguration(ApiportalPortalEndpointConfiguration)
    .portalContent(ApiportalPortalPortalContent)
//  .includedProductArns(java.util.List<java.lang.String>)
//  .logoUri(java.lang.String)
//  .rumAppMonitorName(java.lang.String)
//  .tags(IResolvable|java.util.List<ApiportalPortalTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a></code> | Represents an authorization configuration for a portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a></code> | Represents an endpoint configuration for a portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.portalContent">portalContent</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a></code> | Contains the content that is visible to portal consumers including the themes, display names, and description. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.includedProductArns">includedProductArns</a></code> | <code>java.util.List<java.lang.String></code> | The ARNs of the products included in the portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.logoUri">logoUri</a></code> | <code>java.lang.String</code> | The logo URI. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.rumAppMonitorName">rumAppMonitorName</a></code> | <code>java.lang.String</code> | The name of the Amazon CloudWatch RUM app monitor. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>></code> | The tags associated with a portal. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.authorization"></a>

```java
public ApiportalPortalAuthorization getAuthorization();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a>

Represents an authorization configuration for a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#authorization ApiportalPortal#authorization}

---

##### `endpointConfiguration`<sup>Required</sup> <a name="endpointConfiguration" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.endpointConfiguration"></a>

```java
public ApiportalPortalEndpointConfiguration getEndpointConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a>

Represents an endpoint configuration for a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#endpoint_configuration ApiportalPortal#endpoint_configuration}

---

##### `portalContent`<sup>Required</sup> <a name="portalContent" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.portalContent"></a>

```java
public ApiportalPortalPortalContent getPortalContent();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a>

Contains the content that is visible to portal consumers including the themes, display names, and description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#portal_content ApiportalPortal#portal_content}

---

##### `includedProductArns`<sup>Optional</sup> <a name="includedProductArns" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.includedProductArns"></a>

```java
public java.util.List<java.lang.String> getIncludedProductArns();
```

- *Type:* java.util.List<java.lang.String>

The ARNs of the products included in the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#included_product_arns ApiportalPortal#included_product_arns}

---

##### `logoUri`<sup>Optional</sup> <a name="logoUri" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.logoUri"></a>

```java
public java.lang.String getLogoUri();
```

- *Type:* java.lang.String

The logo URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#logo_uri ApiportalPortal#logo_uri}

---

##### `rumAppMonitorName`<sup>Optional</sup> <a name="rumAppMonitorName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.rumAppMonitorName"></a>

```java
public java.lang.String getRumAppMonitorName();
```

- *Type:* java.lang.String

The name of the Amazon CloudWatch RUM app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#rum_app_monitor_name ApiportalPortal#rum_app_monitor_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ApiportalPortalTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>>

The tags associated with a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#tags ApiportalPortal#tags}

---

### ApiportalPortalEndpointConfiguration <a name="ApiportalPortalEndpointConfiguration" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortalEndpointConfiguration;

ApiportalPortalEndpointConfiguration.builder()
//  .acmManaged(ApiportalPortalEndpointConfigurationAcmManaged)
//  .none(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration.property.acmManaged">acmManaged</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a></code> | Represents a domain name and certificate for a portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration.property.none">none</a></code> | <code>java.lang.String</code> | Provide no authorization for your portal. This makes your portal publicly accessible on the web. |

---

##### `acmManaged`<sup>Optional</sup> <a name="acmManaged" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration.property.acmManaged"></a>

```java
public ApiportalPortalEndpointConfigurationAcmManaged getAcmManaged();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a>

Represents a domain name and certificate for a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#acm_managed ApiportalPortal#acm_managed}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration.property.none"></a>

```java
public java.lang.String getNone();
```

- *Type:* java.lang.String

Provide no authorization for your portal. This makes your portal publicly accessible on the web.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#none ApiportalPortal#none}

---

### ApiportalPortalEndpointConfigurationAcmManaged <a name="ApiportalPortalEndpointConfigurationAcmManaged" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortalEndpointConfigurationAcmManaged;

ApiportalPortalEndpointConfigurationAcmManaged.builder()
//  .certificateArn(java.lang.String)
//  .domainName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | The certificate ARN. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged.property.domainName">domainName</a></code> | <code>java.lang.String</code> | The domain name. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

The certificate ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#certificate_arn ApiportalPortal#certificate_arn}

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

The domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#domain_name ApiportalPortal#domain_name}

---

### ApiportalPortalPortalContent <a name="ApiportalPortalPortalContent" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortalPortalContent;

ApiportalPortalPortalContent.builder()
    .displayName(java.lang.String)
    .theme(ApiportalPortalPortalContentTheme)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.theme">theme</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a></code> | Defines the theme for a portal. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.description">description</a></code> | <code>java.lang.String</code> | A description of the portal. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#display_name ApiportalPortal#display_name}

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.theme"></a>

```java
public ApiportalPortalPortalContentTheme getTheme();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a>

Defines the theme for a portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#theme ApiportalPortal#theme}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#description ApiportalPortal#description}

---

### ApiportalPortalPortalContentTheme <a name="ApiportalPortalPortalContentTheme" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortalPortalContentTheme;

ApiportalPortalPortalContentTheme.builder()
    .customColors(ApiportalPortalPortalContentThemeCustomColors)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme.property.customColors">customColors</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a></code> | Represents custom colors for a published portal. |

---

##### `customColors`<sup>Required</sup> <a name="customColors" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme.property.customColors"></a>

```java
public ApiportalPortalPortalContentThemeCustomColors getCustomColors();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a>

Represents custom colors for a published portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#custom_colors ApiportalPortal#custom_colors}

---

### ApiportalPortalPortalContentThemeCustomColors <a name="ApiportalPortalPortalContentThemeCustomColors" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortalPortalContentThemeCustomColors;

ApiportalPortalPortalContentThemeCustomColors.builder()
    .accentColor(java.lang.String)
    .backgroundColor(java.lang.String)
    .errorValidationColor(java.lang.String)
    .headerColor(java.lang.String)
    .navigationColor(java.lang.String)
    .textColor(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.accentColor">accentColor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#accent_color ApiportalPortal#accent_color}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.backgroundColor">backgroundColor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#background_color ApiportalPortal#background_color}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.errorValidationColor">errorValidationColor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#error_validation_color ApiportalPortal#error_validation_color}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.headerColor">headerColor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#header_color ApiportalPortal#header_color}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.navigationColor">navigationColor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#navigation_color ApiportalPortal#navigation_color}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.textColor">textColor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#text_color ApiportalPortal#text_color}. |

---

##### `accentColor`<sup>Required</sup> <a name="accentColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.accentColor"></a>

```java
public java.lang.String getAccentColor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#accent_color ApiportalPortal#accent_color}.

---

##### `backgroundColor`<sup>Required</sup> <a name="backgroundColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.backgroundColor"></a>

```java
public java.lang.String getBackgroundColor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#background_color ApiportalPortal#background_color}.

---

##### `errorValidationColor`<sup>Required</sup> <a name="errorValidationColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.errorValidationColor"></a>

```java
public java.lang.String getErrorValidationColor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#error_validation_color ApiportalPortal#error_validation_color}.

---

##### `headerColor`<sup>Required</sup> <a name="headerColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.headerColor"></a>

```java
public java.lang.String getHeaderColor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#header_color ApiportalPortal#header_color}.

---

##### `navigationColor`<sup>Required</sup> <a name="navigationColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.navigationColor"></a>

```java
public java.lang.String getNavigationColor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#navigation_color ApiportalPortal#navigation_color}.

---

##### `textColor`<sup>Required</sup> <a name="textColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors.property.textColor"></a>

```java
public java.lang.String getTextColor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#text_color ApiportalPortal#text_color}.

---

### ApiportalPortalStatusException <a name="ApiportalPortalStatusException" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusException"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusException.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortalStatusException;

ApiportalPortalStatusException.builder()
    .build();
```


### ApiportalPortalTags <a name="ApiportalPortalTags" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortalTags;

ApiportalPortalTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#key ApiportalPortal#key}. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#value ApiportalPortal#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#key ApiportalPortal#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_portal#value ApiportalPortal#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference <a name="ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference;

new ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetAppClientId">resetAppClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetUserPoolArn">resetUserPoolArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetUserPoolDomain">resetUserPoolDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppClientId` <a name="resetAppClientId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetAppClientId"></a>

```java
public void resetAppClientId()
```

##### `resetUserPoolArn` <a name="resetUserPoolArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetUserPoolArn"></a>

```java
public void resetUserPoolArn()
```

##### `resetUserPoolDomain` <a name="resetUserPoolDomain" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.resetUserPoolDomain"></a>

```java
public void resetUserPoolDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.appClientIdInput">appClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolArnInput">userPoolArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolDomainInput">userPoolDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.appClientId">appClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolArn">userPoolArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolDomain">userPoolDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appClientIdInput`<sup>Optional</sup> <a name="appClientIdInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.appClientIdInput"></a>

```java
public java.lang.String getAppClientIdInput();
```

- *Type:* java.lang.String

---

##### `userPoolArnInput`<sup>Optional</sup> <a name="userPoolArnInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolArnInput"></a>

```java
public java.lang.String getUserPoolArnInput();
```

- *Type:* java.lang.String

---

##### `userPoolDomainInput`<sup>Optional</sup> <a name="userPoolDomainInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolDomainInput"></a>

```java
public java.lang.String getUserPoolDomainInput();
```

- *Type:* java.lang.String

---

##### `appClientId`<sup>Required</sup> <a name="appClientId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.appClientId"></a>

```java
public java.lang.String getAppClientId();
```

- *Type:* java.lang.String

---

##### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolArn"></a>

```java
public java.lang.String getUserPoolArn();
```

- *Type:* java.lang.String

---

##### `userPoolDomain`<sup>Required</sup> <a name="userPoolDomain" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.userPoolDomain"></a>

```java
public java.lang.String getUserPoolDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a>

---


### ApiportalPortalAuthorizationAuthorizationConfigOutputReference <a name="ApiportalPortalAuthorizationAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference;

new ApiportalPortalAuthorizationAuthorizationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.putCognitoConfig">putCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resetCognitoConfig">resetCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resetNone">resetNone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCognitoConfig` <a name="putCognitoConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.putCognitoConfig"></a>

```java
public void putCognitoConfig(ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.putCognitoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a>

---

##### `resetCognitoConfig` <a name="resetCognitoConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resetCognitoConfig"></a>

```java
public void resetCognitoConfig()
```

##### `resetNone` <a name="resetNone" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.resetNone"></a>

```java
public void resetNone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.cognitoConfig">cognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.cognitoConfigInput">cognitoConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.noneInput">noneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.none">none</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cognitoConfig`<sup>Required</sup> <a name="cognitoConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.cognitoConfig"></a>

```java
public ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference getCognitoConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfigOutputReference</a>

---

##### `cognitoConfigInput`<sup>Optional</sup> <a name="cognitoConfigInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.cognitoConfigInput"></a>

```java
public IResolvable|ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig getCognitoConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig">ApiportalPortalAuthorizationAuthorizationConfigCognitoConfig</a>

---

##### `noneInput`<sup>Optional</sup> <a name="noneInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.noneInput"></a>

```java
public java.lang.String getNoneInput();
```

- *Type:* java.lang.String

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.none"></a>

```java
public java.lang.String getNone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiportalPortalAuthorizationAuthorizationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a>

---


### ApiportalPortalAuthorizationOutputReference <a name="ApiportalPortalAuthorizationOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortalAuthorizationOutputReference;

new ApiportalPortalAuthorizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.putAuthorizationConfig">putAuthorizationConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationConfig` <a name="putAuthorizationConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.putAuthorizationConfig"></a>

```java
public void putAuthorizationConfig(ApiportalPortalAuthorizationAuthorizationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.putAuthorizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference">ApiportalPortalAuthorizationAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.authorizationConfigInput">authorizationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fineGrainedAccessControlInput">fineGrainedAccessControlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fineGrainedAccessControl">fineGrainedAccessControl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.authorizationConfig"></a>

```java
public ApiportalPortalAuthorizationAuthorizationConfigOutputReference getAuthorizationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfigOutputReference">ApiportalPortalAuthorizationAuthorizationConfigOutputReference</a>

---

##### `authorizationConfigInput`<sup>Optional</sup> <a name="authorizationConfigInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.authorizationConfigInput"></a>

```java
public IResolvable|ApiportalPortalAuthorizationAuthorizationConfig getAuthorizationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationAuthorizationConfig">ApiportalPortalAuthorizationAuthorizationConfig</a>

---

##### `fineGrainedAccessControlInput`<sup>Optional</sup> <a name="fineGrainedAccessControlInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fineGrainedAccessControlInput"></a>

```java
public java.lang.String getFineGrainedAccessControlInput();
```

- *Type:* java.lang.String

---

##### `fineGrainedAccessControl`<sup>Required</sup> <a name="fineGrainedAccessControl" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.fineGrainedAccessControl"></a>

```java
public java.lang.String getFineGrainedAccessControl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorizationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiportalPortalAuthorization getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalAuthorization">ApiportalPortalAuthorization</a>

---


### ApiportalPortalEndpointConfigurationAcmManagedOutputReference <a name="ApiportalPortalEndpointConfigurationAcmManagedOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference;

new ApiportalPortalEndpointConfigurationAcmManagedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resetDomainName">resetDomainName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```

##### `resetDomainName` <a name="resetDomainName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.resetDomainName"></a>

```java
public void resetDomainName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiportalPortalEndpointConfigurationAcmManaged getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a>

---


### ApiportalPortalEndpointConfigurationOutputReference <a name="ApiportalPortalEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortalEndpointConfigurationOutputReference;

new ApiportalPortalEndpointConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.putAcmManaged">putAcmManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resetAcmManaged">resetAcmManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resetNone">resetNone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAcmManaged` <a name="putAcmManaged" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.putAcmManaged"></a>

```java
public void putAcmManaged(ApiportalPortalEndpointConfigurationAcmManaged value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.putAcmManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a>

---

##### `resetAcmManaged` <a name="resetAcmManaged" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resetAcmManaged"></a>

```java
public void resetAcmManaged()
```

##### `resetNone` <a name="resetNone" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.resetNone"></a>

```java
public void resetNone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.acmManaged">acmManaged</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference">ApiportalPortalEndpointConfigurationAcmManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.portalDefaultDomainName">portalDefaultDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.portalDomainHostedZoneId">portalDomainHostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.acmManagedInput">acmManagedInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.noneInput">noneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.none">none</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acmManaged`<sup>Required</sup> <a name="acmManaged" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.acmManaged"></a>

```java
public ApiportalPortalEndpointConfigurationAcmManagedOutputReference getAcmManaged();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManagedOutputReference">ApiportalPortalEndpointConfigurationAcmManagedOutputReference</a>

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `portalDefaultDomainName`<sup>Required</sup> <a name="portalDefaultDomainName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.portalDefaultDomainName"></a>

```java
public java.lang.String getPortalDefaultDomainName();
```

- *Type:* java.lang.String

---

##### `portalDomainHostedZoneId`<sup>Required</sup> <a name="portalDomainHostedZoneId" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.portalDomainHostedZoneId"></a>

```java
public java.lang.String getPortalDomainHostedZoneId();
```

- *Type:* java.lang.String

---

##### `acmManagedInput`<sup>Optional</sup> <a name="acmManagedInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.acmManagedInput"></a>

```java
public IResolvable|ApiportalPortalEndpointConfigurationAcmManaged getAcmManagedInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationAcmManaged">ApiportalPortalEndpointConfigurationAcmManaged</a>

---

##### `noneInput`<sup>Optional</sup> <a name="noneInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.noneInput"></a>

```java
public java.lang.String getNoneInput();
```

- *Type:* java.lang.String

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.none"></a>

```java
public java.lang.String getNone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiportalPortalEndpointConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalEndpointConfiguration">ApiportalPortalEndpointConfiguration</a>

---


### ApiportalPortalPortalContentOutputReference <a name="ApiportalPortalPortalContentOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortalPortalContentOutputReference;

new ApiportalPortalPortalContentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.putTheme">putTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTheme` <a name="putTheme" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.putTheme"></a>

```java
public void putTheme(ApiportalPortalPortalContentTheme value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.putTheme.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.theme">theme</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference">ApiportalPortalPortalContentThemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.themeInput">themeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.theme"></a>

```java
public ApiportalPortalPortalContentThemeOutputReference getTheme();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference">ApiportalPortalPortalContentThemeOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `themeInput`<sup>Optional</sup> <a name="themeInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.themeInput"></a>

```java
public IResolvable|ApiportalPortalPortalContentTheme getThemeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiportalPortalPortalContent getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContent">ApiportalPortalPortalContent</a>

---


### ApiportalPortalPortalContentThemeCustomColorsOutputReference <a name="ApiportalPortalPortalContentThemeCustomColorsOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortalPortalContentThemeCustomColorsOutputReference;

new ApiportalPortalPortalContentThemeCustomColorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.accentColorInput">accentColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.backgroundColorInput">backgroundColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.errorValidationColorInput">errorValidationColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.headerColorInput">headerColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.navigationColorInput">navigationColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.textColorInput">textColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.accentColor">accentColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.backgroundColor">backgroundColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.errorValidationColor">errorValidationColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.headerColor">headerColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.navigationColor">navigationColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.textColor">textColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accentColorInput`<sup>Optional</sup> <a name="accentColorInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.accentColorInput"></a>

```java
public java.lang.String getAccentColorInput();
```

- *Type:* java.lang.String

---

##### `backgroundColorInput`<sup>Optional</sup> <a name="backgroundColorInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.backgroundColorInput"></a>

```java
public java.lang.String getBackgroundColorInput();
```

- *Type:* java.lang.String

---

##### `errorValidationColorInput`<sup>Optional</sup> <a name="errorValidationColorInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.errorValidationColorInput"></a>

```java
public java.lang.String getErrorValidationColorInput();
```

- *Type:* java.lang.String

---

##### `headerColorInput`<sup>Optional</sup> <a name="headerColorInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.headerColorInput"></a>

```java
public java.lang.String getHeaderColorInput();
```

- *Type:* java.lang.String

---

##### `navigationColorInput`<sup>Optional</sup> <a name="navigationColorInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.navigationColorInput"></a>

```java
public java.lang.String getNavigationColorInput();
```

- *Type:* java.lang.String

---

##### `textColorInput`<sup>Optional</sup> <a name="textColorInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.textColorInput"></a>

```java
public java.lang.String getTextColorInput();
```

- *Type:* java.lang.String

---

##### `accentColor`<sup>Required</sup> <a name="accentColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.accentColor"></a>

```java
public java.lang.String getAccentColor();
```

- *Type:* java.lang.String

---

##### `backgroundColor`<sup>Required</sup> <a name="backgroundColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.backgroundColor"></a>

```java
public java.lang.String getBackgroundColor();
```

- *Type:* java.lang.String

---

##### `errorValidationColor`<sup>Required</sup> <a name="errorValidationColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.errorValidationColor"></a>

```java
public java.lang.String getErrorValidationColor();
```

- *Type:* java.lang.String

---

##### `headerColor`<sup>Required</sup> <a name="headerColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.headerColor"></a>

```java
public java.lang.String getHeaderColor();
```

- *Type:* java.lang.String

---

##### `navigationColor`<sup>Required</sup> <a name="navigationColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.navigationColor"></a>

```java
public java.lang.String getNavigationColor();
```

- *Type:* java.lang.String

---

##### `textColor`<sup>Required</sup> <a name="textColor" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.textColor"></a>

```java
public java.lang.String getTextColor();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiportalPortalPortalContentThemeCustomColors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a>

---


### ApiportalPortalPortalContentThemeOutputReference <a name="ApiportalPortalPortalContentThemeOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortalPortalContentThemeOutputReference;

new ApiportalPortalPortalContentThemeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.putCustomColors">putCustomColors</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomColors` <a name="putCustomColors" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.putCustomColors"></a>

```java
public void putCustomColors(ApiportalPortalPortalContentThemeCustomColors value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.putCustomColors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.customColors">customColors</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference">ApiportalPortalPortalContentThemeCustomColorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.logoUploadedAt">logoUploadedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.customColorsInput">customColorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customColors`<sup>Required</sup> <a name="customColors" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.customColors"></a>

```java
public ApiportalPortalPortalContentThemeCustomColorsOutputReference getCustomColors();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColorsOutputReference">ApiportalPortalPortalContentThemeCustomColorsOutputReference</a>

---

##### `logoUploadedAt`<sup>Required</sup> <a name="logoUploadedAt" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.logoUploadedAt"></a>

```java
public java.lang.String getLogoUploadedAt();
```

- *Type:* java.lang.String

---

##### `customColorsInput`<sup>Optional</sup> <a name="customColorsInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.customColorsInput"></a>

```java
public IResolvable|ApiportalPortalPortalContentThemeCustomColors getCustomColorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeCustomColors">ApiportalPortalPortalContentThemeCustomColors</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentThemeOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiportalPortalPortalContentTheme getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalPortalContentTheme">ApiportalPortalPortalContentTheme</a>

---


### ApiportalPortalStatusExceptionOutputReference <a name="ApiportalPortalStatusExceptionOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortalStatusExceptionOutputReference;

new ApiportalPortalStatusExceptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.exception">exception</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusException">ApiportalPortalStatusException</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exception`<sup>Required</sup> <a name="exception" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.exception"></a>

```java
public java.lang.String getException();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusExceptionOutputReference.property.internalValue"></a>

```java
public ApiportalPortalStatusException getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalStatusException">ApiportalPortalStatusException</a>

---


### ApiportalPortalTagsList <a name="ApiportalPortalTagsList" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortalTagsList;

new ApiportalPortalTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.get"></a>

```java
public ApiportalPortalTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApiportalPortalTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>>

---


### ApiportalPortalTagsOutputReference <a name="ApiportalPortalTagsOutputReference" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_portal.ApiportalPortalTagsOutputReference;

new ApiportalPortalTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiportalPortalTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalPortal.ApiportalPortalTags">ApiportalPortalTags</a>

---



