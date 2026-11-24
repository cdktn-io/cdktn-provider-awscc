# `apiportalOrganizationDiscoveryConfiguration` Submodule <a name="`apiportalOrganizationDiscoveryConfiguration` Submodule" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiportalOrganizationDiscoveryConfiguration <a name="ApiportalOrganizationDiscoveryConfiguration" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration awscc_apiportal_organization_discovery_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_organization_discovery_configuration.ApiportalOrganizationDiscoveryConfiguration;

ApiportalOrganizationDiscoveryConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .discoverySources(java.util.List<java.lang.String>)
//  .discoveryFeatures(java.util.List<java.lang.String>)
//  .discoveryFilters(ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters)
//  .tags(IResolvable|java.util.List<ApiportalOrganizationDiscoveryConfigurationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.discoverySources">discoverySources</a></code> | <code>java.util.List<java.lang.String></code> | The AWS services whose resources are scanned to discover APIs. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.discoveryFeatures">discoveryFeatures</a></code> | <code>java.util.List<java.lang.String></code> | Optional discovery capabilities to enable. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.discoveryFilters">discoveryFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a></code> | Scopes organization-wide discovery. Exactly one of ExclusionFilters or InclusionFilters is set. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>></code> | The tags associated with the organization discovery configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `discoverySources`<sup>Required</sup> <a name="discoverySources" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.discoverySources"></a>

- *Type:* java.util.List<java.lang.String>

The AWS services whose resources are scanned to discover APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_sources ApiportalOrganizationDiscoveryConfiguration#discovery_sources}

---

##### `discoveryFeatures`<sup>Optional</sup> <a name="discoveryFeatures" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.discoveryFeatures"></a>

- *Type:* java.util.List<java.lang.String>

Optional discovery capabilities to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_features ApiportalOrganizationDiscoveryConfiguration#discovery_features}

---

##### `discoveryFilters`<sup>Optional</sup> <a name="discoveryFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.discoveryFilters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a>

Scopes organization-wide discovery. Exactly one of ExclusionFilters or InclusionFilters is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_filters ApiportalOrganizationDiscoveryConfiguration#discovery_filters}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>>

The tags associated with the organization discovery configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#tags ApiportalOrganizationDiscoveryConfiguration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putDiscoveryFilters">putDiscoveryFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetDiscoveryFeatures">resetDiscoveryFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetDiscoveryFilters">resetDiscoveryFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDiscoveryFilters` <a name="putDiscoveryFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putDiscoveryFilters"></a>

```java
public void putDiscoveryFilters(ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putDiscoveryFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ApiportalOrganizationDiscoveryConfigurationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>>

---

##### `resetDiscoveryFeatures` <a name="resetDiscoveryFeatures" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetDiscoveryFeatures"></a>

```java
public void resetDiscoveryFeatures()
```

##### `resetDiscoveryFilters` <a name="resetDiscoveryFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetDiscoveryFilters"></a>

```java
public void resetDiscoveryFilters()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiportalOrganizationDiscoveryConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.apiportal_organization_discovery_configuration.ApiportalOrganizationDiscoveryConfiguration;

ApiportalOrganizationDiscoveryConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.apiportal_organization_discovery_configuration.ApiportalOrganizationDiscoveryConfiguration;

ApiportalOrganizationDiscoveryConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.apiportal_organization_discovery_configuration.ApiportalOrganizationDiscoveryConfiguration;

ApiportalOrganizationDiscoveryConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.apiportal_organization_discovery_configuration.ApiportalOrganizationDiscoveryConfiguration;

ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApiportalOrganizationDiscoveryConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiportalOrganizationDiscoveryConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiportalOrganizationDiscoveryConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApiportalOrganizationDiscoveryConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryConfigurationStatus">discoveryConfigurationStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFilters">discoveryFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList">ApiportalOrganizationDiscoveryConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFeaturesInput">discoveryFeaturesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFiltersInput">discoveryFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoverySourcesInput">discoverySourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFeatures">discoveryFeatures</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoverySources">discoverySources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `discoveryConfigurationStatus`<sup>Required</sup> <a name="discoveryConfigurationStatus" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryConfigurationStatus"></a>

```java
public java.lang.String getDiscoveryConfigurationStatus();
```

- *Type:* java.lang.String

---

##### `discoveryFilters`<sup>Required</sup> <a name="discoveryFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFilters"></a>

