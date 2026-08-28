# `dataAwsccHealthlakeFhirDatastore` Submodule <a name="`dataAwsccHealthlakeFhirDatastore` Submodule" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccHealthlakeFhirDatastore <a name="DataAwsccHealthlakeFhirDatastore" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/healthlake_fhir_datastore awscc_healthlake_fhir_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer"></a>

```typescript
import { dataAwsccHealthlakeFhirDatastore } from '@cdktn/provider-awscc'

new dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore(scope: Construct, id: string, config: DataAwsccHealthlakeFhirDatastoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig">DataAwsccHealthlakeFhirDatastoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig">DataAwsccHealthlakeFhirDatastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccHealthlakeFhirDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isConstruct"></a>

```typescript
import { dataAwsccHealthlakeFhirDatastore } from '@cdktn/provider-awscc'

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformElement"></a>

```typescript
import { dataAwsccHealthlakeFhirDatastore } from '@cdktn/provider-awscc'

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformDataSource"></a>

```typescript
import { dataAwsccHealthlakeFhirDatastore } from '@cdktn/provider-awscc'

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport"></a>

```typescript
import { dataAwsccHealthlakeFhirDatastore } from '@cdktn/provider-awscc'

dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccHealthlakeFhirDatastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccHealthlakeFhirDatastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccHealthlakeFhirDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/healthlake_fhir_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccHealthlakeFhirDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.createdAt">createdAt</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference">DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreArn">datastoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreEndpoint">datastoreEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreId">datastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreName">datastoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreStatus">datastoreStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreTypeVersion">datastoreTypeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.identityProviderConfiguration">identityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference">DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.preloadDataConfig">preloadDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference">DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.sseConfiguration">sseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference">DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList">DataAwsccHealthlakeFhirDatastoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.createdAt"></a>

```typescript
public readonly createdAt: DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference">DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference</a>

---

##### `datastoreArn`<sup>Required</sup> <a name="datastoreArn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreArn"></a>

```typescript
public readonly datastoreArn: string;
```

- *Type:* string

---

##### `datastoreEndpoint`<sup>Required</sup> <a name="datastoreEndpoint" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreEndpoint"></a>

```typescript
public readonly datastoreEndpoint: string;
```

- *Type:* string

---

##### `datastoreId`<sup>Required</sup> <a name="datastoreId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreId"></a>

```typescript
public readonly datastoreId: string;
```

- *Type:* string

---

##### `datastoreName`<sup>Required</sup> <a name="datastoreName" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreName"></a>

```typescript
public readonly datastoreName: string;
```

- *Type:* string

---

##### `datastoreStatus`<sup>Required</sup> <a name="datastoreStatus" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreStatus"></a>

```typescript
public readonly datastoreStatus: string;
```

- *Type:* string

---

##### `datastoreTypeVersion`<sup>Required</sup> <a name="datastoreTypeVersion" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.datastoreTypeVersion"></a>

```typescript
public readonly datastoreTypeVersion: string;
```

- *Type:* string

---

##### `identityProviderConfiguration`<sup>Required</sup> <a name="identityProviderConfiguration" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.identityProviderConfiguration"></a>

```typescript
public readonly identityProviderConfiguration: DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference">DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference</a>

---

##### `preloadDataConfig`<sup>Required</sup> <a name="preloadDataConfig" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.preloadDataConfig"></a>

```typescript
public readonly preloadDataConfig: DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference">DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference</a>

---

##### `sseConfiguration`<sup>Required</sup> <a name="sseConfiguration" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.sseConfiguration"></a>

```typescript
public readonly sseConfiguration: DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference">DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.tags"></a>

```typescript
public readonly tags: DataAwsccHealthlakeFhirDatastoreTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList">DataAwsccHealthlakeFhirDatastoreTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccHealthlakeFhirDatastoreConfig <a name="DataAwsccHealthlakeFhirDatastoreConfig" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.Initializer"></a>

```typescript
import { dataAwsccHealthlakeFhirDatastore } from '@cdktn/provider-awscc'

const dataAwsccHealthlakeFhirDatastoreConfig: dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/healthlake_fhir_datastore#id DataAwsccHealthlakeFhirDatastore#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccHealthlakeFhirDatastoreCreatedAt <a name="DataAwsccHealthlakeFhirDatastoreCreatedAt" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAt.Initializer"></a>

```typescript
import { dataAwsccHealthlakeFhirDatastore } from '@cdktn/provider-awscc'

const dataAwsccHealthlakeFhirDatastoreCreatedAt: dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAt = { ... }
```


### DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration <a name="DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration.Initializer"></a>

```typescript
import { dataAwsccHealthlakeFhirDatastore } from '@cdktn/provider-awscc'

const dataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration: dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration = { ... }
```


### DataAwsccHealthlakeFhirDatastorePreloadDataConfig <a name="DataAwsccHealthlakeFhirDatastorePreloadDataConfig" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfig.Initializer"></a>

```typescript
import { dataAwsccHealthlakeFhirDatastore } from '@cdktn/provider-awscc'

const dataAwsccHealthlakeFhirDatastorePreloadDataConfig: dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfig = { ... }
```


### DataAwsccHealthlakeFhirDatastoreSseConfiguration <a name="DataAwsccHealthlakeFhirDatastoreSseConfiguration" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfiguration.Initializer"></a>

```typescript
import { dataAwsccHealthlakeFhirDatastore } from '@cdktn/provider-awscc'

const dataAwsccHealthlakeFhirDatastoreSseConfiguration: dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfiguration = { ... }
```


### DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig <a name="DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.Initializer"></a>

```typescript
import { dataAwsccHealthlakeFhirDatastore } from '@cdktn/provider-awscc'

const dataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig: dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig = { ... }
```


### DataAwsccHealthlakeFhirDatastoreTags <a name="DataAwsccHealthlakeFhirDatastoreTags" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTags.Initializer"></a>

```typescript
import { dataAwsccHealthlakeFhirDatastore } from '@cdktn/provider-awscc'

const dataAwsccHealthlakeFhirDatastoreTags: dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference <a name="DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.Initializer"></a>

```typescript
import { dataAwsccHealthlakeFhirDatastore } from '@cdktn/provider-awscc'

new dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.seconds">seconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAt">DataAwsccHealthlakeFhirDatastoreCreatedAt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.seconds"></a>

```typescript
public readonly seconds: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAtOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccHealthlakeFhirDatastoreCreatedAt;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreCreatedAt">DataAwsccHealthlakeFhirDatastoreCreatedAt</a>

---


### DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference <a name="DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccHealthlakeFhirDatastore } from '@cdktn/provider-awscc'

new dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategy">authorizationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabled">fineGrainedAuthorizationEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArn">idpLambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration">DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationStrategy`<sup>Required</sup> <a name="authorizationStrategy" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategy"></a>

```typescript
public readonly authorizationStrategy: string;
```

- *Type:* string

---

##### `fineGrainedAuthorizationEnabled`<sup>Required</sup> <a name="fineGrainedAuthorizationEnabled" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabled"></a>

```typescript
public readonly fineGrainedAuthorizationEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `idpLambdaArn`<sup>Required</sup> <a name="idpLambdaArn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArn"></a>

```typescript
public readonly idpLambdaArn: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration">DataAwsccHealthlakeFhirDatastoreIdentityProviderConfiguration</a>

---


### DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference <a name="DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccHealthlakeFhirDatastore } from '@cdktn/provider-awscc'

new dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataType">preloadDataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfig">DataAwsccHealthlakeFhirDatastorePreloadDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preloadDataType`<sup>Required</sup> <a name="preloadDataType" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataType"></a>

```typescript
public readonly preloadDataType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccHealthlakeFhirDatastorePreloadDataConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastorePreloadDataConfig">DataAwsccHealthlakeFhirDatastorePreloadDataConfig</a>

---


### DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference <a name="DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccHealthlakeFhirDatastore } from '@cdktn/provider-awscc'

new dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkType">cmkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cmkType`<sup>Required</sup> <a name="cmkType" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkType"></a>

```typescript
public readonly cmkType: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a>

---


### DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference <a name="DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccHealthlakeFhirDatastore } from '@cdktn/provider-awscc'

new dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfig">kmsEncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference">DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfiguration">DataAwsccHealthlakeFhirDatastoreSseConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsEncryptionConfig`<sup>Required</sup> <a name="kmsEncryptionConfig" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfig"></a>

```typescript
public readonly kmsEncryptionConfig: DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference">DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccHealthlakeFhirDatastoreSseConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreSseConfiguration">DataAwsccHealthlakeFhirDatastoreSseConfiguration</a>

---


### DataAwsccHealthlakeFhirDatastoreTagsList <a name="DataAwsccHealthlakeFhirDatastoreTagsList" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer"></a>

```typescript
import { dataAwsccHealthlakeFhirDatastore } from '@cdktn/provider-awscc'

new dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.get"></a>

```typescript
public get(index: number): DataAwsccHealthlakeFhirDatastoreTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccHealthlakeFhirDatastoreTagsOutputReference <a name="DataAwsccHealthlakeFhirDatastoreTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccHealthlakeFhirDatastore } from '@cdktn/provider-awscc'

new dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTags">DataAwsccHealthlakeFhirDatastoreTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccHealthlakeFhirDatastoreTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccHealthlakeFhirDatastore.DataAwsccHealthlakeFhirDatastoreTags">DataAwsccHealthlakeFhirDatastoreTags</a>

---



