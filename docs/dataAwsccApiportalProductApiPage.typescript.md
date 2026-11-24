# `dataAwsccApiportalProductApiPage` Submodule <a name="`dataAwsccApiportalProductApiPage` Submodule" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApiportalProductApiPage <a name="DataAwsccApiportalProductApiPage" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_product_api_page awscc_apiportal_product_api_page}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer"></a>

```typescript
import { dataAwsccApiportalProductApiPage } from '@cdktn/provider-awscc'

new dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage(scope: Construct, id: string, config: DataAwsccApiportalProductApiPageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig">DataAwsccApiportalProductApiPageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig">DataAwsccApiportalProductApiPageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApiportalProductApiPage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isConstruct"></a>

```typescript
import { dataAwsccApiportalProductApiPage } from '@cdktn/provider-awscc'

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isTerraformElement"></a>

```typescript
import { dataAwsccApiportalProductApiPage } from '@cdktn/provider-awscc'

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isTerraformDataSource"></a>

```typescript
import { dataAwsccApiportalProductApiPage } from '@cdktn/provider-awscc'

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.generateConfigForImport"></a>

```typescript
import { dataAwsccApiportalProductApiPage } from '@cdktn/provider-awscc'

dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccApiportalProductApiPage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApiportalProductApiPage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApiportalProductApiPage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_product_api_page#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApiportalProductApiPage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.apiId">apiId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference">DataAwsccApiportalProductApiPageApiIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.displayContent">displayContent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference">DataAwsccApiportalProductApiPageDisplayContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.managedApiId">managedApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.productApiPageArn">productApiPageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.productApiPageId">productApiPageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.productId">productId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.statusException">statusException</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference">DataAwsccApiportalProductApiPageStatusExceptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList">DataAwsccApiportalProductApiPageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.tryItState">tryItState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.apiId"></a>

```typescript
public readonly apiId: DataAwsccApiportalProductApiPageApiIdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference">DataAwsccApiportalProductApiPageApiIdOutputReference</a>

---

##### `displayContent`<sup>Required</sup> <a name="displayContent" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.displayContent"></a>

```typescript
public readonly displayContent: DataAwsccApiportalProductApiPageDisplayContentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference">DataAwsccApiportalProductApiPageDisplayContentOutputReference</a>

---

##### `managedApiId`<sup>Required</sup> <a name="managedApiId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.managedApiId"></a>

```typescript
public readonly managedApiId: string;
```

- *Type:* string

---

##### `productApiPageArn`<sup>Required</sup> <a name="productApiPageArn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.productApiPageArn"></a>

```typescript
public readonly productApiPageArn: string;
```

- *Type:* string

---

##### `productApiPageId`<sup>Required</sup> <a name="productApiPageId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.productApiPageId"></a>

```typescript
public readonly productApiPageId: string;
```

- *Type:* string

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusException`<sup>Required</sup> <a name="statusException" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.statusException"></a>

```typescript
public readonly statusException: DataAwsccApiportalProductApiPageStatusExceptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference">DataAwsccApiportalProductApiPageStatusExceptionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.tags"></a>

```typescript
public readonly tags: DataAwsccApiportalProductApiPageTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList">DataAwsccApiportalProductApiPageTagsList</a>

---

##### `tryItState`<sup>Required</sup> <a name="tryItState" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.tryItState"></a>

```typescript
public readonly tryItState: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApiportalProductApiPageApiId <a name="DataAwsccApiportalProductApiPageApiId" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiId.Initializer"></a>

```typescript
import { dataAwsccApiportalProductApiPage } from '@cdktn/provider-awscc'

const dataAwsccApiportalProductApiPageApiId: dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiId = { ... }
```


### DataAwsccApiportalProductApiPageApiIdIdentifierParts <a name="DataAwsccApiportalProductApiPageApiIdIdentifierParts" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierParts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierParts.Initializer"></a>

```typescript
import { dataAwsccApiportalProductApiPage } from '@cdktn/provider-awscc'

const dataAwsccApiportalProductApiPageApiIdIdentifierParts: dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierParts = { ... }
```


### DataAwsccApiportalProductApiPageConfig <a name="DataAwsccApiportalProductApiPageConfig" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.Initializer"></a>

```typescript
import { dataAwsccApiportalProductApiPage } from '@cdktn/provider-awscc'

const dataAwsccApiportalProductApiPageConfig: dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/apiportal_product_api_page#id DataAwsccApiportalProductApiPage#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApiportalProductApiPageDisplayContent <a name="DataAwsccApiportalProductApiPageDisplayContent" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContent.Initializer"></a>

```typescript
import { dataAwsccApiportalProductApiPage } from '@cdktn/provider-awscc'

const dataAwsccApiportalProductApiPageDisplayContent: dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContent = { ... }
```


