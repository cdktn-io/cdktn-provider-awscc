# `apigatewayDocumentationPart` Submodule <a name="`apigatewayDocumentationPart` Submodule" id="@cdktn/provider-awscc.apigatewayDocumentationPart"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayDocumentationPart <a name="ApigatewayDocumentationPart" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part awscc_apigateway_documentation_part}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_documentation_part.ApigatewayDocumentationPart;

ApigatewayDocumentationPart.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(ApigatewayDocumentationPartLocation)
    .properties(java.lang.String)
    .restApiId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a></code> | The ``Location`` property specifies the location of the Amazon API Gateway API entity that the documentation applies to. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.properties">properties</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#properties ApigatewayDocumentationPart#properties}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#rest_api_id ApigatewayDocumentationPart#rest_api_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a>

The ``Location`` property specifies the location of the Amazon API Gateway API entity that the documentation applies to.

`Location` is a property of the [AWS::ApiGateway::DocumentationPart](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html) resource.
For more information about each property, including constraints and valid values, see [DocumentationPart](https://docs.aws.amazon.com/apigateway/latest/api/API_DocumentationPartLocation.html) in the *Amazon API Gateway REST API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#location ApigatewayDocumentationPart#location}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.properties"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#properties ApigatewayDocumentationPart#properties}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.restApiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#rest_api_id ApigatewayDocumentationPart#rest_api_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.putLocation">putLocation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocation` <a name="putLocation" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.putLocation"></a>

```java
public void putLocation(ApigatewayDocumentationPartLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayDocumentationPart resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isConstruct"></a>

```java
import io.cdktn.providers.awscc.apigateway_documentation_part.ApigatewayDocumentationPart;

ApigatewayDocumentationPart.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.apigateway_documentation_part.ApigatewayDocumentationPart;

ApigatewayDocumentationPart.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.apigateway_documentation_part.ApigatewayDocumentationPart;

ApigatewayDocumentationPart.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.apigateway_documentation_part.ApigatewayDocumentationPart;

ApigatewayDocumentationPart.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigatewayDocumentationPart.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApigatewayDocumentationPart resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigatewayDocumentationPart to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigatewayDocumentationPart that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayDocumentationPart to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.documentationPartId">documentationPartId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference">ApigatewayDocumentationPartLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.locationInput">locationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.propertiesInput">propertiesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.restApiIdInput">restApiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.properties">properties</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `documentationPartId`<sup>Required</sup> <a name="documentationPartId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.documentationPartId"></a>

```java
public java.lang.String getDocumentationPartId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.location"></a>

```java
public ApigatewayDocumentationPartLocationOutputReference getLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference">ApigatewayDocumentationPartLocationOutputReference</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.locationInput"></a>

```java
public IResolvable|ApigatewayDocumentationPartLocation getLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.propertiesInput"></a>

```java
public java.lang.String getPropertiesInput();
```

- *Type:* java.lang.String

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.restApiIdInput"></a>

```java
public java.lang.String getRestApiIdInput();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.properties"></a>

```java
public java.lang.String getProperties();
```

- *Type:* java.lang.String

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayDocumentationPartConfig <a name="ApigatewayDocumentationPartConfig" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_documentation_part.ApigatewayDocumentationPartConfig;

ApigatewayDocumentationPartConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(ApigatewayDocumentationPartLocation)
    .properties(java.lang.String)
    .restApiId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a></code> | The ``Location`` property specifies the location of the Amazon API Gateway API entity that the documentation applies to. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.properties">properties</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#properties ApigatewayDocumentationPart#properties}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#rest_api_id ApigatewayDocumentationPart#rest_api_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.location"></a>

```java
public ApigatewayDocumentationPartLocation getLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a>

The ``Location`` property specifies the location of the Amazon API Gateway API entity that the documentation applies to.

`Location` is a property of the [AWS::ApiGateway::DocumentationPart](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html) resource.
For more information about each property, including constraints and valid values, see [DocumentationPart](https://docs.aws.amazon.com/apigateway/latest/api/API_DocumentationPartLocation.html) in the *Amazon API Gateway REST API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#location ApigatewayDocumentationPart#location}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.properties"></a>

```java
public java.lang.String getProperties();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#properties ApigatewayDocumentationPart#properties}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#rest_api_id ApigatewayDocumentationPart#rest_api_id}.

---

### ApigatewayDocumentationPartLocation <a name="ApigatewayDocumentationPartLocation" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_documentation_part.ApigatewayDocumentationPartLocation;

ApigatewayDocumentationPartLocation.builder()
//  .method(java.lang.String)
//  .name(java.lang.String)
//  .path(java.lang.String)
//  .statusCode(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.method">method</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#method ApigatewayDocumentationPart#method}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#name ApigatewayDocumentationPart#name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#path ApigatewayDocumentationPart#path}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#status_code ApigatewayDocumentationPart#status_code}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#type ApigatewayDocumentationPart#type}. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#method ApigatewayDocumentationPart#method}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#name ApigatewayDocumentationPart#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#path ApigatewayDocumentationPart#path}.

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#status_code ApigatewayDocumentationPart#status_code}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#type ApigatewayDocumentationPart#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayDocumentationPartLocationOutputReference <a name="ApigatewayDocumentationPartLocationOutputReference" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apigateway_documentation_part.ApigatewayDocumentationPartLocationOutputReference;

new ApigatewayDocumentationPartLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetStatusCode"></a>

```java
public void resetStatusCode()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.statusCodeInput"></a>

```java
public java.lang.String getStatusCodeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApigatewayDocumentationPartLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a>

---