```java
public ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference getDiscoveryFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tags"></a>

```java
public ApiportalOrganizationDiscoveryConfigurationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList">ApiportalOrganizationDiscoveryConfigurationTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `discoveryFeaturesInput`<sup>Optional</sup> <a name="discoveryFeaturesInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFeaturesInput"></a>

```java
public java.util.List<java.lang.String> getDiscoveryFeaturesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `discoveryFiltersInput`<sup>Optional</sup> <a name="discoveryFiltersInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFiltersInput"></a>

```java
public IResolvable|ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters getDiscoveryFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a>

---

##### `discoverySourcesInput`<sup>Optional</sup> <a name="discoverySourcesInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoverySourcesInput"></a>

```java
public java.util.List<java.lang.String> getDiscoverySourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ApiportalOrganizationDiscoveryConfigurationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>>

---

##### `discoveryFeatures`<sup>Required</sup> <a name="discoveryFeatures" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoveryFeatures"></a>

```java
public java.util.List<java.lang.String> getDiscoveryFeatures();
```

- *Type:* java.util.List<java.lang.String>

---

##### `discoverySources`<sup>Required</sup> <a name="discoverySources" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.discoverySources"></a>

```java
public java.util.List<java.lang.String> getDiscoverySources();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiportalOrganizationDiscoveryConfigurationConfig <a name="ApiportalOrganizationDiscoveryConfigurationConfig" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_organization_discovery_configuration.ApiportalOrganizationDiscoveryConfigurationConfig;

ApiportalOrganizationDiscoveryConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .discoverySources(java.util.List<java.lang.String>)
//  .discoveryFeatures(java.util.List<java.lang.String>)
//  .discoveryFilters(ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters)
//  .tags(IResolvable|java.util.List<ApiportalOrganizationDiscoveryConfigurationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoverySources">discoverySources</a></code> | <code>java.util.List<java.lang.String></code> | The AWS services whose resources are scanned to discover APIs. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoveryFeatures">discoveryFeatures</a></code> | <code>java.util.List<java.lang.String></code> | Optional discovery capabilities to enable. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoveryFilters">discoveryFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a></code> | Scopes organization-wide discovery. Exactly one of ExclusionFilters or InclusionFilters is set. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>></code> | The tags associated with the organization discovery configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `discoverySources`<sup>Required</sup> <a name="discoverySources" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoverySources"></a>

```java
public java.util.List<java.lang.String> getDiscoverySources();
```

- *Type:* java.util.List<java.lang.String>

The AWS services whose resources are scanned to discover APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_sources ApiportalOrganizationDiscoveryConfiguration#discovery_sources}

---

##### `discoveryFeatures`<sup>Optional</sup> <a name="discoveryFeatures" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoveryFeatures"></a>

```java
public java.util.List<java.lang.String> getDiscoveryFeatures();
```

- *Type:* java.util.List<java.lang.String>

Optional discovery capabilities to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_features ApiportalOrganizationDiscoveryConfiguration#discovery_features}

---

##### `discoveryFilters`<sup>Optional</sup> <a name="discoveryFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.discoveryFilters"></a>

```java
public ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters getDiscoveryFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a>

Scopes organization-wide discovery. Exactly one of ExclusionFilters or InclusionFilters is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#discovery_filters ApiportalOrganizationDiscoveryConfiguration#discovery_filters}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ApiportalOrganizationDiscoveryConfigurationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>>

The tags associated with the organization discovery configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#tags ApiportalOrganizationDiscoveryConfiguration#tags}

---

### ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_organization_discovery_configuration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters;

ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.builder()
//  .exclusionFilters(ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters)
//  .inclusionFilters(ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.property.exclusionFilters">exclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a></code> | Resources matching any of these filters are excluded from discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.property.inclusionFilters">inclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a></code> | Only resources matching any of these filters are included in discovery. |

---

##### `exclusionFilters`<sup>Optional</sup> <a name="exclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.property.exclusionFilters"></a>

```java
public ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters getExclusionFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a>

Resources matching any of these filters are excluded from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#exclusion_filters ApiportalOrganizationDiscoveryConfiguration#exclusion_filters}

---

##### `inclusionFilters`<sup>Optional</sup> <a name="inclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters.property.inclusionFilters"></a>

