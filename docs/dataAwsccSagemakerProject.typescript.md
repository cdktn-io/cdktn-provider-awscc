# `dataAwsccSagemakerProject` Submodule <a name="`dataAwsccSagemakerProject` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerProject <a name="DataAwsccSagemakerProject" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_project awscc_sagemaker_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

new dataAwsccSagemakerProject.DataAwsccSagemakerProject(scope: Construct, id: string, config: DataAwsccSagemakerProjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig">DataAwsccSagemakerProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig">DataAwsccSagemakerProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerProject resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.isConstruct"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

dataAwsccSagemakerProject.DataAwsccSagemakerProject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.isTerraformElement"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

dataAwsccSagemakerProject.DataAwsccSagemakerProject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.isTerraformDataSource"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

dataAwsccSagemakerProject.DataAwsccSagemakerProject.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.generateConfigForImport"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

dataAwsccSagemakerProject.DataAwsccSagemakerProject.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSagemakerProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSagemakerProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSagemakerProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.projectArn">projectArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.projectDescription">projectDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.projectName">projectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.projectStatus">projectStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.serviceCatalogProvisionedProductDetails">serviceCatalogProvisionedProductDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference">DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.serviceCatalogProvisioningDetails">serviceCatalogProvisioningDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference">DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList">DataAwsccSagemakerProjectTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.templateProviderDetails">templateProviderDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList">DataAwsccSagemakerProjectTemplateProviderDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `projectArn`<sup>Required</sup> <a name="projectArn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.projectArn"></a>

```typescript
public readonly projectArn: string;
```

- *Type:* string

---

##### `projectDescription`<sup>Required</sup> <a name="projectDescription" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.projectDescription"></a>

```typescript
public readonly projectDescription: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

---

##### `projectStatus`<sup>Required</sup> <a name="projectStatus" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.projectStatus"></a>

```typescript
public readonly projectStatus: string;
```

- *Type:* string

---

##### `serviceCatalogProvisionedProductDetails`<sup>Required</sup> <a name="serviceCatalogProvisionedProductDetails" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.serviceCatalogProvisionedProductDetails"></a>

```typescript
public readonly serviceCatalogProvisionedProductDetails: DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference">DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference</a>

---

##### `serviceCatalogProvisioningDetails`<sup>Required</sup> <a name="serviceCatalogProvisioningDetails" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.serviceCatalogProvisioningDetails"></a>

```typescript
public readonly serviceCatalogProvisioningDetails: DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference">DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.tags"></a>

```typescript
public readonly tags: DataAwsccSagemakerProjectTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList">DataAwsccSagemakerProjectTagsList</a>

---

##### `templateProviderDetails`<sup>Required</sup> <a name="templateProviderDetails" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.templateProviderDetails"></a>

```typescript
public readonly templateProviderDetails: DataAwsccSagemakerProjectTemplateProviderDetailsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList">DataAwsccSagemakerProjectTemplateProviderDetailsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerProjectConfig <a name="DataAwsccSagemakerProjectConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.Initializer"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

const dataAwsccSagemakerProjectConfig: dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/sagemaker_project#id DataAwsccSagemakerProject#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails <a name="DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails.Initializer"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

const dataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails: dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails = { ... }
```


### DataAwsccSagemakerProjectServiceCatalogProvisioningDetails <a name="DataAwsccSagemakerProjectServiceCatalogProvisioningDetails" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetails.Initializer"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

const dataAwsccSagemakerProjectServiceCatalogProvisioningDetails: dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetails = { ... }
```


### DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters <a name="DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters.Initializer"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

const dataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters: dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters = { ... }
```


### DataAwsccSagemakerProjectTags <a name="DataAwsccSagemakerProjectTags" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTags.Initializer"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

const dataAwsccSagemakerProjectTags: dataAwsccSagemakerProject.DataAwsccSagemakerProjectTags = { ... }
```


### DataAwsccSagemakerProjectTemplateProviderDetails <a name="DataAwsccSagemakerProjectTemplateProviderDetails" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetails.Initializer"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

const dataAwsccSagemakerProjectTemplateProviderDetails: dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetails = { ... }
```


### DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail <a name="DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.Initializer"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

const dataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail: dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail = { ... }
```


### DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters <a name="DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters.Initializer"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

const dataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters: dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference <a name="DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

new dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductId">provisionedProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductStatusMessage">provisionedProductStatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails">DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `provisionedProductId`<sup>Required</sup> <a name="provisionedProductId" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductId"></a>

```typescript
public readonly provisionedProductId: string;
```

- *Type:* string

---

##### `provisionedProductStatusMessage`<sup>Required</sup> <a name="provisionedProductStatusMessage" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductStatusMessage"></a>

```typescript
public readonly provisionedProductStatusMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails">DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails</a>

---


### DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference <a name="DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

new dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathId">pathId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productId">productId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactId">provisioningArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParameters">provisioningParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList">DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetails">DataAwsccSagemakerProjectServiceCatalogProvisioningDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathId`<sup>Required</sup> <a name="pathId" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathId"></a>

```typescript
public readonly pathId: string;
```

- *Type:* string

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

##### `provisioningArtifactId`<sup>Required</sup> <a name="provisioningArtifactId" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactId"></a>

```typescript
public readonly provisioningArtifactId: string;
```

- *Type:* string

---

##### `provisioningParameters`<sup>Required</sup> <a name="provisioningParameters" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParameters"></a>

```typescript
public readonly provisioningParameters: DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList">DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerProjectServiceCatalogProvisioningDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetails">DataAwsccSagemakerProjectServiceCatalogProvisioningDetails</a>

---


### DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList <a name="DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

new dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference <a name="DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

new dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>

---


### DataAwsccSagemakerProjectTagsList <a name="DataAwsccSagemakerProjectTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

new dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerProjectTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerProjectTagsOutputReference <a name="DataAwsccSagemakerProjectTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

new dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTags">DataAwsccSagemakerProjectTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerProjectTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTags">DataAwsccSagemakerProjectTags</a>

---


### DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference <a name="DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

new dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList">DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateName">templateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateUrl">templateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.parameters"></a>

```typescript
public readonly parameters: DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList">DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

---

##### `templateUrl`<sup>Required</sup> <a name="templateUrl" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateUrl"></a>

```typescript
public readonly templateUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a>

---


### DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList <a name="DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

new dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference <a name="DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

new dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>

---


### DataAwsccSagemakerProjectTemplateProviderDetailsList <a name="DataAwsccSagemakerProjectTemplateProviderDetailsList" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.Initializer"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

new dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.get"></a>

```typescript
public get(index: number): DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference <a name="DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSagemakerProject } from '@cdktn/provider-awscc'

new dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.property.cfnTemplateProviderDetail">cfnTemplateProviderDetail</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference">DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetails">DataAwsccSagemakerProjectTemplateProviderDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cfnTemplateProviderDetail`<sup>Required</sup> <a name="cfnTemplateProviderDetail" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.property.cfnTemplateProviderDetail"></a>

```typescript
public readonly cfnTemplateProviderDetail: DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference">DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSagemakerProjectTemplateProviderDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetails">DataAwsccSagemakerProjectTemplateProviderDetails</a>

---



