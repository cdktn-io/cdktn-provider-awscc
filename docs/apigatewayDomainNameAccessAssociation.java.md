# `apigatewayDomainNameAccessAssociation` Submodule <a name="`apigatewayDomainNameAccessAssociation` Submodule" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayDomainNameAccessAssociation <a name="ApigatewayDomainNameAccessAssociation" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association awscc_apigateway_domain_name_access_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_domain_name_access_association.ApigatewayDomainNameAccessAssociation;

ApigatewayDomainNameAccessAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessAssociationSource(java.lang.String)
    .accessAssociationSourceType(java.lang.String)
    .domainNameArn(java.lang.String)
//  .tags(IResolvable|java.util.List<ApigatewayDomainNameAccessAssociationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.accessAssociationSource">accessAssociationSource</a></code> | <code>java.lang.String</code> | The source of the domain name access association resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.accessAssociationSourceType">accessAssociationSourceType</a></code> | <code>java.lang.String</code> | The source type of the domain name access association resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.domainNameArn">domainNameArn</a></code> | <code>java.lang.String</code> | The amazon resource name (ARN) of the domain name resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags">ApigatewayDomainNameAccessAssociationTags</a>></code> | An array of arbitrary tags (key-value pairs) to associate with the domainname access association. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessAssociationSource`<sup>Required</sup> <a name="accessAssociationSource" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.accessAssociationSource"></a>

- *Type:* java.lang.String

The source of the domain name access association resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association#access_association_source ApigatewayDomainNameAccessAssociation#access_association_source}

---

##### `accessAssociationSourceType`<sup>Required</sup> <a name="accessAssociationSourceType" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.accessAssociationSourceType"></a>

- *Type:* java.lang.String

The source type of the domain name access association resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association#access_association_source_type ApigatewayDomainNameAccessAssociation#access_association_source_type}

---

##### `domainNameArn`<sup>Required</sup> <a name="domainNameArn" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.domainNameArn"></a>

- *Type:* java.lang.String

The amazon resource name (ARN) of the domain name resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association#domain_name_arn ApigatewayDomainNameAccessAssociation#domain_name_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags">ApigatewayDomainNameAccessAssociationTags</a>>

An array of arbitrary tags (key-value pairs) to associate with the domainname access association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association#tags ApigatewayDomainNameAccessAssociation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ApigatewayDomainNameAccessAssociationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags">ApigatewayDomainNameAccessAssociationTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayDomainNameAccessAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.apigateway_domain_name_access_association.ApigatewayDomainNameAccessAssociation;

ApigatewayDomainNameAccessAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.apigateway_domain_name_access_association.ApigatewayDomainNameAccessAssociation;

ApigatewayDomainNameAccessAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.apigateway_domain_name_access_association.ApigatewayDomainNameAccessAssociation;

ApigatewayDomainNameAccessAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.apigateway_domain_name_access_association.ApigatewayDomainNameAccessAssociation;

ApigatewayDomainNameAccessAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigatewayDomainNameAccessAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApigatewayDomainNameAccessAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigatewayDomainNameAccessAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigatewayDomainNameAccessAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayDomainNameAccessAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.domainNameAccessAssociationArn">domainNameAccessAssociationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList">ApigatewayDomainNameAccessAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.accessAssociationSourceInput">accessAssociationSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.accessAssociationSourceTypeInput">accessAssociationSourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.domainNameArnInput">domainNameArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags">ApigatewayDomainNameAccessAssociationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.accessAssociationSource">accessAssociationSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.accessAssociationSourceType">accessAssociationSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.domainNameArn">domainNameArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainNameAccessAssociationArn`<sup>Required</sup> <a name="domainNameAccessAssociationArn" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.domainNameAccessAssociationArn"></a>

```java
public java.lang.String getDomainNameAccessAssociationArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.tags"></a>

```java
public ApigatewayDomainNameAccessAssociationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList">ApigatewayDomainNameAccessAssociationTagsList</a>

---

##### `accessAssociationSourceInput`<sup>Optional</sup> <a name="accessAssociationSourceInput" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.accessAssociationSourceInput"></a>

```java
public java.lang.String getAccessAssociationSourceInput();
```

- *Type:* java.lang.String

---

##### `accessAssociationSourceTypeInput`<sup>Optional</sup> <a name="accessAssociationSourceTypeInput" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.accessAssociationSourceTypeInput"></a>

```java
public java.lang.String getAccessAssociationSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `domainNameArnInput`<sup>Optional</sup> <a name="domainNameArnInput" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.domainNameArnInput"></a>

```java
public java.lang.String getDomainNameArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ApigatewayDomainNameAccessAssociationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags">ApigatewayDomainNameAccessAssociationTags</a>>