```java
public ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters getInclusionFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a>

Only resources matching any of these filters are included in discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#inclusion_filters ApiportalOrganizationDiscoveryConfiguration#inclusion_filters}

---

### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_organization_discovery_configuration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters;

ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.builder()
//  .accountIds(java.util.List<java.lang.String>)
//  .organizationalUnitIds(java.util.List<java.lang.String>)
//  .resourceArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.accountIds">accountIds</a></code> | <code>java.util.List<java.lang.String></code> | AWS account IDs to exclude from discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.organizationalUnitIds">organizationalUnitIds</a></code> | <code>java.util.List<java.lang.String></code> | Organizational unit IDs to exclude from discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.resourceArns">resourceArns</a></code> | <code>java.util.List<java.lang.String></code> | Resource ARNs to exclude from discovery. |

---

##### `accountIds`<sup>Optional</sup> <a name="accountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.accountIds"></a>

```java
public java.util.List<java.lang.String> getAccountIds();
```

- *Type:* java.util.List<java.lang.String>

AWS account IDs to exclude from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#account_ids ApiportalOrganizationDiscoveryConfiguration#account_ids}

---

##### `organizationalUnitIds`<sup>Optional</sup> <a name="organizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.organizationalUnitIds"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnitIds();
```

- *Type:* java.util.List<java.lang.String>

Organizational unit IDs to exclude from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#organizational_unit_ids ApiportalOrganizationDiscoveryConfiguration#organizational_unit_ids}

---

##### `resourceArns`<sup>Optional</sup> <a name="resourceArns" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters.property.resourceArns"></a>

```java
public java.util.List<java.lang.String> getResourceArns();
```

- *Type:* java.util.List<java.lang.String>

Resource ARNs to exclude from discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#resource_arns ApiportalOrganizationDiscoveryConfiguration#resource_arns}

---

### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_organization_discovery_configuration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters;

ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.builder()
//  .accountIds(java.util.List<java.lang.String>)
//  .organizationalUnitIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.property.accountIds">accountIds</a></code> | <code>java.util.List<java.lang.String></code> | AWS account IDs to include in discovery. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.property.organizationalUnitIds">organizationalUnitIds</a></code> | <code>java.util.List<java.lang.String></code> | Organizational unit IDs to include in discovery. |

---

##### `accountIds`<sup>Optional</sup> <a name="accountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.property.accountIds"></a>

```java
public java.util.List<java.lang.String> getAccountIds();
```

- *Type:* java.util.List<java.lang.String>

AWS account IDs to include in discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#account_ids ApiportalOrganizationDiscoveryConfiguration#account_ids}

---

##### `organizationalUnitIds`<sup>Optional</sup> <a name="organizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters.property.organizationalUnitIds"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnitIds();
```

- *Type:* java.util.List<java.lang.String>

Organizational unit IDs to include in discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#organizational_unit_ids ApiportalOrganizationDiscoveryConfiguration#organizational_unit_ids}

---

### ApiportalOrganizationDiscoveryConfigurationTags <a name="ApiportalOrganizationDiscoveryConfigurationTags" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_organization_discovery_configuration.ApiportalOrganizationDiscoveryConfigurationTags;

ApiportalOrganizationDiscoveryConfigurationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#key ApiportalOrganizationDiscoveryConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#value ApiportalOrganizationDiscoveryConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#key ApiportalOrganizationDiscoveryConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_organization_discovery_configuration#value ApiportalOrganizationDiscoveryConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_organization_discovery_configuration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference;

new ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetAccountIds">resetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetOrganizationalUnitIds">resetOrganizationalUnitIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetResourceArns">resetResourceArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountIds` <a name="resetAccountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetAccountIds"></a>

```java
public void resetAccountIds()
```

##### `resetOrganizationalUnitIds` <a name="resetOrganizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetOrganizationalUnitIds"></a>

```java
public void resetOrganizationalUnitIds()
```

##### `resetResourceArns` <a name="resetResourceArns" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.resetResourceArns"></a>

```java
public void resetResourceArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIdsInput">accountIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIdsInput">organizationalUnitIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArnsInput">resourceArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIds">accountIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIds">organizationalUnitIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArns">resourceArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountIdsInput`<sup>Optional</sup> <a name="accountIdsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIdsInput"></a>