### DataAwsccApiportalProductApiPageDisplayContentOverrides <a name="DataAwsccApiportalProductApiPageDisplayContentOverrides" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverrides.Initializer"></a>

```typescript
import { dataAwsccApiportalProductApiPage } from '@cdktn/provider-awscc'

const dataAwsccApiportalProductApiPageDisplayContentOverrides: dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverrides = { ... }
```


### DataAwsccApiportalProductApiPageStatusException <a name="DataAwsccApiportalProductApiPageStatusException" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusException"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusException.Initializer"></a>

```typescript
import { dataAwsccApiportalProductApiPage } from '@cdktn/provider-awscc'

const dataAwsccApiportalProductApiPageStatusException: dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusException = { ... }
```


### DataAwsccApiportalProductApiPageTags <a name="DataAwsccApiportalProductApiPageTags" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTags.Initializer"></a>

```typescript
import { dataAwsccApiportalProductApiPage } from '@cdktn/provider-awscc'

const dataAwsccApiportalProductApiPageTags: dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference <a name="DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer"></a>

```typescript
import { dataAwsccApiportalProductApiPage } from '@cdktn/provider-awscc'

new dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierParts">DataAwsccApiportalProductApiPageApiIdIdentifierParts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApiportalProductApiPageApiIdIdentifierParts;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierParts">DataAwsccApiportalProductApiPageApiIdIdentifierParts</a>

---


### DataAwsccApiportalProductApiPageApiIdOutputReference <a name="DataAwsccApiportalProductApiPageApiIdOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.Initializer"></a>

```typescript
import { dataAwsccApiportalProductApiPage } from '@cdktn/provider-awscc'

new dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.identifierParts">identifierParts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference">DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiId">DataAwsccApiportalProductApiPageApiId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifierParts`<sup>Required</sup> <a name="identifierParts" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.identifierParts"></a>

```typescript
public readonly identifierParts: DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference">DataAwsccApiportalProductApiPageApiIdIdentifierPartsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApiportalProductApiPageApiId;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageApiId">DataAwsccApiportalProductApiPageApiId</a>

---


### DataAwsccApiportalProductApiPageDisplayContentOutputReference <a name="DataAwsccApiportalProductApiPageDisplayContentOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.Initializer"></a>

```typescript
import { dataAwsccApiportalProductApiPage } from '@cdktn/provider-awscc'

new dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.apiUrl">apiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.none">none</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.operationName">operationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference">DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContent">DataAwsccApiportalProductApiPageDisplayContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiUrl`<sup>Required</sup> <a name="apiUrl" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.none"></a>

```typescript
public readonly none: string;
```

- *Type:* string

---

##### `operationName`<sup>Required</sup> <a name="operationName" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.operationName"></a>

```typescript
public readonly operationName: string;
```

- *Type:* string

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.overrides"></a>

```typescript
public readonly overrides: DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference">DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApiportalProductApiPageDisplayContent;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContent">DataAwsccApiportalProductApiPageDisplayContent</a>

---


### DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference <a name="DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer"></a>

```typescript
import { dataAwsccApiportalProductApiPage } from '@cdktn/provider-awscc'

new dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.apiUrl">apiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.operationName">operationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverrides">DataAwsccApiportalProductApiPageDisplayContentOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiUrl`<sup>Required</sup> <a name="apiUrl" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `operationName`<sup>Required</sup> <a name="operationName" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.operationName"></a>

```typescript
public readonly operationName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApiportalProductApiPageDisplayContentOverrides;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageDisplayContentOverrides">DataAwsccApiportalProductApiPageDisplayContentOverrides</a>

---


### DataAwsccApiportalProductApiPageStatusExceptionOutputReference <a name="DataAwsccApiportalProductApiPageStatusExceptionOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.Initializer"></a>

```typescript
import { dataAwsccApiportalProductApiPage } from '@cdktn/provider-awscc'

new dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.exception">exception</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusException">DataAwsccApiportalProductApiPageStatusException</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exception`<sup>Required</sup> <a name="exception" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.exception"></a>

```typescript
public readonly exception: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusExceptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApiportalProductApiPageStatusException;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageStatusException">DataAwsccApiportalProductApiPageStatusException</a>

---


### DataAwsccApiportalProductApiPageTagsList <a name="DataAwsccApiportalProductApiPageTagsList" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.Initializer"></a>

```typescript
import { dataAwsccApiportalProductApiPage } from '@cdktn/provider-awscc'

new dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.get"></a>

```typescript
public get(index: number): DataAwsccApiportalProductApiPageTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccApiportalProductApiPageTagsOutputReference <a name="DataAwsccApiportalProductApiPageTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccApiportalProductApiPage } from '@cdktn/provider-awscc'

new dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTags">DataAwsccApiportalProductApiPageTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApiportalProductApiPageTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApiportalProductApiPage.DataAwsccApiportalProductApiPageTags">DataAwsccApiportalProductApiPageTags</a>

---