---

##### `accessAssociationSource`<sup>Required</sup> <a name="accessAssociationSource" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.accessAssociationSource"></a>

```java
public java.lang.String getAccessAssociationSource();
```

- *Type:* java.lang.String

---

##### `accessAssociationSourceType`<sup>Required</sup> <a name="accessAssociationSourceType" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.accessAssociationSourceType"></a>

```java
public java.lang.String getAccessAssociationSourceType();
```

- *Type:* java.lang.String

---

##### `domainNameArn`<sup>Required</sup> <a name="domainNameArn" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.domainNameArn"></a>

```java
public java.lang.String getDomainNameArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayDomainNameAccessAssociationConfig <a name="ApigatewayDomainNameAccessAssociationConfig" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_domain_name_access_association.ApigatewayDomainNameAccessAssociationConfig;

ApigatewayDomainNameAccessAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessAssociationSource(java.lang.String)
    .accessAssociationSourceType(java.lang.String)
    .domainNameArn(java.lang.String)
//  .tags(IResolvable|java.util.List<ApigatewayDomainNameAccessAssociationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.accessAssociationSource">accessAssociationSource</a></code> | <code>java.lang.String</code> | The source of the domain name access association resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.accessAssociationSourceType">accessAssociationSourceType</a></code> | <code>java.lang.String</code> | The source type of the domain name access association resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.domainNameArn">domainNameArn</a></code> | <code>java.lang.String</code> | The amazon resource name (ARN) of the domain name resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags">ApigatewayDomainNameAccessAssociationTags</a>></code> | An array of arbitrary tags (key-value pairs) to associate with the domainname access association. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessAssociationSource`<sup>Required</sup> <a name="accessAssociationSource" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.accessAssociationSource"></a>

```java
public java.lang.String getAccessAssociationSource();
```

- *Type:* java.lang.String

The source of the domain name access association resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association#access_association_source ApigatewayDomainNameAccessAssociation#access_association_source}

---

##### `accessAssociationSourceType`<sup>Required</sup> <a name="accessAssociationSourceType" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.accessAssociationSourceType"></a>

```java
public java.lang.String getAccessAssociationSourceType();
```

- *Type:* java.lang.String

The source type of the domain name access association resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association#access_association_source_type ApigatewayDomainNameAccessAssociation#access_association_source_type}

---

##### `domainNameArn`<sup>Required</sup> <a name="domainNameArn" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.domainNameArn"></a>

```java
public java.lang.String getDomainNameArn();
```

- *Type:* java.lang.String

The amazon resource name (ARN) of the domain name resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association#domain_name_arn ApigatewayDomainNameAccessAssociation#domain_name_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ApigatewayDomainNameAccessAssociationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags">ApigatewayDomainNameAccessAssociationTags</a>>

An array of arbitrary tags (key-value pairs) to associate with the domainname access association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association#tags ApigatewayDomainNameAccessAssociation#tags}

---

### ApigatewayDomainNameAccessAssociationTags <a name="ApigatewayDomainNameAccessAssociationTags" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_domain_name_access_association.ApigatewayDomainNameAccessAssociationTags;

ApigatewayDomainNameAccessAssociationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association#key ApigatewayDomainNameAccessAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association#value ApigatewayDomainNameAccessAssociation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association#key ApigatewayDomainNameAccessAssociation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_domain_name_access_association#value ApigatewayDomainNameAccessAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayDomainNameAccessAssociationTagsList <a name="ApigatewayDomainNameAccessAssociationTagsList" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_domain_name_access_association.ApigatewayDomainNameAccessAssociationTagsList;

new ApigatewayDomainNameAccessAssociationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.get"></a>

```java
public ApigatewayDomainNameAccessAssociationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags">ApigatewayDomainNameAccessAssociationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApigatewayDomainNameAccessAssociationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags">ApigatewayDomainNameAccessAssociationTags</a>>

---


### ApigatewayDomainNameAccessAssociationTagsOutputReference <a name="ApigatewayDomainNameAccessAssociationTagsOutputReference" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_domain_name_access_association.ApigatewayDomainNameAccessAssociationTagsOutputReference;

new ApigatewayDomainNameAccessAssociationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags">ApigatewayDomainNameAccessAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigatewayDomainNameAccessAssociationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDomainNameAccessAssociation.ApigatewayDomainNameAccessAssociationTags">ApigatewayDomainNameAccessAssociationTags</a>

---