```java
public java.util.List<java.lang.String> getAccountIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationalUnitIdsInput`<sup>Optional</sup> <a name="organizationalUnitIdsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIdsInput"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnitIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceArnsInput`<sup>Optional</sup> <a name="resourceArnsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArnsInput"></a>

```java
public java.util.List<java.lang.String> getResourceArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.accountIds"></a>

```java
public java.util.List<java.lang.String> getAccountIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationalUnitIds`<sup>Required</sup> <a name="organizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.organizationalUnitIds"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnitIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceArns`<sup>Required</sup> <a name="resourceArns" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.resourceArns"></a>

```java
public java.util.List<java.lang.String> getResourceArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a>

---


### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_organization_discovery_configuration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference;

new ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resetAccountIds">resetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resetOrganizationalUnitIds">resetOrganizationalUnitIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountIds` <a name="resetAccountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resetAccountIds"></a>

```java
public void resetAccountIds()
```

##### `resetOrganizationalUnitIds` <a name="resetOrganizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.resetOrganizationalUnitIds"></a>

```java
public void resetOrganizationalUnitIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIdsInput">accountIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIdsInput">organizationalUnitIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIds">accountIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIds">organizationalUnitIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountIdsInput`<sup>Optional</sup> <a name="accountIdsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIdsInput"></a>

```java
public java.util.List<java.lang.String> getAccountIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationalUnitIdsInput`<sup>Optional</sup> <a name="organizationalUnitIdsInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIdsInput"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnitIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.accountIds"></a>

```java
public java.util.List<java.lang.String> getAccountIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationalUnitIds`<sup>Required</sup> <a name="organizationalUnitIds" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.organizationalUnitIds"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnitIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a>

---


### ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference <a name="ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_organization_discovery_configuration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference;

new ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putExclusionFilters">putExclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putInclusionFilters">putInclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resetExclusionFilters">resetExclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resetInclusionFilters">resetInclusionFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusionFilters` <a name="putExclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putExclusionFilters"></a>

```java
public void putExclusionFilters(ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putExclusionFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a>

---

##### `putInclusionFilters` <a name="putInclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putInclusionFilters"></a>

```java
public void putInclusionFilters(ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.putInclusionFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a>

---

##### `resetExclusionFilters` <a name="resetExclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resetExclusionFilters"></a>

```java
public void resetExclusionFilters()
```

##### `resetInclusionFilters` <a name="resetInclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.resetInclusionFilters"></a>

```java
public void resetInclusionFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFilters">exclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFilters">inclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFiltersInput">exclusionFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFiltersInput">inclusionFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exclusionFilters`<sup>Required</sup> <a name="exclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFilters"></a>

```java
public ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference getExclusionFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFiltersOutputReference</a>

---

##### `inclusionFilters`<sup>Required</sup> <a name="inclusionFilters" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFilters"></a>

```java
public ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference getInclusionFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFiltersOutputReference</a>

---

##### `exclusionFiltersInput`<sup>Optional</sup> <a name="exclusionFiltersInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.exclusionFiltersInput"></a>

```java
public IResolvable|ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters getExclusionFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersExclusionFilters</a>

---

##### `inclusionFiltersInput`<sup>Optional</sup> <a name="inclusionFiltersInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.inclusionFiltersInput"></a>

```java
public IResolvable|ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters getInclusionFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersInclusionFilters</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters">ApiportalOrganizationDiscoveryConfigurationDiscoveryFilters</a>

---


### ApiportalOrganizationDiscoveryConfigurationTagsList <a name="ApiportalOrganizationDiscoveryConfigurationTagsList" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_organization_discovery_configuration.ApiportalOrganizationDiscoveryConfigurationTagsList;

new ApiportalOrganizationDiscoveryConfigurationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.get"></a>

```java
public ApiportalOrganizationDiscoveryConfigurationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApiportalOrganizationDiscoveryConfigurationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>>

---


### ApiportalOrganizationDiscoveryConfigurationTagsOutputReference <a name="ApiportalOrganizationDiscoveryConfigurationTagsOutputReference" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apiportal_organization_discovery_configuration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference;

new ApiportalOrganizationDiscoveryConfigurationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiportalOrganizationDiscoveryConfigurationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apiportalOrganizationDiscoveryConfiguration.ApiportalOrganizationDiscoveryConfigurationTags">ApiportalOrganizationDiscoveryConfigurationTags</a>

---



